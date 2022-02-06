import { useEffect, useRef, useState } from "react";
import Locations from "./Locations";
function Weather() {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState([]);
  const searchRef = useRef();

  function getSearchValue() {
    const lettersAndSpace = /^[a-zA-Z\s]*$/;
    let input = searchRef.current.value.toLowerCase();

    fetch(`http://localhost:8080/input/${searchRef.current.value}`)
      .then((response) => response.json())
      .then((data) => console.log(data));

    if (searchRef.current.value.match(lettersAndSpace)) {
      setError(null);
      fetch(`https://foreca-weather.p.rapidapi.com/location/search/${input}?`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
          "x-rapidapi-key":
            "4440ad3b3amsh4fdc74af6957982p10d846jsn98dcb299564d",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setLocation(data.locations);
        });
    } else {
      setError("check search value");
    }
  }
  return (
    <div className="container">
      <input
        type="text"
        ref={searchRef}
        placeholder="location search"
        required
      />
      <button onClick={getSearchValue}>SUBMIT</button>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <Locations location={location} />
    </div>
  );
}

export default Weather;
