import React, { useState } from "react";
import "./styles.css";

import axios from "axios";
import { DayForecast } from "./DayForecast";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast-container">
        <h4>
          <b>5 - Day Forecast</b>
        </h4>
        <div className="row" style={{ width: "40rem" }} id="forecast-border">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" id="forecast" key={index}>
                  <DayForecast data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
