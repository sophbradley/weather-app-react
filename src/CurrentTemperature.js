import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="currentTemperature">{Math.round(props.celsius)}</span>
        <span className="currentTemperatureUnits">
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="currentTemperature">{Math.round(fahrenheit())}</span>
        <span className="currentTemperatureUnits">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}
