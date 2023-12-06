import React from "react";
import axios from "axios";
import "./styles.css";

export default function Main() {
  fucntion handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "c819171fe0abdc14039af4ef5dda283b";
  let city = "Boston";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
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
