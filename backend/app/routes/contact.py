import logging

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import ContactMessage
from app.schemas import ContactCreate, ContactResponse
from app.services.email_service import send_contact_notification

logger = logging.getLogger("portfolio.contact")

router = APIRouter(prefix="/api", tags=["contact"])


@router.post(
    "/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a contact-form message",
)
def submit_contact(payload: ContactCreate, db: Session = Depends(get_db)) -> ContactResponse:
    record = ContactMessage(
        name=payload.name.strip(),
        email=payload.email.strip().lower(),
        message=payload.message.strip(),
    )

    try:
        db.add(record)
        db.commit()
        db.refresh(record)
    except Exception:
        db.rollback()
        logger.exception("Failed to persist contact message")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Could not store your message. Please try again later.",
        )

    notified = send_contact_notification(
        name=record.name,
        email=record.email,
        message=record.message,
    )
    if notified:
        record.notified = True
        try:
            db.commit()
        except Exception:  # notification flag is best-effort
            db.rollback()

    return ContactResponse(id=record.id)
