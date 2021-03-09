import React, { useEffect, useRef, useState }  from 'react'
import axios from 'axios';
import Clock from 'react-live-clock';
import './Display.css'
import WeatherIcon from './weather_icon'

function Display({flag, lastState, lastCity, city}){

    //the temperature of the location
    const [temp, setTemp] = useState("");
    //weather details of the location
    const [precipitation, setPrecipitation] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    //weather forecast description of the location
    const [weatherDesc, setWeatherDesc] = useState("");
    //timezone depending on the region
    const [timezone, setTimezone] = useState("");
    //forecast, to be used to determine forecast icon
    const [forecast, setForecast] = useState(113);
    //flags to determine when to mount
    const firstRun = useRef(true);

    const API_KEY=process.env.API_KEY || 'd927a6b3c39a782e1a9e488ba5fd8e5a';

    //when an api request is sent with ONLY a state chosen
    useEffect(()=>{
        //do not mount on first load
        if (firstRun.current) {
            firstRun.current = false;
            return;
        }
        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastState},united_states`)    
            .then(res =>{
                //all the information needed for the display
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
        
    },[lastState, API_KEY]);

    //when an API request is sent with both city AND state options chosen
    useEffect(()=>{
        //do not mount until a city option is chosen
        if (city === '') {
            return;
        }
        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastCity},${lastState},united_states`)    
        .then(res =>{
                //all the information needed for the display
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
                {/* default option for when no options have been chosen */}
                {!lastState && <div>0°F</div>}

                {/* when an api call has been submitted, update display */}
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