import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';
import './App.css';

function App() {
  // State to toggle between components
  const [flag, setFlag] = useState(true);

  // Function to toggle flag
  const toggleComponent = () => {
    setFlag(!flag);
  };

  return (
    <div>
      <h1>Cricket App</h1>
      <button onClick={toggleComponent} style={{ marginBottom: '20px' }}>
        {flag ? 'Show Indian Players' : 'Show List of Players'}
      </button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
