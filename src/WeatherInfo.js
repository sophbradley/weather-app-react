import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="mt-3">
        {props.data.city}, {props.data.country}
      </h2>
      <FormattedDate date={props.data.date} />
      <div className="row">
        <div className="col-6">
          <img
            className="weatherIcon"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
          <span className="currentTemperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="currentTemperatureUnits">℃</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Current condition: {props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind Speed: {Math.round(props.data.windSpeed)} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
