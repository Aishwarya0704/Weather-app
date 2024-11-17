const WeatherDetailsInfo = ({data}) => {
    return (
            data?.current ? <div className="weather-details-info">
            <div className="weather-cloud">
                <img height='50px' width='50px' src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-512.png" alt="cloud-icon" />
                {data.current ? <p>{data.current.cloud}</p> : null}
                <p>Cloud</p>
            </div>
            <div className="weather-feels">
                <img height='50px' width='50px' src="https://cdn2.iconfinder.com/data/icons/colored-weather/96/temperature_cold_forecast_weather-512.png" alt="feel-like-icon"/>
                {data.current ? <p>{data.current.feelslike_f}°F</p> : null}
                <p>Feels Like</p>
            </div>
            <div className="weather-uv">
                <img height='50px' width='50px' src="https://cdn4.iconfinder.com/data/icons/leto-weather/64/sun_uv_ultraviolet_radiation-512.png" alt="uv-icon"/>
                {data.current ? <p>{data.current.uv}W</p> : null}
                <p>UV</p>
            </div>
            <div className="weather-pressure">
                <img height='50px' width='50px' src="https://cdn1.iconfinder.com/data/icons/weather-455/300/pressure_clock-heat-cold-512.png" alt="pressure-icon"/>
                {data.current ? <p>{data.current.pressure_mb}MB</p> : null}
                <p>Pressure</p>
            </div>
            <div className="weather-humidity">
                <img height='50px' width='50px' src="https://cdn4.iconfinder.com/data/icons/weather-717/64/humidity-rain-water-weather-512.png" alt="humidity-icon"/>
                {data.current ? <p>{data.current.humidity}%</p> : null}
                <p>Humidity</p>
            </div>
            <div className="weather-wind">
                <img height='50px' width='50px' src="https://cdn0.iconfinder.com/data/icons/ecology-69/64/windmill-green-clean-power-energy-512.png" alt="wind-icon"/>
                {data.current ? <p>{data.current.wind_mph} MPH</p> : null}
                <p>Wind</p>
            </div>
        </div>
        : 
        <div className="weather-details-info">
        <div className="weather-cloud">
            <img height='50px' width='50px' src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-512.png" alt="cloud-icon" />
            <p>69</p>
            <p>Cloud</p>
        </div>
        <div className="weather-feels">
            <img height='50px' width='50px' src="https://cdn2.iconfinder.com/data/icons/colored-weather/96/temperature_cold_forecast_weather-512.png" alt="feel-like-icon"/>
            <p>91.8°F</p>
            <p>Feels Like</p>
        </div>
        <div className="weather-uv">
            <img height='50px' width='50px' src="https://cdn4.iconfinder.com/data/icons/leto-weather/64/sun_uv_ultraviolet_radiation-512.png" alt="uv-icon"/>
            <p>6W</p>
            <p>UV</p>
        </div>
        <div className="weather-pressure">
            <img height='50px' width='50px' src="https://cdn1.iconfinder.com/data/icons/weather-455/300/pressure_clock-heat-cold-512.png" alt="pressure-icon"/>
            <p>1006MB</p>
            <p>Pressure</p>
        </div>
        <div className="weather-humidity">
            <img height='50px' width='50px' src="https://cdn4.iconfinder.com/data/icons/weather-717/64/humidity-rain-water-weather-512.png" alt="humidity-icon"/>
            <p>81%</p>
            <p>Humidity</p>
        </div>
        <div className="weather-wind">
            <img height='50px' width='50px' src="https://cdn0.iconfinder.com/data/icons/ecology-69/64/windmill-green-clean-power-energy-512.png" alt="wind-icon"/>
            <p>8.1MPH</p>
            <p>Wind</p>
        </div>
    </div>
    );
}



export default WeatherDetailsInfo;