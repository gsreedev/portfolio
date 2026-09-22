from datetime import datetime

from pydantic import BaseModel, EmailStr, Field, ConfigDict


class ContactCreate(BaseModel):
    name: str = Field(
        ...,
        min_length=2,
        max_length=100,
        examples=["Jane Doe"],
    )
    email: EmailStr = Field(..., max_length=254, examples=["jane@example.com"])
    message: str = Field(
        ...,
        min_length=10,
        max_length=2000,
        examples=["I'd like to discuss a backend role..."],
    )


class ContactResponse(BaseModel):
    status: str = "received"
    id: int
    detail: str = "Message stored. You will receive a reply within one business day."


class ContactRecord(ContactResponse):
    model_config = ConfigDict(from_attributes=True)

    name: str
    email: str
    message: str
    created_at: datetime


class HealthResponse(BaseModel):
    status: str = "ok"
    service: str
    database: str
