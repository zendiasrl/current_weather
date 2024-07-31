import React, { useEffect, useState } from "react";
import Cuaca from "./Cuaca";
import Humidity from "./Humidity";
import Wind from "./Wind";
import { getWeather, searchWeather } from "../Api";

const Container = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getWeather().then((data) => setCurrentWeather(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      searchWeather(query).then((data) => setCurrentWeather(data));
    }
  };

  return (
    <div className="h-[70%] w-80 lg:w-[30%] rounded-3xl bg-[#676767] shadow-2xl p-5">
      <form onSubmit={handleSearch} className="flex justify-center mt-7 gap-5">
        <input
          type="text"
          placeholder="Enter City Name"
          className="bg-[#D9D9D9] rounded-md p-2 w-2/3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="w-[20%] text-white items-center rounded-md bg-blue-600 hover:bg-blue-700"
        >
          <h5 className="font-semibold">Search</h5>
        </button>
      </form>
      {currentWeather && (
        <>
          <Cuaca
            name={currentWeather.location.name}
            icon={currentWeather.current.condition.icon}
            text={currentWeather.current.condition.text}
          />
          <div className="mt-12 flex justify-center gap-16">
            <Humidity hummidity={currentWeather.current.humidity} />
            <Wind wind={currentWeather.current.wind_kph} />
          </div>
        </>
      )}
    </div>
  );
};

export default Container;
