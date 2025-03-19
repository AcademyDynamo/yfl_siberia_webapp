import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from './Team';
import Leaderboard from './Leaderboard';
import Stats from './Stats';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Фэнтези Лига</h1>
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
