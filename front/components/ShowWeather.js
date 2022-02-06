import { useEffect, useRef, useState } from "react";
import { WiDaySunny } from "weather-icons-react";
function ShowWeather({ forecast, currentWeather, childToParent }) {
  return (
    <div>
      <h2>CURRENT WEATHER</h2>

      <div className="current">
        <div>TIME: {currentWeather.time}</div>
        <div>CURRENET WEATHER: {currentWeather.symbolPhrase}</div>
        <div className="temperature">
          TEMPERATURE: {currentWeather.temperature}&deg;C
        </div>
        <div>HUMIDITY: {currentWeather.relHumidity} %</div>
      </div>
      <div>
        <h2>7 DAYS FORECAST</h2>

        {forecast.map((x, i) => (
          <div className="forecast" key={i}>
            <div>Data: {x.date}</div>
            <div className="temperature">
              TEMPERATURE:
              <div>MAX :{x.maxTemp} &deg;C</div>
              <div>MIN :{x.minTemp} &deg;C</div>
            </div>
            <div>max Wind Speed:{x.maxWindSpeed}</div>
          </div>
        ))}
        <button
          onClick={() => {
            childToParent();
          }}
        >
          BACK
        </button>
      </div>
    </div>
  );
}

export default ShowWeather;
