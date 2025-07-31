import React, { useState } from 'react';

function CurrencyConverter() {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);

  const conversionRate = 0.011;

  const handleConvert = (e) => {
    e.preventDefault();
    if (!inr || isNaN(inr)) {
      alert("Please enter a valid number");
      return;
    }
    const result = (parseFloat(inr) * conversionRate).toFixed(2);
    setEuro(result);
  };

  return (
    <div className="card">
      <h2>Currency Converter (INR → Euro)</h2>
      <form onSubmit={handleConvert}>
        <input
          type="text"
          placeholder="Enter INR"
          value={inr}
          onChange={(e) => setInr(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro !== null && (
        <p>{inr} INR = <strong>{euro} EUR</strong></p>
      )}
    </div>
  );
}

export default CurrencyConverter;
