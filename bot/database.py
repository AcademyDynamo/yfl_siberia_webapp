import sqlite3

DB_NAME = "fantasy_league.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    
    cur.execute("""
    CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        position TEXT NOT NULL,
        team TEXT NOT NULL
    )
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT,
        team_name TEXT
    )
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS fantasy_teams (
        user_id INTEGER,
        player_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (player_id) REFERENCES players(id)
    )
    """)

    conn.commit()
    conn.close()

def add_user(user_id, username, team_name):
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("INSERT INTO users (id, username, team_name) VALUES (?, ?, ?)", (user_id, username, team_name))
    conn.commit()
    conn.close()