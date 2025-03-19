import sqlite3

# Создание подключения к базе данных (если файла нет, он будет создан)
conn = sqlite3.connect('database/fantasy_league.db')
cursor = conn.cursor()

# Создание таблицы для пользователей
cursor.execute(''' 
CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    username TEXT,
    team_name TEXT,
    points INTEGER DEFAULT 0
)
''')

# Создание таблицы для футболистов
cursor.execute(''' 
CREATE TABLE IF NOT EXISTS players (
    player_id INTEGER PRIMARY KEY,
    name TEXT,
    position TEXT,
    team TEXT,
    points INTEGER DEFAULT 0
)
''')

# Создание таблицы для матчей (если нужно будет сохранять данные о матчах)
cursor.execute(''' 
CREATE TABLE IF NOT EXISTS matches (
    match_id INTEGER PRIMARY KEY,
    player_id INTEGER,
    match_date TEXT,
    match_result TEXT,
    FOREIGN KEY (player_id) REFERENCES players(player_id)
)
''')

# Создание таблицы для туров
cursor.execute('''
CREATE TABLE IF NOT EXISTS rounds (
    round_id INTEGER PRIMARY KEY,
    start_date TEXT,
    end_date TEXT,
    is_active INTEGER DEFAULT 1
)
''')

# Сохранение изменений и закрытие подключения
conn.commit()
conn.close()

print("База данных и таблицы успешно созданы.")