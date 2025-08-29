import React, { useState } from "react";
import WeatherSummary from "./WeatherSummary";
import ToggleButton from "./ToggleButton";

const weatherData = [
  { date: "2024-06-01", maxTemp: 32, minTemp: 22, humidity: 65 },
  { date: "2024-06-02", maxTemp: 35, minTemp: 24, humidity: 70 },
  { date: "2024-06-03", maxTemp: 31, minTemp: 21, humidity: 60 },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleBackground = () => setDarkMode(!darkMode);

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "20px",
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h2>Weather App</h2>

      {/* Weather Summary */}
      <WeatherSummary
        highest={highest}
        lowest={lowest}
        avgHumidity={avgHumidity}
      />

      {/* Button */}
      <ToggleButton darkMode={darkMode} toggleBackground={toggleBackground} />
    </div>
  );
}
