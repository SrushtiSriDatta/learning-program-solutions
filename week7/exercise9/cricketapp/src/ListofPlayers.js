import React from 'react';

function ListofPlayers() {
  // Array of 11 players with names and scores
  const players = [
    { name: 'Player 1', score: 85 },
    { name: 'Player 2', score: 45 },
    { name: 'Player 3', score: 72 },
    { name: 'Player 4', score: 60 },
    { name: 'Player 5', score: 95 },
    { name: 'Player 6', score: 35 },
    { name: 'Player 7', score: 88 },
    { name: 'Player 8', score: 54 },
    { name: 'Player 9', score: 100 },
    { name: 'Player 10', score: 68 },
    { name: 'Player 11', score: 40 }
  ];

  // Filter players with score below 70 using arrow function
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
