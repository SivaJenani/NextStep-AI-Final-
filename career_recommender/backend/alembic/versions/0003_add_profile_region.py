"""add profile region

Revision ID: 0003_add_profile_region
Revises: 0002_add_jobs_table
Create Date: 2026-04-24 22:20:00
"""

from alembic import op
import sqlalchemy as sa


revision = "0003_add_profile_region"
down_revision = "0002_add_jobs_table"
branch_labels = None
depends_on = None


def upgrade():
    bind = op.get_bind()
    inspector = sa.inspect(bind)
    columns = {column["name"] for column in inspector.get_columns("profiles")}

    if "region" in columns:
        return

    with op.batch_alter_table("profiles") as batch_op:
        batch_op.add_column(sa.Column("region", sa.String(length=120), nullable=True))


def downgrade():
    bind = op.get_bind()
    inspector = sa.inspect(bind)
    columns = {column["name"] for column in inspector.get_columns("profiles")}

    if "region" not in columns:
        return

    with op.batch_alter_table("profiles") as batch_op:
        batch_op.drop_column("region")
