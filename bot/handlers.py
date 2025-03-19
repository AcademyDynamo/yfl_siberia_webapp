from aiogram import Router, types
from aiogram.filters import Command
from database import add_user

router = Router()

@router.message(Command("start"))
async def start_handler(message: types.Message):
    user_id = message.from_user.id
    username = message.from_user.username or "unknown"
    team_name = f"Команда {username}"
    
    add_user(user_id, username, team_name)
    await message.answer(f"Привет, {username}! Добро пожаловать в Fantasy League!")