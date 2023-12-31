import React from "react";
import WeatherIcon from "./WeatherIcon";

export function DayForecast(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°F`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°F `;
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="forecast-temp">
        <span className="forecast-temp-min">{minTemp()}</span>
        <span className="forecast-temp-max">{maxTemp()}</span>
      </div>
    </div>
  );
}
