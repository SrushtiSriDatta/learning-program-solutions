import React from 'react';

function IndianPlayers() {
  // Odd and Even players using destructuring
  const [oddPlayers, evenPlayers] = [
    ['Player 1', 'Player 3', 'Player 5', 'Player 7', 'Player 9', 'Player 11'],
    ['Player 2', 'Player 4', 'Player 6', 'Player 8', 'Player 10']
  ];

  // Merge two arrays (T20 and Ranji Trophy players)
  const T20players = ['Virat', 'Rohit', 'Bumrah'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Jadeja'];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
