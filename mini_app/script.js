// ������ ��� ������������� ���������� � ������ �������
let selectedPlayers = [];

window.onload = function () {
    loadLeaderboard();
    loadTeam();
};

// �������� ���������� � ����������
function loadLeaderboard() {
    // ������ ������������� �������� ������� � ������� (����� ������ ��������)
    const leaderboard = [
        { team_name: "Team 1", points: 150 },
        { team_name: "Team 2", points: 130 },
        { team_name: "Team 3", points: 120 },
    ];
    const leaderboardContent = document.getElementById("leaderboard-content");
    leaderboard.forEach((team) => {
        leaderboardContent.innerHTML += `<p>${team.team_name} - ${team.points} points</p>`;
    });
}

// �������� �������
function loadTeam() {
    const teamSlots = document.querySelectorAll(".player-slot");
    teamSlots.forEach(slot => {
        if (selectedPlayers.includes(slot.id)) {
            slot.style.backgroundColor = "#66cc66"; // �������, ���� ������
        }
    });
}

// ����� ������
function selectPlayer(playerId) {
    const availablePlayersSection = document.getElementById("available-players");
    availablePlayersSection.classList.toggle("hidden");
    // ���������� ������ � ������� (������)
    if (!selectedPlayers.includes(playerId)) {
        selectedPlayers.push(playerId);
    } else {
        const index = selectedPlayers.indexOf(playerId);
        selectedPlayers.splice(index, 1);
    }
    updateAvailablePlayers();
}

// ���������� ������ ��������� �������
function updateAvailablePlayers() {
    const availableList = document.getElementById("available-list");
    availableList.innerHTML = ''; // ������� ������
    // ������ ��������� �������
    const availablePlayers = [
        { name: "Player 4", position: "Forward" },
        { name: "Player 5", position: "Midfielder" },
        { name: "Player 6", position: "Defender" },
    ];
    availablePlayers.forEach(player => {
        availableList.innerHTML += `<p>${player.name} - ${player.position}</p>`;
    });
}