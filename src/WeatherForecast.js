import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c6f8ef4575250284954db9f4dfa7a996";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <div className="WeatherForecast-icon">
            <img
              src="http://openweathermap.org/img/wn/03n@2x.png"
              alt="weather icon"
              width="70"
              height="70"
            />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">9°</span>
            <span className="WeatherForecast-temp-min">3°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
