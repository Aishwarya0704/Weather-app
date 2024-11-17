import WeatherCityInfo from "./WeatherCityInfo";
import WeatherDetailsInfo from "./WeatherDetailsInfo";

const WeatherDetails = ({ data }) => {
    const date = new Date();
    const showDate = date.getDate() + '-' + date.getMonth() + "-" + date.getFullYear();
    const showTime = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds()

    return (
        <div className="weather-container">
        <WeatherCityInfo data={data} showDate={showDate} showTime={showTime} />
        <WeatherDetailsInfo data={data} />
        </div>        
    );
}
export default WeatherDetails;