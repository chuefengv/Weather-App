import React, { useEffect, useRef, useState }  from 'react'
import axios from 'axios';
import Clock from 'react-live-clock';
import './Display.css'
import WeatherIcon from './weather_icon'

function Display({flag, lastState, lastCity, city}){

    const [temp, setTemp] = useState("");
    const [precipitation, setPrecipitation] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [weatherDesc, setWeatherDesc] = useState("");
    const [timezone, setTimezone] = useState("");
    const [forecast, setForecast] = useState(113);
    const firstRun = useRef(true);
    const firstRun2 = useRef(true);

    const API_KEY=process.env.API_KEY || 'd927a6b3c39a782e1a9e488ba5fd8e5a';

    useEffect(()=>{
        if (firstRun.current) {
            firstRun.current = false;
            return;
        }
        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastState},united_states`)    
            .then(res =>{
                // console.log(res.data);
                setTemp(res.data.current.temperature);
                setPrecipitation(res.data.current.precip);
                setHumidity(res.data.current.humidity);
                setWind(res.data.current.wind_speed);
                setWeatherDesc(res.data.current.weather_descriptions);
                setTimezone(res.data.location.timezone_id);
                setForecast(res.data.current.weather_code);  
                console.log(process.env.DB_PASS)
                console.log(process.env.DB_USER)
                console.log(process.env.DB)
                console.log(process.env.DB_HOST)           
            })
            .catch(err =>{
                console.log(err.message);
            })
        
    },[lastState, API_KEY]);

    useEffect(()=>{
        if (city === '') {
            return;
        }
        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastCity},${lastState},united_states`)    
        .then(res =>{
                console.log(res.data);
                setTemp(res.data.current.temperature);
                setPrecipitation(res.data.current.precip);
                setHumidity(res.data.current.humidity);
                setWind(res.data.current.wind_speed);
                setWeatherDesc(res.data.current.weather_descriptions);
                setTimezone(res.data.location.timezone_id);
                setForecast(res.data.current.weather_code);
        })
        .catch(err =>{
            console.log(err.message);
        })
    },[lastCity, lastState, API_KEY]);


    return(
        <div className='display'>
            <div className='temperature'>
                {!lastState && <div>0°F</div>}
                {lastState && <div>{temp}°F</div>}
            </div>
            <div className='weather-desc'>
                {!lastState && <div>What To Expect Outside</div>}
                {lastState && <div>{weatherDesc}</div>}
            </div>
            <div className='weather-details'>
            {!lastState && 
            <div >
                Precipitation: 0%
                <br></br>
                Humidity: 0%
                <br></br>
                Wind Speeds: 0mph
            </div>}
            {lastState && 
            <div>
                Precipitation: {precipitation}%
                <br></br>
                Humidity: {humidity}%
                <br></br>
                Wind Speeds: {wind}mph
            </div>}
            </div>
            <div className='city-name'>
                {lastCity && <div> {lastCity}, </div>}
            </div> 
            <div className='state-name'>
                {!lastState && <div>Today's Forecast</div>}
                {lastState && <div> {lastState}</div>}
            </div>
            <div className='time-display'>
                {!lastState && <Clock format={'h:mm A'} ticking={true} timezone={'UTC'} />}
                {lastState && <Clock format={'h:mm A'} ticking={true} timezone={timezone} />}
            </div>
            <div className='date-display'>
                {<Clock format={'dddd'} />}
            </div>
            <div className='weather-icon'>
                <WeatherIcon forecast={forecast} lastState={lastState}/>
            </div>
        </div>

    )
}

export default Display;