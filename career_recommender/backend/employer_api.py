import csv
import hashlib
import hmac
import io
import logging
import secrets
from datetime import datetime

from fastapi import APIRouter, Depends, File, HTTPException, Request, UploadFile
from sqlalchemy import or_
from sqlalchemy.orm import Session, joinedload

from database import get_db
from employer_auth import authenticate_employer, create_access_token, get_current_employer, get_password_hash
from job_api import clear_job_search_cache
from job_service import get_all_jobs
from models import Employer, JobPosting
from schemas import (
    CSVUploadResponse,
    EmployerIntegrationConfigUpdate,
    EmployerIntegrationOut,
    EmployerAuthResponse,
    EmployerCreate,
    EmployerLogin,
    EmployerOut,
    EmployerProfileUpdate,
    JobPostingCreate,
    JobPostingListResponse,
    JobPostingOut,
    JobPostingUpdate,
    WebhookEvent,
    WebhookJobCreate,
    WebhookJobUpdate,
    WebhookResponse,
)

router = APIRouter(prefix="/employer", tags=["employer"])
logger = logging.getLogger(__name__)

ALLOWED_INTEGRATION_METHODS = {"manual", "csv", "ats_webhook"}
SUPPORTED_ATS_PROVIDERS = [
    "Greenhouse",
    "Lever",
    "Workday",
    "SmartRecruiters",
    "BambooHR",
    "iCIMS",
    "JazzHR",
    "Breezy HR",
]
JOB_MUTABLE_FIELDS = {
    "title",
    "department",
    "employment_type",
    "experience_level",
    "work_location_type",
    "location_city",
    "location_state",
    "location_country",
    "location_postal_code",
    "is_remote",
    "salary_min",
    "salary_max",
    "salary_currency",
    "salary_period",
    "show_salary",
    "description",
    "requirements",
    "responsibilities",
    "benefits",
    "skills_required",
    "skills_preferred",
    "application_deadline",
    "application_url",
    "application_email",
    "ats_job_id",
    "status",
}


def _utcnow() -> datetime:
    return datetime.utcnow()


def _normalize_integration_methods(methods: list[str] | None) -> list[str]:
    ordered: list[str] = []
    for method in methods or ["manual"]:
        cleaned = " ".join((method or "").split()).strip().lower()
        if cleaned in ALLOWED_INTEGRATION_METHODS and cleaned not in ordered:
            ordered.append(cleaned)
    return ordered or ["manual"]


def _build_webhook_endpoint(request: Request, employer_id: int) -> str:
    return f"{str(request.base_url).rstrip('/')}/employer/webhook/{employer_id}"


def _integration_response(current_employer: Employer, request: Request) -> EmployerIntegrationOut:
    return EmployerIntegrationOut(
        employer_id=current_employer.id,
        ats_system=current_employer.ats_system,
        careers_page_url=current_employer.careers_page_url,
        integration_methods=_normalize_integration_methods(current_employer.integration_methods),
        webhook_url=current_employer.webhook_url,
        webhook_endpoint=_build_webhook_endpoint(request, current_employer.id),
        webhook_enabled=bool(current_employer.webhook_enabled),
        webhook_secret=current_employer.webhook_secret or "",
        last_webhook_at=current_employer.last_webhook_at,
        last_sync_at=current_employer.last_sync_at,
        sync_status=current_employer.sync_status or "ready",
    )


def _refresh_platform_indexes(app) -> None:
    clear_job_search_cache()
    recommender = getattr(getattr(app, "state", None), "recommender", None)
    if recommender is None:
        return

    try:
        recommender.fit(get_all_jobs())
    except Exception:
        logger.exception("Failed to refresh semantic recommender after employer sync.")


def _mark_sync(current_employer: Employer, method: str, status_label: str = "synced", webhook_event: bool = False) -> None:
    current_employer.integration_methods = _normalize_integration_methods(
        [*(current_employer.integration_methods or []), method]
    )
    current_employer.last_sync_at = _utcnow()
    current_employer.sync_status = status_label
    if webhook_event:
        current_employer.last_webhook_at = current_employer.last_sync_at


def _apply_job_payload(
    job_posting: JobPosting,
    payload: JobPostingCreate | JobPostingUpdate | WebhookJobCreate | WebhookJobUpdate,
    *,
    employer_id: int,
    source_method: str,
    source_reference: str | None = None,
    raw_payload: dict | None = None,
) -> JobPosting:
    payload_data = payload.model_dump(exclude_unset=True)
    now = _utcnow()

    for field in JOB_MUTABLE_FIELDS:
        if field in payload_data:
            setattr(job_posting, field, payload_data[field])

    if getattr(payload, "job_id", None):
        job_posting.job_id = getattr(payload, "job_id")

    if "published_to_candidates" in payload_data:
        job_posting.published_to_candidates = bool(payload_data["published_to_candidates"])
    elif job_posting.id is None:
        job_posting.published_to_candidates = True

    resolved_status = payload_data.get("status", getattr(job_posting, "status", "active"))
    if resolved_status in {"closed", "filled"}:
        job_posting.closed_at = now
        job_posting.published_to_candidates = False
        job_posting.sync_status = "closed"
    elif resolved_status == "active":
        job_posting.closed_at = None
        job_posting.sync_status = "synced"
    else:
        job_posting.sync_status = getattr(job_posting, "sync_status", "synced") or "synced"

    if not payload_data.get("application_url") and payload_data.get("application_email"):
        job_posting.application_url = f"mailto:{payload_data['application_email']}"

    job_posting.employer_id = employer_id
    job_posting.schema_version = "1.0"
    job_posting.source_method = source_method
    job_posting.source_reference = source_reference
    job_posting.raw_payload = raw_payload or payload_data
    if source_method == "ats_webhook":
        job_posting.ats_last_sync = now
        if not job_posting.ats_job_id:
            job_posting.ats_job_id = getattr(payload, "ats_job_id", None) or getattr(payload, "job_id", None)

    return job_posting


def _find_job_for_employer(db: Session, employer_id: int, job_id: str, ats_job_id: str | None = None) -> JobPosting | None:
    filters = [JobPosting.job_id == job_id]
    if ats_job_id:
        filters.append(JobPosting.ats_job_id == ats_job_id)
    return (
        db.query(JobPosting)
        .options(joinedload(JobPosting.employer))
        .filter(JobPosting.employer_id == employer_id)
        .filter(or_(*filters))
        .first()
    )


def _coerce_bool(value: str | None, default: bool = False) -> bool:
    if value is None or value == "":
        return default
    return str(value).strip().lower() in {"1", "true", "yes", "y"}


def _split_csv_list(value: str | None) -> list[str]:
    return [item.strip() for item in (value or "").split(",") if item.strip()]


def _parse_optional_datetime(value: str | None) -> datetime | None:
    cleaned = " ".join((value or "").split()).strip()
    if not cleaned:
        return None
    return datetime.fromisoformat(cleaned.replace("Z", "+00:00"))


async def _verify_webhook_request(request: Request, employer: Employer) -> bytes:
    if not employer.webhook_secret or not employer.webhook_enabled:
        raise HTTPException(status_code=409, detail="Webhook integration is not enabled for this employer.")

    raw_body = await request.body()
    signature = request.headers.get("x-webhook-signature")
    shared_secret = request.headers.get("x-webhook-secret")

    if signature:
        received = signature.removeprefix("sha256=")
        expected = hmac.new(employer.webhook_secret.encode("utf-8"), raw_body, hashlib.sha256).hexdigest()
        if not hmac.compare_digest(received, expected):
            raise HTTPException(status_code=401, detail="Invalid webhook signature.")
        return raw_body

    if shared_secret and hmac.compare_digest(shared_secret, employer.webhook_secret):
        return raw_body

    raise HTTPException(status_code=401, detail="Missing or invalid webhook secret.")


# Authentication endpoints
@router.post("/auth/register", response_model=EmployerOut)
def register_employer(employer_data: EmployerCreate, db: Session = Depends(get_db)):
    # Check if employer already exists
    existing_employer = db.query(Employer).filter(Employer.contact_email == employer_data.contact_email).first()
    if existing_employer:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Create new employer
    hashed_password = get_password_hash(employer_data.password)
    verification_token = secrets.token_urlsafe(32)

    employer = Employer(
        company_name=employer_data.company_name,
        company_website=employer_data.company_website,
        company_description=employer_data.company_description,
        industry=employer_data.industry,
        company_size=employer_data.company_size,
        location=employer_data.location,
        contact_email=employer_data.contact_email,
        hashed_password=hashed_password,
        contact_phone=employer_data.contact_phone,
        logo_url=employer_data.logo_url,
        ats_system=employer_data.ats_system,
        careers_page_url=employer_data.careers_page_url or employer_data.company_website,
        integration_methods=_normalize_integration_methods(employer_data.integration_methods),
        webhook_secret=secrets.token_urlsafe(32),
        webhook_enabled=False,
        sync_status="ready",
        verification_token=verification_token,
        is_verified=False,  # Would need email verification in production
    )

    db.add(employer)
    db.commit()
    db.refresh(employer)
    return employer


@router.post("/auth/login", response_model=EmployerAuthResponse)
def login_employer(credentials: EmployerLogin, db: Session = Depends(get_db)):
    employer = authenticate_employer(db, credentials.email, credentials.password)
    if not employer:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(data={"sub": employer.contact_email})
    return EmployerAuthResponse(access_token=access_token, employer=employer)


# Job posting endpoints
@router.post("/jobs", response_model=JobPostingOut)
def create_job_posting(
    request: Request,
    job_data: JobPostingCreate,
    current_employer: Employer = Depends(get_current_employer),
    db: Session = Depends(get_db),
):
    existing_job = _find_job_for_employer(db, current_employer.id, job_data.job_id, job_data.ats_job_id)
    if existing_job:
        raise HTTPException(status_code=400, detail="Job ID already exists")

    job_posting = _apply_job_payload(
        JobPosting(),
        job_data,
        employer_id=current_employer.id,
        source_method="manual",
        source_reference="manual_portal",
        raw_payload=job_data.model_dump(),
    )

    db.add(job_posting)
    _mark_sync(current_employer, "manual")
    db.commit()
    db.refresh(job_posting)
    _refresh_platform_indexes(request.app)
    return job_posting


@router.get("/jobs", response_model=JobPostingListResponse)
def list_job_postings(
    page: int = 1,
    per_page: int = 20,
    status: str | None = None,
    current_employer: Employer = Depends(get_current_employer),
    db: Session = Depends(get_db),
):
    query = (
        db.query(JobPosting)
        .options(joinedload(JobPosting.employer))
        .filter(JobPosting.employer_id == current_employer.id)
    )

    if status:
        query = query.filter(JobPosting.status == status)

    total = query.count()
    jobs = query.offset((page - 1) * per_page).limit(per_page).all()

    return JobPostingListResponse(
        jobs=jobs,
        total=total,
        page=page,
        per_page=per_page
    )


@router.get("/jobs/{job_id}", response_model=JobPostingOut)
def get_job_posting(
    job_id: str,
    current_employer: Employer = Depends(get_current_employer),
    db: Session = Depends(get_db),
):
    job = _find_job_for_employer(db, current_employer.id, job_id)

    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    return job


@router.put("/jobs/{job_id}", response_model=JobPostingOut)
def update_job_posting(
    request: Request,
    job_id: str,
    job_data: JobPostingUpdate,
    current_employer: Employer = Depends(get_current_employer),
    db: Session = Depends(get_db),
):
    job = _find_job_for_employer(db, current_employer.id, job_id)

    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    _apply_job_payload(
        job,
        job_data,
        employer_id=current_employer.id,
        source_method=job.source_method or "manual",
        source_reference=job_data.source_reference or job.source_reference,
        raw_payload=job_data.model_dump(exclude_unset=True),
    )
    job.updated_at = _utcnow()
    _mark_sync(current_employer, job.source_method or "manual")
    db.commit()
    db.refresh(job)
    _refresh_platform_indexes(request.app)
    return job


@router.delete("/jobs/{job_id}")
def delete_job_posting(
    request: Request,
    job_id: str,
    current_employer: Employer = Depends(get_current_employer),
    db: Session = Depends(get_db),
):
    job = _find_job_for_employer(db, current_employer.id, job_id)

    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    job.status = "closed"
    job.closed_at = _utcnow()
    job.published_to_candidates = False
    job.sync_status = "closed"
    job.updated_at = _utcnow()
    _mark_sync(current_employer, job.source_method or "manual", status_label="closed")
    db.commit()
    _refresh_platform_indexes(request.app)
    return {"detail": "Job closed successfully"}


# CSV Upload endpoint
@router.post("/jobs/upload-csv", response_model=CSVUploadResponse)
def upload_jobs_csv(
    request: Request,
    file: UploadFile = File(...),
    current_employer: Employer = Depends(get_current_employer),
    db: Session = Depends(get_db),
):
    if not (file.filename or "").lower().endswith(".csv"):
        raise HTTPException(status_code=400, detail="File must be a CSV")

    content = file.file.read().decode("utf-8")
    csv_reader = csv.DictReader(io.StringIO(content))
    batch_id = f"csv-{current_employer.id}-{int(_utcnow().timestamp())}"

    jobs_created = 0
    jobs_updated = 0
    errors = []

    for row_num, row in enumerate(csv_reader, start=2):
        try:
            job_data = JobPostingCreate(
                job_id=row.get("job_id") or row.get("ats_job_id") or f"csv_{current_employer.id}_{row_num}",
                title=row["title"],
                department=row.get("department"),
                employment_type=(row.get("employment_type") or "full-time").strip().lower(),
                experience_level=(row.get("experience_level") or None),
                work_location_type=(row.get("work_location_type") or "on-site").strip().lower(),
                location_city=row.get("location_city"),
                location_state=row.get("location_state"),
                location_country=row.get("location_country"),
                location_postal_code=row.get("location_postal_code"),
                is_remote=_coerce_bool(row.get("is_remote"), default=False),
                salary_min=float(row["salary_min"]) if row.get("salary_min") else None,
                salary_max=float(row["salary_max"]) if row.get("salary_max") else None,
                salary_currency=row.get("salary_currency") or "USD",
                salary_period=(row.get("salary_period") or "yearly").strip().lower(),
                show_salary=_coerce_bool(row.get("show_salary"), default=True),
                description=row["description"],
                requirements=row.get("requirements"),
                responsibilities=row.get("responsibilities"),
                benefits=_split_csv_list(row.get("benefits")),
                skills_required=_split_csv_list(row.get("skills_required")),
                skills_preferred=_split_csv_list(row.get("skills_preferred")),
                application_deadline=_parse_optional_datetime(row.get("application_deadline")),
                application_url=row.get("application_url"),
                application_email=row.get("application_email"),
                ats_job_id=row.get("ats_job_id"),
                published_to_candidates=_coerce_bool(row.get("published_to_candidates"), default=True),
            )

            existing_job = _find_job_for_employer(db, current_employer.id, job_data.job_id, job_data.ats_job_id)
            if existing_job:
                _apply_job_payload(
                    existing_job,
                    job_data,
                    employer_id=current_employer.id,
                    source_method="csv",
                    source_reference=batch_id,
                    raw_payload=row,
                )
                jobs_updated += 1
            else:
                job_posting = _apply_job_payload(
                    JobPosting(),
                    job_data,
                    employer_id=current_employer.id,
                    source_method="csv",
                    source_reference=batch_id,
                    raw_payload=row,
                )
                db.add(job_posting)
                jobs_created += 1

        except Exception as e:
            errors.append(f"Row {row_num}: {str(e)}")

    _mark_sync(current_employer, "csv")
    db.commit()
    _refresh_platform_indexes(request.app)

    return CSVUploadResponse(
        batch_id=batch_id,
        jobs_created=jobs_created,
        jobs_updated=jobs_updated,
        errors=errors,
        total_rows_processed=jobs_created + jobs_updated + len(errors),
    )


# Webhook endpoint for ATS integration
@router.post("/webhook/{employer_id}", response_model=WebhookResponse)
async def ats_webhook(
    employer_id: int,
    request: Request,
    db: Session = Depends(get_db),
):
    employer = db.query(Employer).filter(Employer.id == employer_id).first()
    if not employer:
        raise HTTPException(status_code=404, detail="Employer not found")

    raw_body = await _verify_webhook_request(request, employer)
    event = WebhookEvent.model_validate_json(raw_body)
    source_reference = f"{event.event_type}:{event.timestamp}"

    if event.event_type == "job.created":
        job_data = WebhookJobCreate.model_validate(event.data)
        job_posting = _find_job_for_employer(db, employer.id, job_data.job_id, job_data.ats_job_id) or JobPosting()
        _apply_job_payload(
            job_posting,
            job_data,
            employer_id=employer.id,
            source_method="ats_webhook",
            source_reference=job_data.source_reference or source_reference,
            raw_payload=event.model_dump(),
        )
        if job_posting.id is None:
            db.add(job_posting)
        response = WebhookResponse(
            status="success",
            message="Processed job.created",
            job_id=job_posting.job_id,
        )

    elif event.event_type == "job.updated":
        job_data = WebhookJobUpdate.model_validate(event.data)
        job = _find_job_for_employer(db, employer.id, job_data.job_id, job_data.ats_job_id)
        if not job:
            response = WebhookResponse(
                status="ignored",
                message="No matching job found for job.updated",
                job_id=job_data.job_id,
            )
        else:
            _apply_job_payload(
                job,
                job_data,
                employer_id=employer.id,
                source_method="ats_webhook",
                source_reference=job_data.source_reference or source_reference,
                raw_payload=event.model_dump(),
            )
            job.updated_at = _utcnow()
            response = WebhookResponse(
                status="success",
                message="Processed job.updated",
                job_id=job.job_id,
            )

    else:
        job_data = event.data
        job = _find_job_for_employer(db, employer.id, job_data.job_id, getattr(job_data, "ats_job_id", None))
        if not job:
            response = WebhookResponse(
                status="ignored",
                message="No matching job found for job.deleted",
                job_id=job_data.job_id,
            )
        else:
            job.status = "closed"
            job.closed_at = _utcnow()
            job.published_to_candidates = False
            job.source_method = "ats_webhook"
            job.source_reference = source_reference
            job.sync_status = "closed"
            job.ats_last_sync = _utcnow()
            job.raw_payload = event.model_dump()
            response = WebhookResponse(
                status="success",
                message="Processed job.deleted as a closure sync",
                job_id=job.job_id,
            )

    _mark_sync(employer, "ats_webhook", status_label="synced", webhook_event=True)
    db.commit()
    _refresh_platform_indexes(request.app)
    return response


# Employer profile endpoints
@router.get("/profile", response_model=EmployerOut)
def get_employer_profile(current_employer: Employer = Depends(get_current_employer)):
    return current_employer


@router.put("/profile", response_model=EmployerOut)
def update_employer_profile(
    profile_data: EmployerProfileUpdate,
    current_employer: Employer = Depends(get_current_employer),
    db: Session = Depends(get_db),
):
    update_data = profile_data.model_dump(exclude_unset=True)
    if "password" in update_data:
        update_data["hashed_password"] = get_password_hash(update_data.pop("password"))

    for field, value in update_data.items():
        setattr(current_employer, field, value)

    current_employer.updated_at = _utcnow()
    db.commit()
    db.refresh(current_employer)
    return current_employer


@router.get("/integration", response_model=EmployerIntegrationOut)
def get_integration_settings(
    request: Request,
    current_employer: Employer = Depends(get_current_employer),
):
    return _integration_response(current_employer, request)


@router.get("/integration/providers")
def list_supported_ats_providers():
    return {
        "supported_ats_providers": SUPPORTED_ATS_PROVIDERS,
        "description": (
            "Set your ATS provider name in ats_system when configuring employer integration. "
            "Use the webhook endpoint returned by /employer/integration for job sync events."
        ),
        "webhook_events": ["job.created", "job.updated", "job.deleted"],
        "headers": {
            "x-webhook-signature": "sha256=<hex-signature>",
            "x-webhook-secret": "<shared-secret>"
        },
    }


@router.get("/integration/sample-webhook")
def get_webhook_sample(
    request: Request,
    current_employer: Employer = Depends(get_current_employer),
):
    return {
        "webhook_endpoint": _build_webhook_endpoint(request, current_employer.id),
        "sample_payload": {
            "event_type": "job.created",
            "timestamp": "2026-04-29T12:00:00Z",
            "data": {
                "job_id": "external-job-123",
                "ats_job_id": "ats-456",
                "title": "Software Engineer",
                "employment_type": "full-time",
                "work_location_type": "remote",
                "location_city": "Bangalore",
                "location_country": "India",
                "description": "Build, ship, and maintain our product.",
                "application_url": "https://careers.example.com/apply/123",
                "status": "active",
            },
        },
        "verification_options": [
            "x-webhook-signature with sha256 HMAC",
            "x-webhook-secret shared header",
        ],
    }


@router.put("/integration", response_model=EmployerIntegrationOut)
def update_integration_settings(
    request: Request,
    payload: EmployerIntegrationConfigUpdate,
    current_employer: Employer = Depends(get_current_employer),
    db: Session = Depends(get_db),
):
    update_data = payload.model_dump(exclude_unset=True)
    if "integration_methods" in update_data:
        current_employer.integration_methods = _normalize_integration_methods(update_data["integration_methods"])
    if "ats_system" in update_data:
        current_employer.ats_system = update_data["ats_system"]
    if "careers_page_url" in update_data:
        current_employer.careers_page_url = update_data["careers_page_url"]
    if "webhook_url" in update_data:
        current_employer.webhook_url = update_data["webhook_url"]
    if "webhook_enabled" in update_data:
        current_employer.webhook_enabled = bool(update_data["webhook_enabled"])
        if current_employer.webhook_enabled and not current_employer.webhook_secret:
            current_employer.webhook_secret = secrets.token_urlsafe(32)

    current_employer.updated_at = _utcnow()
    db.commit()
    db.refresh(current_employer)
    return _integration_response(current_employer, request)


@router.post("/integration/rotate-webhook-secret", response_model=EmployerIntegrationOut)
def rotate_webhook_secret(
    request: Request,
    current_employer: Employer = Depends(get_current_employer),
    db: Session = Depends(get_db),
):
    current_employer.webhook_secret = secrets.token_urlsafe(32)
    current_employer.webhook_enabled = True
    current_employer.updated_at = _utcnow()
    db.commit()
    db.refresh(current_employer)
    return _integration_response(current_employer, request)
