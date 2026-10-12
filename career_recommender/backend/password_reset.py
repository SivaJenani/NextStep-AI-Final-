"""Forgot / reset password flow.

- Single-use, 30 minute tokens. Only a SHA-256 hash of the token is stored.
- The forgot endpoint always returns the same message (no account enumeration).
- Email goes out through Brevo's HTTPS API (Render free blocks SMTP ports).
"""
import hashlib
import logging
import os
import secrets
import time
from datetime import datetime, timedelta

import httpx
from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy.orm import Session

from auth import get_password_hash
from database import get_db
from models import PasswordResetToken, User

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/auth", tags=["auth"])

TOKEN_TTL_MINUTES = 30
MAX_ACTIVE_TOKENS_PER_HOUR = 3
GENERIC_MESSAGE = "If an account exists for that email, a reset link has been sent."

_attempts: dict[str, list[float]] = {}


def _rate_limited(key: str, limit: int = 5, window: int = 600) -> bool:
    now = time.time()
    hits = [t for t in _attempts.get(key, []) if now - t < window]
    if len(hits) >= limit:
        _attempts[key] = hits
        return True
    hits.append(now)
    _attempts[key] = hits
    return False


def _hash(token: str) -> str:
    return hashlib.sha256(token.encode()).hexdigest()


def _frontend_url() -> str:
    return os.getenv("FRONTEND_URL", "https://www.nextsteppro.in").rstrip("/")


def send_reset_email(to_email: str, name: str, link: str) -> None:
    api_key = os.getenv("BREVO_API_KEY")
    sender = os.getenv("RESET_FROM_EMAIL")
    if not api_key or not sender:
        logger.warning("Reset email not sent: BREVO_API_KEY / RESET_FROM_EMAIL not configured.")
        return
    html = (
        f"<p>Hi {name},</p>"
        f"<p>We got a request to reset your NextStep AI password. This link works once and expires in "
        f"{TOKEN_TTL_MINUTES} minutes:</p>"
        f'<p><a href="{link}">Reset my password</a></p>'
        "<p>If you did not ask for this, ignore this email. Your password stays the same.</p>"
    )
    try:
        resp = httpx.post(
            "https://api.brevo.com/v3/smtp/email",
            headers={"api-key": api_key, "accept": "application/json"},
            json={
                "sender": {"name": "NextStep AI", "email": sender},
                "to": [{"email": to_email}],
                "subject": "Reset your NextStep AI password",
                "htmlContent": html,
            },
            timeout=15,
        )
        if resp.status_code >= 300:
            logger.warning("Brevo send failed: %s", resp.status_code)
    except Exception:
        logger.exception("Brevo send error")


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class ResetPasswordRequest(BaseModel):
    token: str = Field(..., min_length=20, max_length=200)
    new_password: str = Field(..., min_length=6, max_length=120)


@router.post("/forgot-password")
def forgot_password(payload: ForgotPasswordRequest, background: BackgroundTasks, db: Session = Depends(get_db)):
    email = str(payload.email).strip()
    if _rate_limited(email.lower()):
        return {"message": GENERIC_MESSAGE}
    user = db.query(User).filter(User.email == email).first()
    if user:
        recent = (
            db.query(PasswordResetToken)
            .filter(PasswordResetToken.user_id == user.id, PasswordResetToken.created_at > datetime.utcnow() - timedelta(hours=1))
            .count()
        )
        if recent < MAX_ACTIVE_TOKENS_PER_HOUR:
            token = secrets.token_urlsafe(32)
            db.add(
                PasswordResetToken(
                    user_id=user.id,
                    token_hash=_hash(token),
                    expires_at=datetime.utcnow() + timedelta(minutes=TOKEN_TTL_MINUTES),
                )
            )
            db.commit()
            link = f"{_frontend_url()}/reset-password?token={token}"
            background.add_task(send_reset_email, user.email, user.full_name, link)
    return {"message": GENERIC_MESSAGE}


@router.post("/reset-password")
def reset_password(payload: ResetPasswordRequest, db: Session = Depends(get_db)):
    if _rate_limited("reset:" + _hash(payload.token)[:16], limit=10):
        raise HTTPException(status_code=429, detail="Too many attempts. Try again later.")
    row = db.query(PasswordResetToken).filter(PasswordResetToken.token_hash == _hash(payload.token)).first()
    if not row or row.used_at is not None or row.expires_at < datetime.utcnow():
        raise HTTPException(status_code=400, detail="This reset link is invalid or has expired.")
    user = db.query(User).filter(User.id == row.user_id).first()
    if not user:
        raise HTTPException(status_code=400, detail="This reset link is invalid or has expired.")
    user.hashed_password = get_password_hash(payload.new_password)
    row.used_at = datetime.utcnow()
    # invalidate any other outstanding tokens for this user
    db.query(PasswordResetToken).filter(
        PasswordResetToken.user_id == user.id, PasswordResetToken.used_at.is_(None)
    ).update({"used_at": datetime.utcnow()})
    db.commit()
    return {"message": "Password updated. You can sign in now."}
