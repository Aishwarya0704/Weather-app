const WeatherCityInfo = ({ data, showDate, showTime }) => {
    return (
            data?.current ? 
            <div className="weather-city-info">
                <div className="weather-city">
                    {data.location ? <h1>{data.location.name}</h1> : null}
                </div>
                <div className="weather-temperature">
                    {data.current ? <h3>{data.current.temp_f}°F</h3> : null}
                </div>
                <div className="weather-type-description">
                    {data.current ? <p>{data.current.condition.text}</p> : null}
                </div>
                <div className="weather-icon">
                    {data.current ? <img src={data.current.condition.icon} alt="weather-icon" /> : null}
                </div>
                <div className="weather-date-time">
                    {data.current ? <p>{showDate} {showTime}</p> : null}
                </div>
            </div>
            :
            <div className="weather-city-info">
                <div className="weather-city">
                    <h1>Goa</h1>
                </div>
                <div className="weather-temperature">
                    <h3>82.9°F</h3>
                </div>
                <div className="weather-type-description">
                    <p>Light rain shower</p>
                </div>
                <div className="weather-icon">
                    <img src="https://img.icons8.com/?size=512&id=MVj2tmasj0Pp&format=png" alt="weather-icon" />
                </div>
                <div className="weather-date-time">
                    <p>{showDate} {showTime}</p>
                </div>
            </div>

    );
}

export default WeatherCityInfo;