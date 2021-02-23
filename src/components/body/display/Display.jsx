import React, { useEffect, useState }  from 'react'
import axios from 'axios';

const API_KEY='3bb9bbd32853ab443e3fc197c20c61ff';

function Display({flag, lastState, lastCity}){

    const [temp, setTemp] = useState("");

    useEffect(()=>{

        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastCity},${lastState},united_states`)    
        .then(res =>{
            if(lastState===""){
                setWeather("");
            }else{
                console.log(res.data.current.temperature);
                setTemp(res.data.current.temperature);
            }
        })
        .catch(err =>{
            console.log('bad error');
        })
    },[lastState, lastCity]);

    return(
        <div className='display'>
            <div className='temperature'>
                79F
            </div>
            <div className='weather-desc'>
                WEATHER DESC.
            </div>
            <div className='city-name'>
                {/* {lastCity && <div> {lastCity} </div>} */}
                Fitchburg
            </div> 
            <div className='state-name'>
                {/* {flag && <div> {lastState} {temp}</div>} */}
                Massachusetts
            </div>
            <div className='time-display'>
                TIME
            </div>
            <div className='date-display'>
                DATE
            </div>
            <div className='weather-icon'>
                SUNHERE
            </div>
        </div>

    )
}

export default Display;