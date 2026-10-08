import os
from pathlib import Path
import logging

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from env_config import load_backend_env

load_backend_env()
logger = logging.getLogger(__name__)


def _normalize_database_url(url: str) -> str:
    if not url.startswith("sqlite:///"):
        return url

    sqlite_path = url.removeprefix("sqlite:///")

    # Keep in-memory DBs and already-absolute SQLite URLs unchanged.
    if sqlite_path == ":memory:" or Path(sqlite_path).is_absolute():
        return url

    absolute_path = (Path(__file__).resolve().parent / sqlite_path).resolve()
    return f"sqlite:///{absolute_path.as_posix()}"


DATABASE_URL = _normalize_database_url(
    os.getenv("DATABASE_URL", "sqlite:///./career_recommender.db")
)

connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(DATABASE_URL, connect_args=connect_args, future=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, future=True)
Base = declarative_base()


SQLITE_SCHEMA_PATCHES = {
    "employers": {
        "hashed_password": "ALTER TABLE employers ADD COLUMN hashed_password VARCHAR(255) NOT NULL DEFAULT ''",
        "careers_page_url": "ALTER TABLE employers ADD COLUMN careers_page_url TEXT",
        "integration_methods": "ALTER TABLE employers ADD COLUMN integration_methods JSON NOT NULL DEFAULT '[\"manual\"]'",
        "webhook_enabled": "ALTER TABLE employers ADD COLUMN webhook_enabled BOOLEAN NOT NULL DEFAULT 0",
        "last_webhook_at": "ALTER TABLE employers ADD COLUMN last_webhook_at DATETIME",
        "last_sync_at": "ALTER TABLE employers ADD COLUMN last_sync_at DATETIME",
        "sync_status": "ALTER TABLE employers ADD COLUMN sync_status VARCHAR(30) NOT NULL DEFAULT 'ready'",
    },
    "job_postings": {
        "schema_version": "ALTER TABLE job_postings ADD COLUMN schema_version VARCHAR(20) NOT NULL DEFAULT '1.0'",
        "source_method": "ALTER TABLE job_postings ADD COLUMN source_method VARCHAR(30) NOT NULL DEFAULT 'manual'",
        "source_reference": "ALTER TABLE job_postings ADD COLUMN source_reference VARCHAR(120)",
        "sync_status": "ALTER TABLE job_postings ADD COLUMN sync_status VARCHAR(30) NOT NULL DEFAULT 'synced'",
        "published_to_candidates": "ALTER TABLE job_postings ADD COLUMN published_to_candidates BOOLEAN NOT NULL DEFAULT 1",
        "closed_at": "ALTER TABLE job_postings ADD COLUMN closed_at DATETIME",
        "raw_payload": "ALTER TABLE job_postings ADD COLUMN raw_payload JSON NOT NULL DEFAULT '{}'",
    },
    "jobs": {
        "stipend_salary": "ALTER TABLE jobs ADD COLUMN stipend_salary VARCHAR(120)",
        "job_type": "ALTER TABLE jobs ADD COLUMN job_type VARCHAR(20) NOT NULL DEFAULT 'internal'",
    },
}


def _apply_sqlite_schema_patches():
    if not DATABASE_URL.startswith("sqlite"):
        return

    with engine.begin() as connection:
        tables = {
            row[0]
            for row in connection.exec_driver_sql(
                "SELECT name FROM sqlite_master WHERE type='table'"
            ).fetchall()
        }

        for table_name, patches in SQLITE_SCHEMA_PATCHES.items():
            if table_name not in tables:
                continue

            existing_columns = {
                row[1]
                for row in connection.exec_driver_sql(f"PRAGMA table_info({table_name})").fetchall()
            }

            for column_name, ddl in patches.items():
                if column_name in existing_columns:
                    continue
                connection.exec_driver_sql(ddl)
                logger.warning(
                    "Applied SQLite compatibility patch for missing column %s.%s",
                    table_name,
                    column_name,
                )


def init_db():
    # Import models here so their tables are registered on Base.metadata
    # before create_all() runs.
    import models  # noqa: F401

    Base.metadata.create_all(bind=engine)
    _apply_sqlite_schema_patches()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
