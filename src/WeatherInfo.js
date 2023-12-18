import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";

export default function WeatherInfo(props) {
  return (
    <div className="row row-cols-2">
      <div className="col-1" id="main">
        <span id="main-temp">{Math.round(props.data.temperature)}</span>
        <span id="main-degree">°F</span>
      </div>
      <div className="col-5" id="current">
        <span id="current-info">
          <span id="current-city"> {props.data.city} </span>
          <br />
          <span id="time">
            <FormattedDate date={props.data.date} />
          </span>
          <div className="WeatherIcon">
            <span id="weather" alt="Weather Description">
              {props.data.description}
            </span>
            <WeatherIcon code={props.data.icon} />
          </div>

          <span id="wind"> Wind: {Math.round(props.data.wind)} mph </span>
        </span>
      </div>
    </div>
  );
}
