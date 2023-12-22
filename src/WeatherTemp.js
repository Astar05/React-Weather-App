import React, { useState } from "react";
import "./styles.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTempInfo">
        <span id="main-temp">{Math.round(props.celsius)}</span>
        <span id="main-degree">
          <a href="/" onClick={convertToFahrenheit}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTempInfo">
        <span id="main-temp">{Math.round(fahrenheit())}</span>
        <span id="main-degree">
          <a href="/" onClick={convertToCelsius}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
