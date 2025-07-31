import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const sayMessage = (msg) => {
    alert(`Message: ${msg}`);
  };

  const handleSyntheticEvent = () => {
    alert("I was clicked");
  };

  return (
    <div className="container">
      <h1>React Event Examples</h1>

      {/* Counter Section */}
      <div className="counter-section">
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      {/* Extra Buttons */}
      <div className="extra-buttons">
        <button onClick={() => sayMessage('welcome')}>Say Welcome</button>
        <button onClick={handleSyntheticEvent}>Synthetic Event Button</button>
      </div>

      {/* Currency Converter Component */}
      <CurrencyConverter />
    </div>
  );
}

export default App;
