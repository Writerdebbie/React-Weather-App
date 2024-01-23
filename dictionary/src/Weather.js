import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [load, reLoad] = useState(false);
  const [weather, setWeather] = useState({});
  function displayWeather(response) {
    reLoad(true);

    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="App">
      <input
        className="form1"
        type="search"
        placeholder="Enter a city here..."
        onChange={updateCity}
        required
      />
      <button className="form2" type="submit">
        Search{" "}
      </button>
    </form>
  );

  if (load) {
    return (
      <div className="App">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}℃</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li>Description: {weather.description}</li>
          <li>Country: {weather.country}</li>
        </ul>
      </div>
    );
  } else {
    return <div className="App-header">{form}</div>;
  }
}
