import React from "react";

export default function WeatherSummary({ highest, lowest, avgHumidity }) {
  return (
    <div>
      <p>
        Highest temperature was {highest.maxTemp}°C on {highest.date}
      </p>
      <p>
        Lowest temperature was {lowest.minTemp}°C on {lowest.date}
      </p>
      <p>Average humidity was {avgHumidity}%</p>
    </div>
  );
}
