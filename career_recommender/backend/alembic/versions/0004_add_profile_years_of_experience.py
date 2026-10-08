"""add profile years of experience

Revision ID: 0004_add_profile_years_of_experience
Revises: 0003_add_profile_region
Create Date: 2026-04-25 00:05:00
"""

from alembic import op
import sqlalchemy as sa


revision = "0004_add_profile_years_of_experience"
down_revision = "0003_add_profile_region"
branch_labels = None
depends_on = None


def upgrade():
    bind = op.get_bind()
    inspector = sa.inspect(bind)
    columns = {column["name"] for column in inspector.get_columns("profiles")}

    if "years_of_experience" in columns:
        return

    with op.batch_alter_table("profiles") as batch_op:
        batch_op.add_column(sa.Column("years_of_experience", sa.Float(), nullable=True, server_default="0"))


def downgrade():
    bind = op.get_bind()
    inspector = sa.inspect(bind)
    columns = {column["name"] for column in inspector.get_columns("profiles")}

    if "years_of_experience" not in columns:
        return

    with op.batch_alter_table("profiles") as batch_op:
        batch_op.drop_column("years_of_experience")
