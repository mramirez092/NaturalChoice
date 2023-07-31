"""empty message

Revision ID: 004b9a7073e7
Revises: 35e17dc02b2d
Create Date: 2023-07-28 12:08:02.882295

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '004b9a7073e7'
down_revision = '35e17dc02b2d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('usuario')
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))

    op.create_table('usuario',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='usuario_pkey'),
    sa.UniqueConstraint('email', name='usuario_email_key')
    )
    # ### end Alembic commands ###