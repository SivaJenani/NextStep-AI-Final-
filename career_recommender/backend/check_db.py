import sqlite3

conn = sqlite3.connect('career_recommender.db')
cursor = conn.cursor()

# Get all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = [row[0] for row in cursor.fetchall()]
print("Tables:", tables)

# Check if alembic_version exists
if 'alembic_version' in tables:
    cursor.execute('SELECT * FROM alembic_version')
    print("Alembic version:", cursor.fetchall())
else:
    print("No alembic_version table found")

# Check if employers table exists
if 'employers' in tables:
    print("Employers table exists!")
    cursor.execute("PRAGMA table_info(employers)")
    print("Employers columns:", cursor.fetchall())

conn.close()
