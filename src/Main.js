import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./styles.css";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="citySearch">
        <form onSubmit={handleSubmit}>
          <div className="new-city-search" style={{ width: "25rem" }}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control style"
                  placeholder="Type in new city search..."
                  aria-describedby="button-addon"
                  autoFocus="on"
                  onChange={handleCityChange}
                  id="search"
                />
              </div>
              <div className="col-3 d-flex align-items-center justify-content-end">
                <div className="mr-2">
                  <button
                    className="btn btn-primary spaced"
                    type="submit"
                    value="Search"
                  >
                    Search
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-success spaced"
                    id="current-location"
                    type="button"
                  >
                    Current
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
