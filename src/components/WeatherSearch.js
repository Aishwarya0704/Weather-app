import { useDispatch } from "react-redux";
import { getDataFromWeatherApi } from "../redux/Actions/WeatherAction";

const WeatherSearch = ({city, searchcity, setCity}) => {
    const dispatch = useDispatch();
   
    return (
        <div className="weather-search">
                <input
                    value={city}
                    onChange={event => setCity(event.target.value)}
                    placeholder='Enter your location'
                    type="text" 
                    />
                <button onClick={(e) => dispatch(getDataFromWeatherApi(city))}>
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1"/>
                </button>
            </div>
    );
}

export default WeatherSearch;