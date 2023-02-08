import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherInformation, setWeatherInformation] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherInformation({
      coordinates: response.data.coordinates,
      city: response.data.city,
      country: response.data.country,
      iconUrl: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
    setLoaded(true);
  }

  function search() {
    const apiKey = "4a59f32a7t4edb6af6eb06o667b388a3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
        <WeatherForecast coordinates={weatherInformation.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
