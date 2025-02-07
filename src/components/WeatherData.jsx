/*eslint-disable */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
function WeatherData({ search }) {
  const [weatherData, setWeatherData] = useState();
  // console.log(weatherData);
  const checkRef = useRef(false);
  async function fetchData() {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe824cb856a37281c8c13e7a5fbbd488&units=metric`
    );
    setWeatherData(response.data);
  }
  useEffect(() => {
    if (!checkRef.current) {
      checkRef.current = true;
      return;
    }
    fetchData()
  }, [search]);

  return (
    <div id="weather-container">
      <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="" />
      <div id="weather-details">
        <h1>--</h1>
        <h2>-- °c</h2>
        <h3 className="description">---</h3>
      </div>
    </div>
  );
}

export default React.memo(WeatherData);
