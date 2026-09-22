import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy import text

from app.config import settings
from app.database import SessionLocal, init_db
from app.routes import contact
from app.schemas import HealthResponse

logging.basicConfig(
    level=logging.DEBUG if settings.debug else logging.INFO,
    format="%(asctime)s %(levelname)s %(name)s %(message)s",
)
logger = logging.getLogger("portfolio")


@asynccontextmanager
async def lifespan(_: FastAPI):
    try:
        init_db()
        logger.info("Database tables ready")
    except Exception:
        logger.exception("Database initialization failed — API will still start")
    yield


def create_app() -> FastAPI:
    app = FastAPI(
        title=settings.app_name,
        description="Backend API for the G Sreedev portfolio site.",
        version="1.0.0",
        lifespan=lifespan,
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origin_list,
        allow_credentials=True,
        allow_methods=["GET", "POST"],
        allow_headers=["*"],
    )

    @app.exception_handler(RequestValidationError)
    async def validation_handler(_: Request, exc: RequestValidationError) -> JSONResponse:
        return JSONResponse(
            status_code=422,
            content={
                "detail": exc.errors(),
                "message": "Validation failed. Check the highlighted fields.",
            },
        )

    @app.exception_handler(Exception)
    async def unhandled_handler(_: Request, __: Exception) -> JSONResponse:
        logger.exception("Unhandled error")
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"message": "An unexpected error occurred. Please try again."},
        )

    @app.get("/api/health", response_model=HealthResponse, tags=["health"])
    def health() -> HealthResponse:
        database = "down"
        try:
            with SessionLocal() as db:
                db.execute(text("SELECT 1"))
            database = "up"
        except Exception:
            logger.exception("Database health check failed")
        return HealthResponse(
            status="ok",
            service=settings.app_name,
            database=database,
        )

    app.include_router(contact.router)
    return app


app = create_app()
