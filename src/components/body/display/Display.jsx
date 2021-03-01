import React, { useEffect, useRef, useState }  from 'react'
import axios from 'axios';
import Clock from 'react-live-clock';
import './Display.css'
import Weather_icon from './weather_icon'

const API_KEY='3bb9bbd32853ab443e3fc197c20c61ff';

function Display({flag, lastState, lastCity}){

    const [temp, setTemp] = useState("");
    const [precipitation, setPrecipitation] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [weatherDesc, setWeatherDesc] = useState("");
    const [timezone, setTimezone] = useState("");
    const [forecast, setForecast] = useState(113);
    const firstRun = useRef(true);
    const firstRun2 = useRef(true);


    useEffect(()=>{
        if (firstRun.current) {
            firstRun.current = false;
            return;
        }
        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastState},united_states`)    
            .then(res =>{
                {
                    setTemp(res.data.current.temperature);
                    setPrecipitation(res.data.current.precip);
                    setHumidity(res.data.current.humidity);
                    setWind(res.data.current.wind_speed);
                    setWeatherDesc(res.data.current.weather_descriptions);
                    setTimezone(res.data.location.timezone_id);
                    setForecast(res.data.current.weather_code);
                    
                }
            })
            .catch(err =>{
                console.log('bad error');
            })
    },[lastState]);

    useEffect(()=>{
        if (firstRun2.current) {
            firstRun2.current = false;
            return;
        }
        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastCity},${lastState},united_states`)    
        .then(res =>{
            {
                setTemp(res.data.current.temperature);
                setPrecipitation(res.data.current.precip);
                setHumidity(res.data.current.humidity);
                setWind(res.data.current.wind_speed);
                setWeatherDesc(res.data.current.weather_descriptions);
                setTimezone(res.data.location.timezone_id);
                setForecast(res.data.current.weather_code);
            }
        })
        .catch(err =>{
            console.log('bad error');
        })
    },[lastCity]);


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
                {!lastState && <div>Today's Weather Forecast</div>}
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
                <Weather_icon forecast={forecast} lastState={lastState}/>
            </div>
        </div>

    )
}

export default Display;