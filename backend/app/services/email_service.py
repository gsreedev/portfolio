import logging
import smtplib
from email.message import EmailMessage

from app.config import settings

logger = logging.getLogger("portfolio.email")


def smtp_configured() -> bool:
    return bool(
        settings.smtp_host
        and settings.smtp_user
        and settings.smtp_from
        and settings.smtp_to
    )


def send_contact_notification(name: str, email: str, message: str) -> bool:
    """Notify by email when SMTP is configured.

    Returns True on success. Never raises — contact submissions must not fail
    because of email delivery issues.
    """
    if not smtp_configured():
        logger.info(
            "SMTP not configured; skipping email notification (message from %s stored in DB).",
            email,
        )
        return False

    body = EmailMessage()
    body["Subject"] = f"Portfolio contact: {name}"
    body["From"] = settings.smtp_from
    body["To"] = settings.smtp_to
    body["Reply-To"] = email
    body.set_content(f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}")

    try:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=15) as server:
            if settings.smtp_use_tls:
                server.starttls()
            server.login(settings.smtp_user, settings.smtp_password)
            server.send_message(body)
        return True
    except Exception:
        logger.exception("Failed to send contact notification email")
        return False
