import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react"

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState ({
        city: "Delhi",
        temp: 25.05,
        tempMin: 23.52,
        tempMax: 27.83,
        humd: 47,
        feels: 24.61,
        weather: "haze"
    });

    let getWeatherInfo = (data) => {
        setWeatherInfo(data);
    }

    return (
        <div>
            <h2 style={{color: "black"}}>Weather App</h2>
            <h4 style={{color: "black"}}>by Shaurya</h4>
            <SearchBox getWeatherInfo={getWeatherInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}