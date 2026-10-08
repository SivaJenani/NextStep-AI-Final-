"""add jobs table

Revision ID: 0002_add_jobs_table
Revises: 0001_initial
Create Date: 2026-04-24 18:05:00
"""

from alembic import op
import sqlalchemy as sa


revision = "0002_add_jobs_table"
down_revision = "0001_initial"
branch_labels = None
depends_on = None


def upgrade():
    bind = op.get_bind()
    inspector = sa.inspect(bind)

    if inspector.has_table("jobs"):
        return

    op.create_table(
        "jobs",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("title", sa.String(length=200), nullable=False),
        sa.Column("company", sa.String(length=200), nullable=True),
        sa.Column("location", sa.String(length=120), nullable=True),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("skills", sa.JSON(), nullable=False),
        sa.Column("salary_range", sa.String(length=80), nullable=True),
        sa.Column("apply_url", sa.Text(), nullable=True),
        sa.Column("posted_at", sa.Float(), nullable=False),
        sa.Column("source", sa.String(length=50), nullable=False),
        sa.Column("is_remote", sa.Boolean(), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=False),
        sa.Column("updated_at", sa.DateTime(), nullable=False),
    )
    op.create_index(op.f("ix_jobs_id"), "jobs", ["id"], unique=False)


def downgrade():
    bind = op.get_bind()
    inspector = sa.inspect(bind)

    if not inspector.has_table("jobs"):
        return

    op.drop_index(op.f("ix_jobs_id"), table_name="jobs")
    op.drop_table("jobs")
