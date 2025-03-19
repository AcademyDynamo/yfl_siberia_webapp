document.addEventListener("DOMContentLoaded", async () => {
    const players = document.querySelectorAll(".player");

    // Получаем список игроков с сервера
    async function fetchPlayers() {
        const response = await fetch("http://127.0.0.1:5000/players");
        return await response.json();
    }

    // Получаем список запасных с сервера
    async function fetchSubstitutes() {
        const response = await fetch("http://127.0.0.1:5000/substitutes");
        return await response.json();
    }

    // Заполняем игроков на поле
    async function loadPlayers() {
        const loadedPlayers = await fetchPlayers();
        players.forEach((player, index) => {
            if (loadedPlayers[index]) {
                player.dataset.id = loadedPlayers[index].id;
                player.querySelector(".player-name").textContent = loadedPlayers[index].name;
            }
        });
    }

    await loadPlayers();

    // Открытие списка замен
    async function showSubstitutes(clickedPlayer) {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const substitutesContainer = document.createElement("div");
        substitutesContainer.classList.add("substitutes-container");

        const substitutes = await fetchSubstitutes();

        substitutes.forEach(sub => {
            const listItem = document.createElement("div");
            listItem.classList.add("substitute-item");
            listItem.textContent = ${sub.name} - ${sub.team} (${sub.position});

            listItem.addEventListener("click", () => {
                clickedPlayer.querySelector(".player-name").textContent = sub.name;
                closeSubstitutes();
            });

            substitutesContainer.appendChild(listItem);
        });

        overlay.appendChild(substitutesContainer);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeSubstitutes();
            }
        });
    }

    // Закрытие списка замен
    function closeSubstitutes() {
        const overlay = document.querySelector(".overlay");
        if (overlay) {
            overlay.remove();
        }
    }

    // Назначаем обработчик клика на футболки
    players.forEach(player => {
        player.addEventListener("click", () => showSubstitutes(player));
    });
});
