/*eslint-disable */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
function WeatherData({ search }) {
  const [weatherData, setWeatherData] = useState();
  const weatherRef = useRef(false);
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe824cb856a37281c8c13e7a5fbbd488&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      if (error.response.status === "400") {
        return;
      }
      if (error.status === 404) {
        return alert(error.response.data.message);
      }
      return;
    }
  }
  useEffect(() => {
    if (!weatherRef.current) {
      weatherRef.current = true;
      return;
    }
    fetchData();
  }, [search]);

  return (
    <div id="weather-container">
      <img
        src={
          weatherData
            ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
            : "https://openweathermap.org/img/wn/03d@2x.png"
        }
        alt=""
      />
      <div id="weather-details">
        <h1>{weatherData ? weatherData.name : "--"}</h1>
        <h2> {weatherData ? Math.round(weatherData.main.temp) : "--"} °c</h2>
        <h3 className="description">
          {weatherData ? weatherData.weather[0].main : "--"}
        </h3>
      </div>
    </div>
  );
}

export default React.memo(WeatherData);
