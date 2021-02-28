import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import Clock from 'react-live-clock';
import './Display.css'
import ReactAnimatedWeather from 'react-animated-weather';


const API_KEY='3bb9bbd32853ab443e3fc197c20c61ff';

function Display({flag, lastState, lastCity}){

    const [temp, setTemp] = useState("");
    const [precipitation, setPrecipitation] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [weatherDesc, setWeatherDesc] = useState("");
    const [timezone, setTimezone] = useState("");


    useEffect(()=>{
            axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastState},united_states`)    
            .then(res =>{
                {
                    setTemp(res.data.current.temperature);
                    setPrecipitation(res.data.current.precip);
                    setHumidity(res.data.current.humidity);
                    setWind(res.data.current.wind_speed);
                    setWeatherDesc(res.data.current.weather_descriptions);
                    setTimezone(res.data.location.timezone_id);
                    
                }
            })
            .catch(err =>{
                console.log('bad error');
            })
    },[lastState]);

    useEffect(()=>{
        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastCity},${lastState},united_states`)    
        .then(res =>{
            {
                setTemp(res.data.current.temperature);
                setPrecipitation(res.data.current.precip);
                setHumidity(res.data.current.humidity);
                setWind(res.data.current.wind_speed);
                setWeatherDesc(res.data.current.weather_descriptions);
                setTimezone(res.data.location.timezone_id);
            }
        })
        .catch(err =>{
            console.log('bad error');
        })
    },[lastCity]);
    const defaults = {
        icon: 'CLEAR_DAY',
        color: 'goldenrod',
        size: 212,
        animate: true
      };
    return(
        <div className='display'>
            <div className='temperature'>
                {!lastState && <div>0°F</div>}
                {lastState && <div>{temp}°F</div>}
            </div>
            <div className='weather-desc'>
                {!lastState && <div>What to expect outside</div>}
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
                <ReactAnimatedWeather
                    icon={defaults.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
            </div>
        </div>

    )
}

export default Display;