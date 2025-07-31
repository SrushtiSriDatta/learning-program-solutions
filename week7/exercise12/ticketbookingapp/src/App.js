import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Flight details
  const flights = [
    { flightNo: "AI101", from: "Mumbai", to: "Delhi", price: 4500 },
    { flightNo: "AI202", from: "Chennai", to: "Bangalore", price: 3200 },
    { flightNo: "AI303", from: "Hyderabad", to: "Kolkata", price: 5600 }
  ];

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        // User Page
        <div className="card">
          <h2>Welcome, User!</h2>
          <p>You can now book tickets for available flights.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // Guest Page
        <div className="card">
          <h2>Available Flights</h2>
          <ul>
            {flights.map((flight, index) => (
              <li key={index}>
                {flight.flightNo} - {flight.from} → {flight.to} (₹{flight.price})
              </li>
            ))}
          </ul>
          <button onClick={handleLogin}>Login to Book</button>
        </div>
      )}
    </div>
  );
}

export default App;
