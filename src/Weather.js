import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "552ad1a3bbfca9b338aae30c33d2fda3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  return (
    <div className="Weather">
      <form className="searchEngine">
        <input type="search" placeholder="Enter a city..." className="col-9" />
        <input type="submit" value="Search" className="col-3" />
      </form>
      <h2 className="mt-3">London</h2>
      <p>Thursday 26 Jan 2023 17:54</p>
      <div className="row">
        <div className="col-6">
          <img
            className="weatherIcon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
          />
          <span className="currentTemperature">6</span>
          <span className="currentTemperatureUnits">℃</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Current condition: Clouds</li>
            <li>Humidity: 2 %</li>
            <li>Windspeed: 6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
