// script.js
let selectedPlayers = [];

function selectPlayer(playerId) {
    if (!selectedPlayers.includes(playerId)) {
        selectedPlayers.push(playerId);
        document.getElementById(playerId).style.backgroundColor = "#66bb6a"; // Цвет выбранного игрока
    } else {
        selectedPlayers = selectedPlayers.filter(player => player !== playerId);
        document.getElementById(playerId).style.backgroundColor = "#444"; // Возврат к стандартному цвету
    }
}

function saveGame() {
    alert("Игра сохранена!");
    // Здесь можно отправить данные на сервер или в базу данных
}

function endGame() {
    alert("Игра завершена!");
    // Обработка завершения игры
}
