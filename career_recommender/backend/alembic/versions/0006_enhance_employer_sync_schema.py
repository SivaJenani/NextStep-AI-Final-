"""enhance employer sync schema

Revision ID: 0006_enhance_employer_sync_schema
Revises: 0005_add_employer_portal_tables
Create Date: 2026-04-29 00:30:00
"""

from alembic import op
import sqlalchemy as sa


revision = "0006_enhance_employer_sync_schema"
down_revision = "0005_add_employer_portal_tables"
branch_labels = None
depends_on = None


def upgrade():
    op.add_column("employers", sa.Column("careers_page_url", sa.Text(), nullable=True))
    op.add_column("employers", sa.Column("integration_methods", sa.JSON(), nullable=False, server_default='["manual"]'))
    op.add_column("employers", sa.Column("webhook_enabled", sa.Boolean(), nullable=False, server_default="0"))
    op.add_column("employers", sa.Column("last_webhook_at", sa.DateTime(), nullable=True))
    op.add_column("employers", sa.Column("last_sync_at", sa.DateTime(), nullable=True))
    op.add_column("employers", sa.Column("sync_status", sa.String(length=30), nullable=False, server_default="ready"))

    op.add_column("job_postings", sa.Column("schema_version", sa.String(length=20), nullable=False, server_default="1.0"))
    op.add_column("job_postings", sa.Column("source_method", sa.String(length=30), nullable=False, server_default="manual"))
    op.add_column("job_postings", sa.Column("source_reference", sa.String(length=120), nullable=True))
    op.add_column("job_postings", sa.Column("sync_status", sa.String(length=30), nullable=False, server_default="synced"))
    op.add_column("job_postings", sa.Column("published_to_candidates", sa.Boolean(), nullable=False, server_default="1"))
    op.add_column("job_postings", sa.Column("closed_at", sa.DateTime(), nullable=True))
    op.add_column("job_postings", sa.Column("raw_payload", sa.JSON(), nullable=False, server_default="{}"))


def downgrade():
    op.drop_column("job_postings", "raw_payload")
    op.drop_column("job_postings", "closed_at")
    op.drop_column("job_postings", "published_to_candidates")
    op.drop_column("job_postings", "sync_status")
    op.drop_column("job_postings", "source_reference")
    op.drop_column("job_postings", "source_method")
    op.drop_column("job_postings", "schema_version")

    op.drop_column("employers", "sync_status")
    op.drop_column("employers", "last_sync_at")
    op.drop_column("employers", "last_webhook_at")
    op.drop_column("employers", "webhook_enabled")
    op.drop_column("employers", "integration_methods")
    op.drop_column("employers", "careers_page_url")
