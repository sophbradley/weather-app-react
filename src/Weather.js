import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherInformation, setWeatherInformation] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherInformation({
      city: response.data.name,
      country: response.data.sys.country,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
    setLoaded(true);
  }

  function search() {
    const apiKey = "552ad1a3bbfca9b338aae30c33d2fda3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    console.log(apiUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form className="searchEngine" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="w-100"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherInformation} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
