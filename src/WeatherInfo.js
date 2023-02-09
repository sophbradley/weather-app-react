import React from "react";
import FormattedDate from "./FormattedDate";
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="mt-3 city-name">{props.data.city}</h2>
      <h4 className="city-country">{props.data.country}</h4>
      <FormattedDate date={props.data.date} />
      <div className="row">
        <div className="col-md-6 current-conditions">
          <img
            className="weatherIcon"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
          <CurrentTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-md-6">
          <ul>
            <li className="text-capitalize current-conditions">
              Current condition: {props.data.description}
            </li>
            <li className="current-conditions">
              Humidity: {props.data.humidity} %
            </li>
            <li className="current-conditions">
              Wind Speed: {Math.round(props.data.windSpeed)} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
