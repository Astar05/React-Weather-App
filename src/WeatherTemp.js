import React, { useState } from "react";
import "./styles.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  const temperature =
    unit === "fahrenheit" ? props.celsius : fahrenheitToCelsius(props.celsius);

  return (
    <div className="WeatherTempInfo">
      <span id="main-temp">{Math.round(temperature)}</span>
      <span id="main-degree">
        <a
          href="/"
          onClick={unit === "celsius" ? convertToFahrenheit : convertToCelsius}
        >
          {unit === "fahrenheit" ? "°F" : "°C"}
        </a>
      </span>
    </div>
  );
}
