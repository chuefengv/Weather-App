import React, { useEffect, useState }  from 'react'
import axios from 'axios';

const API_KEY='3bb9bbd32853ab443e3fc197c20c61ff';

function Display({flag, lastState, lastCity}){

    const [temp, setTemp] = useState("");
    const [precipitation, setPrecipitation] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [weatherDesc, setWeatherDesc] = useState("");


    useEffect(()=>{

        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastCity},${lastState},united_states`)    
        .then(res =>{
            if(lastState===""){
                setTemp("");
            }else{
                console.log(res.data.current.temperature);
                setTemp(res.data.current.temperature);
                setPrecipitation(res.data.current.precip);
                setHumidity(res.data.current.humidity);
                setWind(res.data.current.wind_speed);
                setWeatherDesc(res.data.current.weather_descriptions);
            }
        })
        .catch(err =>{
            console.log('bad error');
        })
    },[lastState, lastCity]);

    return(
        <div className='display'>
            <div className='temperature'>
                {/* 79F  */}
                {!lastState && <div>0°F</div>}
                {lastState && <div>{temp}°F</div>}
            </div>
            <div className='weather-desc'>
                What to expect outside: {weatherDesc}
            </div>
            <div className='weather-details'>
            {!lastState && 
            <div>
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
                {lastCity && <div> {lastCity} </div>}
                {/* Fitchburg */}
            </div> 
            <div className='state-name'>
                {!flag && <div>Where Should We Check?</div>}
                {flag && <div> {lastState}</div>}
                {/* Massachusetts */}
            </div>
            <div className='time-display'>
                7:30PM
            </div>
            <div className='date-display'>
                Tuesday
            </div>
            <div className='weather-icon'>
                SUNHERE
            </div>
        </div>

    )
}

export default Display;