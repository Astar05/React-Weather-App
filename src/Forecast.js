import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="forecast-container">
      <h4>
        <b>5 - Day Forecast</b>
      </h4>
      <div className="row" style={{ width: "40rem" }} id="forecast-border">
        <div className="col" id="forecast"></div>
      </div>
    </div>
  );
}
