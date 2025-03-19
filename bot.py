import logging
from aiogram import Bot, Dispatcher, types
from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup
from aiogram.utils import executor
import sqlite3
import os

API_TOKEN = os.getenv('API_TOKEN')  # Используйте переменные окружения для токена

logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)

# Подключение к базе данных SQLite
conn = sqlite3.connect('fantasy_league.db')
cursor = conn.cursor()

# Функция для создания таблицы пользователей
def create_users_table():
    cursor.execute(''' 
    CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY,
        username TEXT,
        team_name TEXT,
        points INTEGER,
        last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')
    conn.commit()

# Функция для добавления/обновления пользователя
def add_or_update_user(user_id, username):
    cursor.execute(''' 
    INSERT OR REPLACE INTO users (user_id, username, team_name, points) 
    VALUES (?, ?, ?, ?) 
    ''', (user_id, username, "", 0))
    conn.commit()

# Команда /start
@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    user = message.from_user
    add_or_update_user(user.id, user.username)
    await message.answer(f"Привет, {user.first_name}! Добро пожаловать в футбольную фэнтези-лигу. Используй /help для получения информации.")

# Команда /help
@dp.message_handler(commands=['help'])
async def help_command(message: types.Message):
    help_text = """
    Для начала игры выбери команду и следи за результатами:
    /team - Создать или просмотреть свою команду
    /stats - Статистика твоей команды
    /leaderboard - Турнирная таблица
    /notifications - Настрой уведомления
    """
    await message.answer(help_text)

# Переход в mini app
@dp.message_handler(commands=['team'])
async def team_command(message: types.Message):
    keyboard = InlineKeyboardMarkup()
    button = InlineKeyboardButton("Перейти в Fantasy League", url="https://your-mini-app-link.vercel.app")
    keyboard.add(button)
    await message.answer("Нажми кнопку для перехода в мини-приложение", reply_markup=keyboard)

# Старт бота
if __name__ == '__main__':
    create_users_table()
    from aiogram import executor
    executor.start_polling(dp, skip_updates=True)