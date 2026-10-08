"""initial schema

Revision ID: 0001_initial
Revises: 
Create Date: 2026-04-20 12:00:00
"""

from alembic import op
import sqlalchemy as sa


revision = "0001_initial"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "users",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("full_name", sa.String(length=120), nullable=False),
        sa.Column("email", sa.String(length=120), nullable=False),
        sa.Column("hashed_password", sa.String(length=255), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=False),
    )
    op.create_index(op.f("ix_users_id"), "users", ["id"], unique=False)
    op.create_index(op.f("ix_users_email"), "users", ["email"], unique=True)

    op.create_table(
        "profiles",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column("skills", sa.JSON(), nullable=False),
        sa.Column("domain", sa.String(length=120), nullable=False),
        sa.Column("location", sa.String(length=120), nullable=False),
        sa.Column("experience_level", sa.String(length=50), nullable=False),
        sa.Column("mode", sa.String(length=30), nullable=False),
        sa.Column("desired_role", sa.String(length=120), nullable=True),
        sa.Column("resume_text", sa.Text(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.UniqueConstraint("user_id"),
    )
    op.create_index(op.f("ix_profiles_id"), "profiles", ["id"], unique=False)

    op.create_table(
        "bookmarks",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column("external_job_id", sa.String(length=120), nullable=False),
        sa.Column("job_title", sa.String(length=200), nullable=False),
        sa.Column("company_name", sa.String(length=200), nullable=True),
        sa.Column("location", sa.String(length=120), nullable=True),
        sa.Column("employment_type", sa.String(length=80), nullable=True),
        sa.Column("posted_date", sa.String(length=80), nullable=True),
        sa.Column("apply_link", sa.Text(), nullable=True),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("ai_score", sa.Float(), nullable=False),
        sa.Column("readiness_score", sa.Float(), nullable=False),
        sa.Column("status", sa.String(length=40), nullable=False),
        sa.Column("is_potential_scam", sa.Boolean(), nullable=False),
        sa.Column("scam_reasons", sa.JSON(), nullable=False),
        sa.Column("raw_job", sa.JSON(), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=False),
        sa.Column("updated_at", sa.DateTime(), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
    )
    op.create_index(op.f("ix_bookmarks_id"), "bookmarks", ["id"], unique=False)
    op.create_index(op.f("ix_bookmarks_external_job_id"), "bookmarks", ["external_job_id"], unique=False)
    op.create_index(op.f("ix_bookmarks_user_id"), "bookmarks", ["user_id"], unique=False)

    op.create_table(
        "notification_subscriptions",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column("email", sa.String(length=120), nullable=False),
        sa.Column("frequency", sa.String(length=20), nullable=False),
        sa.Column("active", sa.Boolean(), nullable=False),
        sa.Column("last_sent_at", sa.DateTime(), nullable=True),
        sa.Column("created_at", sa.DateTime(), nullable=False),
        sa.Column("updated_at", sa.DateTime(), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
    )
    op.create_index(op.f("ix_notification_subscriptions_id"), "notification_subscriptions", ["id"], unique=False)
    op.create_index(op.f("ix_notification_subscriptions_user_id"), "notification_subscriptions", ["user_id"], unique=False)


def downgrade():
    op.drop_index(op.f("ix_notification_subscriptions_user_id"), table_name="notification_subscriptions")
    op.drop_index(op.f("ix_notification_subscriptions_id"), table_name="notification_subscriptions")
    op.drop_table("notification_subscriptions")

    op.drop_index(op.f("ix_bookmarks_user_id"), table_name="bookmarks")
    op.drop_index(op.f("ix_bookmarks_external_job_id"), table_name="bookmarks")
    op.drop_index(op.f("ix_bookmarks_id"), table_name="bookmarks")
    op.drop_table("bookmarks")

    op.drop_index(op.f("ix_profiles_id"), table_name="profiles")
    op.drop_table("profiles")

    op.drop_index(op.f("ix_users_email"), table_name="users")
    op.drop_index(op.f("ix_users_id"), table_name="users")
    op.drop_table("users")
