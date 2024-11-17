import {WEATHER_API_REQUEST_SUCCESS, WEATHER_API_REQUEST_FAIL} from '../Constants/WeatherConstants';
 
const initialState = {};
export const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_API_REQUEST_SUCCESS:
            return {
                weatherApi: action.payload,
            };
        
        case WEATHER_API_REQUEST_FAIL:
            return {
                weatherApi: null,
            };

        default:
            return state;
    }
}
