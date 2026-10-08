import os
import smtplib
from datetime import datetime, timedelta
from email.mime.text import MIMEText

from apscheduler.schedulers.asyncio import AsyncIOScheduler

from database import SessionLocal
from job_api import fetch_jobs
from ml_ranker import rank_jobs
from models import NotificationSubscription, Profile, User

SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
SMTP_FROM_EMAIL = os.getenv("SMTP_FROM_EMAIL", SMTP_USERNAME or "noreply@example.com")
ENABLE_NOTIFICATION_SCHEDULER = os.getenv("ENABLE_NOTIFICATION_SCHEDULER", "true").lower() == "true"

scheduler = AsyncIOScheduler()


def upsert_subscription(db, user_id: int, email: str, frequency: str):
    subscription = (
        db.query(NotificationSubscription)
        .filter(NotificationSubscription.user_id == user_id)
        .first()
    )
    if subscription:
        subscription.email = email
        subscription.frequency = frequency
        subscription.active = True
    else:
        subscription = NotificationSubscription(user_id=user_id, email=email, frequency=frequency)
        db.add(subscription)
    db.commit()
    db.refresh(subscription)
    return subscription


def _should_send(subscription: NotificationSubscription) -> bool:
    interval = timedelta(days=1 if subscription.frequency == "daily" else 7)
    if subscription.last_sent_at is None:
        return True
    return datetime.utcnow() - subscription.last_sent_at >= interval


def _send_email(recipient: str, subject: str, body: str) -> bool:
    if not all([SMTP_HOST, SMTP_USERNAME, SMTP_PASSWORD]):
        return False

    message = MIMEText(body)
    message["Subject"] = subject
    message["From"] = SMTP_FROM_EMAIL
    message["To"] = recipient

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USERNAME, SMTP_PASSWORD)
        server.sendmail(SMTP_FROM_EMAIL, [recipient], message.as_string())
    return True


def _build_email_body(user: User, jobs: list[dict]) -> str:
    lines = [
        f"Hello {user.full_name},",
        "",
        "Here are your latest AI-ranked career matches:",
        "",
    ]
    for index, job in enumerate(jobs[:5], start=1):
        lines.extend(
            [
                f"{index}. {job['job_title']} at {job['company_name']}",
                f"   Location: {job['location']}",
                f"   AI Score: {job['ai_score']}% | Readiness: {job['job_readiness_score']}%",
                f"   Apply: {job['apply_link']}",
                "",
            ]
        )
    lines.append("Keep building momentum. Your next role is getting closer every week.")
    return "\n".join(lines)


async def dispatch_scheduled_notifications():
    db = SessionLocal()
    try:
        subscriptions = db.query(NotificationSubscription).filter(NotificationSubscription.active.is_(True)).all()
        for subscription in subscriptions:
            if not _should_send(subscription):
                continue

            user = db.query(User).filter(User.id == subscription.user_id).first()
            profile = db.query(Profile).filter(Profile.user_id == subscription.user_id).first()
            if not user or not profile:
                continue

            jobs = await fetch_jobs(profile, mode_override=profile.mode, limit=10)
            ranked = rank_jobs(profile, jobs, top_n=5)
            if not ranked["jobs"]:
                continue

            if _send_email(subscription.email, "Your Smart Career Guidance job alerts", _build_email_body(user, ranked["jobs"])):
                subscription.last_sent_at = datetime.utcnow()
                db.commit()
    finally:
        db.close()


def start_scheduler():
    if not ENABLE_NOTIFICATION_SCHEDULER or scheduler.running:
        return
    scheduler.add_job(dispatch_scheduled_notifications, "interval", hours=6, max_instances=1, coalesce=True)
    scheduler.start()


def stop_scheduler():
    if scheduler.running:
        scheduler.shutdown(wait=False)
