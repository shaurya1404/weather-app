import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox({ getWeatherInfo }) {

    let [city, setCity] = useState("");
    let [err, setErr] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "8b0fd955c778aa06aef384ba81024521"

    let getWeatherData = async () => {
        try {
            let data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`) // make sure state variable and other parameteres are defined before defining this function. All functions have access to state variables
            let jsonData = await data.json();
            {jsonData && setErr(false)} // Even if error is received from API, data will be an error object but jsonData will not be defined
            let result = ({
            city: city,
            temp: jsonData.main.temp,
            tempMin: jsonData.main.temp_min,
            tempMax: jsonData.main.temp_max,
            humd: jsonData.main.humidity,
            feels: jsonData.main.feels_like,
            weather: jsonData.weather[0].description
        });
        console.log(result);
        getWeatherInfo(result);
        } catch(err) {
            setErr(true);
        }
    }

    let handleCityChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        try {
            evt.preventDefault();
            setCity("");
            getWeatherData();
        }
        catch (err) {
            setErr(true);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {err && <p style={{color: "red"}}>No such place exists in our API. Please try again!</p>}
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCityChange}/>
                <br></br><br></br>
                <Button variant="outlined" type="submit" className='btn'>Search</Button>
            </form>
        </div>
    )
}