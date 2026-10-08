"""add employer portal tables

Revision ID: 0005_add_employer_portal_tables
Revises: 0004_add_profile_years_of_experience
Create Date: 2026-04-29 00:00:00
"""

from alembic import op
import sqlalchemy as sa


revision = "0005_add_employer_portal_tables"
down_revision = "0004_add_profile_years_of_experience"
branch_labels = None
depends_on = None


def upgrade():
    # Create employers table
    op.create_table(
        "employers",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("company_name", sa.String(length=200), nullable=False),
        sa.Column("company_website", sa.Text(), nullable=True),
        sa.Column("company_description", sa.Text(), nullable=True),
        sa.Column("industry", sa.String(length=100), nullable=True),
        sa.Column("company_size", sa.String(length=50), nullable=True),
        sa.Column("location", sa.String(length=120), nullable=True),
        sa.Column("contact_email", sa.String(length=120), nullable=False),
        sa.Column("hashed_password", sa.String(length=255), nullable=False),
        sa.Column("contact_phone", sa.String(length=20), nullable=True),
        sa.Column("logo_url", sa.Text(), nullable=True),
        sa.Column("is_verified", sa.Boolean(), nullable=False, server_default="0"),
        sa.Column("verification_token", sa.String(length=255), nullable=True),
        sa.Column("ats_system", sa.String(length=100), nullable=True),
        sa.Column("webhook_url", sa.Text(), nullable=True),
        sa.Column("webhook_secret", sa.String(length=255), nullable=True),
        sa.Column("created_at", sa.DateTime(), nullable=False, server_default=sa.text("CURRENT_TIMESTAMP")),
        sa.Column("updated_at", sa.DateTime(), nullable=False, server_default=sa.text("CURRENT_TIMESTAMP")),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("contact_email"),
    )
    op.create_index(op.f("ix_employers_contact_email"), "employers", ["contact_email"], unique=True)
    op.create_index(op.f("ix_employers_id"), "employers", ["id"], unique=False)

    # Create job_postings table
    op.create_table(
        "job_postings",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("employer_id", sa.Integer(), nullable=False),
        sa.Column("job_id", sa.String(length=100), nullable=False),
        sa.Column("title", sa.String(length=200), nullable=False),
        sa.Column("department", sa.String(length=100), nullable=True),
        sa.Column("employment_type", sa.String(length=50), nullable=False),
        sa.Column("experience_level", sa.String(length=50), nullable=True),
        sa.Column("work_location_type", sa.String(length=50), nullable=False, server_default="on-site"),
        sa.Column("location_city", sa.String(length=100), nullable=True),
        sa.Column("location_state", sa.String(length=100), nullable=True),
        sa.Column("location_country", sa.String(length=100), nullable=True),
        sa.Column("location_postal_code", sa.String(length=20), nullable=True),
        sa.Column("is_remote", sa.Boolean(), nullable=False, server_default="0"),
        sa.Column("salary_min", sa.Float(), nullable=True),
        sa.Column("salary_max", sa.Float(), nullable=True),
        sa.Column("salary_currency", sa.String(length=3), nullable=False, server_default="USD"),
        sa.Column("salary_period", sa.String(length=20), nullable=False, server_default="yearly"),
        sa.Column("show_salary", sa.Boolean(), nullable=False, server_default="1"),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("requirements", sa.Text(), nullable=True),
        sa.Column("responsibilities", sa.Text(), nullable=True),
        sa.Column("benefits", sa.JSON(), nullable=False, server_default="[]"),
        sa.Column("skills_required", sa.JSON(), nullable=False, server_default="[]"),
        sa.Column("skills_preferred", sa.JSON(), nullable=False, server_default="[]"),
        sa.Column("application_deadline", sa.DateTime(), nullable=True),
        sa.Column("application_url", sa.Text(), nullable=True),
        sa.Column("application_email", sa.String(length=120), nullable=True),
        sa.Column("status", sa.String(length=50), nullable=False, server_default="active"),
        sa.Column("posted_at", sa.DateTime(), nullable=False, server_default=sa.text("CURRENT_TIMESTAMP")),
        sa.Column("updated_at", sa.DateTime(), nullable=False, server_default=sa.text("CURRENT_TIMESTAMP")),
        sa.Column("created_at", sa.DateTime(), nullable=False, server_default=sa.text("CURRENT_TIMESTAMP")),
        sa.Column("ats_job_id", sa.String(length=100), nullable=True),
        sa.Column("ats_last_sync", sa.DateTime(), nullable=True),
        sa.ForeignKeyConstraint(["employer_id"], ["employers.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("job_id"),
    )
    op.create_index(op.f("ix_job_postings_employer_id"), "job_postings", ["employer_id"], unique=False)
    op.create_index(op.f("ix_job_postings_job_id"), "job_postings", ["job_id"], unique=True)
    op.create_index(op.f("ix_job_postings_id"), "job_postings", ["id"], unique=False)


def downgrade():
    op.drop_table("job_postings")
    op.drop_table("employers")