import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherInformation, setWeatherInformation] = useState({});

  function displayWeather(response) {
    setWeatherInformation({
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form className="searchEngine">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="w-100"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="w-100" />
            </div>
          </div>
        </form>
        <h2 className="mt-3">{weatherInformation.city}</h2>
        <FormattedDate date={weatherInformation.date} />
        <div className="row">
          <div className="col-6">
            <img
              className="weatherIcon"
              src={weatherInformation.iconUrl}
              alt={weatherInformation.description}
            />
            <span className="currentTemperature">
              {Math.round(weatherInformation.temperature)}
            </span>
            <span className="currentTemperatureUnits">℃</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Current condition: {weatherInformation.description}</li>
              <li>Humidity: {weatherInformation.humidity} %</li>
              <li>
                Wind Speed: {Math.round(weatherInformation.windSpeed)} m/s
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "552ad1a3bbfca9b338aae30c33d2fda3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
