import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Searchbox = ({ getData }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&";
  const API_KEY = "1ccbc564340c43655f5d22dbd7a6d7e4";

  const getWeatherInfo = async () => {
    try {
      setLoading(true); // 🔹 Start loading
      const res = await fetch(`${API_URL}q=${city}&appid=${API_KEY}`);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();

      const resultObj = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
        feelsLike: data.main.feels_like,
      };

      setError("");
      getData(resultObj);
    } catch (err) {
      setError("No such place in our API");
    } finally {
      setLoading(false); // 🔹 Stop loading
    }
  };

  const handleChange = (e) => setCity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) {
      setError("Please enter a city");
      return;
    }
    setCity("");
    getWeatherInfo();
  };

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

        <Button
          variant="contained"
          type="submit"
          disabled={loading}
          className="!bg-gradient-to-r !from-blue-500 !to-indigo-600 !text-white !font-semibold !px-6 !py-2 !rounded-lg !shadow-lg hover:!scale-105 transition-transform disabled:opacity-70"
        >
          {loading ? "Searching..." : "Search"}
        </Button>
      </form>

      {error && (
        <h2 className="text-red-600 font-bold text-center mt-3">{error}</h2>
      )}
    </div>
  );
};

export default Searchbox;
