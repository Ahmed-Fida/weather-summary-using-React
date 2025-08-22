import React from "react";

const weatherData = [
  { date: "2024-06-01", maxTemp: 32, minTemp: 22, humidity: 65 },
  { date: "2024-06-02", maxTemp: 35, minTemp: 24, humidity: 70 },
  { date: "2024-06-03", maxTemp: 31, minTemp: 21, humidity: 60 },
];

export default function App() {
  const highest = weatherData.reduce((prev, curr) =>
    curr.maxTemp > prev.maxTemp ? curr : prev
  );

  const lowest = weatherData.reduce((prev, curr) =>
    curr.minTemp < prev.minTemp ? curr : prev
  );

  const avgHumidity = Math.round(
    weatherData.reduce((sum, curr) => sum + curr.humidity, 0) /
      weatherData.length
  );

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Weather Summary</h2>
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
