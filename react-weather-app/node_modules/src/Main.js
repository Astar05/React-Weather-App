import React from "react";
import "./styles.css";

export default function Main() {
  return (
    <div className="row row-cols-2">
      <div className="col-1" id="main">
        <span id="main-temp">71</span>
        <span id="main-degree">°F</span>
      </div>
      <div className="col-5" id="current">
        <span id="current-info">
          <span id="current-city"> Boston, MA </span>
          <br />
          <span id="time"> As of Tuesday | 5:00 PM EST </span>
          <br />
          <span id="weather"> Cloudy </span>
          <img id="current-icon" alt="Weather Icon" className="weather-icon" />
          <br />
          <span id="wind"> Wind: 2 mph </span>
        </span>
      </div>
    </div>
  );
}
