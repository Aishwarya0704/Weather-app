import { combineReducers } from "redux";
import { WeatherReducer } from './WeatherReducer';
import { RegistrationReducer } from "./RegistrationReducer";
import { LoginReducer } from "./LoginReducer";

const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  RegistrationReducer: RegistrationReducer,
  WeatherReducer: WeatherReducer,
});

export default rootReducer;
