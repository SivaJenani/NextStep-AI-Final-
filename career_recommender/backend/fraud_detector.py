from urllib.parse import urlparse


SUSPICIOUS_HOSTS = {"bit.ly", "tinyurl.com", "goo.gl", "t.me", "wa.me"}
SUSPICIOUS_PHRASES = {
    "quick money",
    "investment required",
    "pay to apply",
    "urgent hiring no interview",
    "guaranteed selection",
    "earn instantly",
}


def analyze_job_posting(job: dict) -> dict:
    reasons: list[str] = []
    risk_score = 0

    company_name = (job.get("company_name") or "").strip()
    description = (job.get("job_description") or "").strip()
    apply_link = (job.get("apply_link") or "").strip()
    salary_max = job.get("salary_max") or 0

    if not company_name or company_name.lower() in {"unknown", "confidential", "n/a"}:
        risk_score += 30
        reasons.append("Company details are missing or vague.")

    if len(description) < 80:
        risk_score += 20
        reasons.append("Job description is unusually short or incomplete.")

    if apply_link:
        parsed = urlparse(apply_link)
        if parsed.scheme not in {"http", "https", "mailto"}:
            risk_score += 25
            reasons.append("Apply link does not use a standard web protocol.")
        if parsed.scheme in {"http", "https"} and parsed.netloc.lower() in SUSPICIOUS_HOSTS:
            risk_score += 25
            reasons.append("Apply link uses a shortened or suspicious domain.")
    else:
        risk_score += 25
        reasons.append("Apply link is missing.")

    if salary_max and salary_max > 500000:
        risk_score += 20
        reasons.append("Salary appears unrealistic for the role.")

    lower_text = f"{job.get('job_title', '')} {description}".lower()
    matched_phrases = [phrase for phrase in SUSPICIOUS_PHRASES if phrase in lower_text]
    if matched_phrases:
        risk_score += 20
        reasons.append("Listing contains suspicious urgency or payment language.")

    return {
        "is_potential_scam": risk_score >= 40,
        "risk_score": min(risk_score, 100),
        "scam_reasons": reasons,
    }
