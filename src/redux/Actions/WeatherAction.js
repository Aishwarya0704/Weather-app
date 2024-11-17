import axios from "axios";
import { WEATHER_API_REQUEST_SUCCESS, WEATHER_API_REQUEST_FAIL } from '../Constants/WeatherConstants';

export const getDataFromWeatherApi = (city) => {
    return (dispatch) => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=c7544ac736604a1692050725232206&q=${city}`)
            .then((response) => {
                return dispatch({
                    type: WEATHER_API_REQUEST_SUCCESS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: WEATHER_API_REQUEST_FAIL,
                    payload: error,
                });
            });
    };
};

// export const changeInputValue = (value) =>
// ({
//     type: CHANGE_INPUT_VALUE,
//     payload: value
// })