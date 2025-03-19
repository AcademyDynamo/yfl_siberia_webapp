import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Получение данных о турнире из API
    axios.get('/api/leaderboard')
      .then(response => setLeaderboard(response.data))
      .catch(error => console.error("Error fetching leaderboard", error));
  }, []);

  return (
    <div>
      <h2>Турнирная таблица</h2>
      <ul>
        {leaderboard.map((team, index) => (
          <li key={index}>{team.name} - {team.points} очков</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
