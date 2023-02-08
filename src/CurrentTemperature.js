import React from "react";

export default function CurrentTemperature(props) {
  return (
    <div>
      <span className="currentTemperature">{Math.round(props.celsius)}</span>
      <span className="currentTemperatureUnits">℃</span>
    </div>
  );
}
