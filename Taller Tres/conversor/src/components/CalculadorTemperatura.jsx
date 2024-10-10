import React, { useState } from 'react';

const CalculadorTemperatura = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = parseFloat(e.target.value);
    setCelsius(e.target.value);
    if (!isNaN(celsiusValue)) {
      setFahrenheit((celsiusValue * 9/5 + 32).toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = parseFloat(e.target.value);
    setFahrenheit(e.target.value);
    if (!isNaN(fahrenheitValue)) {
      setCelsius(((fahrenheitValue - 32) * 5/9).toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <div className="temperature-calculator">
      <h1>Calculador de Temperatura</h1>
      <div className="input-group">
        <label>Ingresar temperatura en Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Celsius"
        />
      </div>
      <div className="input-group">
        <label>ingresar temperatura en Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Fahrenheit"
        />
      </div>
    </div>
  );
};

export default CalculadorTemperatura;
