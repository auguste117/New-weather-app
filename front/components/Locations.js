import { useEffect, useState } from "react";
import ShowWeather from "./ShowWeather";

function Locations({ location }) {
  const [showCurrentInfo, setshowCurrentInfo] = useState("show");
  const [currentWeather, setCurrentWeather] = useState("");
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    console.log({ currentWeather });
    const user = {
      name: "as",
      surname: "mur",
    };
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: "auguste" }),
    };
    fetch("http://localhost:8080/weather", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [currentWeather]);

  const parentToChild = () => {
    setshowCurrentInfo("show");
  };
  function selectedLocation(x) {
    // current weather
    fetch(`https://foreca-weather.p.rapidapi.com/current/${x.id}?`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
        "x-rapidapi-key": "4440ad3b3amsh4fdc74af6957982p10d846jsn98dcb299564d",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentWeather(data.current);
        setshowCurrentInfo("hide");
        console.log(currentWeather);
      });

    //7 days forecast

    fetch(`https://foreca-weather.p.rapidapi.com/forecast/daily/${x.id}?`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
        "x-rapidapi-key": "4440ad3b3amsh4fdc74af6957982p10d846jsn98dcb299564d",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setForecast(data.forecast);
      });
  }
  return (
    <div className="main">
      {showCurrentInfo == "show" && (
        <div className="locations">
          {location.slice(0, 5).map((x, i) => (
            <div className="box" key={i} onClick={() => selectedLocation(x)}>
              <ul>
                <li>Name: {x.name}</li>
                <li>Country:{x.country}</li>
                <li>Timezone:{x.timezone}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
      {showCurrentInfo == "hide" && (
        <ShowWeather
          forecast={forecast}
          currentWeather={currentWeather}
          childToParent={parentToChild}
        />
      )}
    </div>
  );
}

export default Locations;
