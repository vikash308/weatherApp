import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Searchbox = ({ getData }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState("");
  let API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
  let API_KEY = "1ccbc564340c43655f5d22dbd7a6d7e4";

  let getWeatherInfo = async () => {
    try {
      let res = await fetch(`${API_URL}q=${city}&appid=${API_KEY}`);
      let data = await res.json();
      let resultObj = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
        feelsLike: data.main.feels_like,
      };
      setError("")
      console.log(resultObj);
      getData(resultObj);
    } catch (error) {
      setError("No such place in our api");
    }
  };
  function handleChange(e) {
    setCity(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  }
  return (
    <div>
      <form
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <TextField
          id="city"
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          className="w-full sm:w-auto bg-white rounded-md"
        />
        <h2 className="text-red-800 bold">{error}</h2>

        <Button
          variant="contained"
          type="submit"
          className="!bg-gradient-to-r !from-blue-500 !to-indigo-600 !text-white !font-semibold !px-6 !py-2 !rounded-lg !shadow-lg hover:!scale-105 transition-transform"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Searchbox;
