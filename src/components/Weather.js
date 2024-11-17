import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import WeatherSearch from "./WeatherSearch";
import WeatherDetails from "./WeatherDetails";
import { useSelector } from "react-redux";

export const Weather = () => {
    const data = useSelector((state) => state.WeatherReducer.weatherApi)
    const [city, setCity] = useState('')
    const [error, serError] = useState([]);

    return (
        <>
            <Header />
            <div className="weather">
                <WeatherSearch city={city} setCity={setCity} />
                {error.length > 0 ? <div className="weather-error-msg">{error}</div> : <WeatherDetails data={data} />}
            </div>
        </>
    );
}
export default Weather;
