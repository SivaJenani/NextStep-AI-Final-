import sqlite3

conn = sqlite3.connect('career_recommender.db')
cursor = conn.cursor()

# First, let's verify what's in alembic_version
cursor.execute('SELECT * FROM alembic_version')
current = cursor.fetchall()
print("Current alembic_version:", current)

# Update to show that 0005 and 0006 have been applied
# We need to set the version to 0006 since it includes all the previous migrations
cursor.execute("UPDATE alembic_version SET version_num = '0006_enhance_employer_sync_schema'")

# Verify the update
cursor.execute('SELECT * FROM alembic_version')
updated = cursor.fetchall()
print("Updated alembic_version:", updated)

conn.commit()
conn.close()

print("\nFix complete! Run 'python -m alembic upgrade head' again to verify.")
