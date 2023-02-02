import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div classNam="col">
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
