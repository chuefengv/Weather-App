import React, { useEffect, useState }  from 'react'
import axios from 'axios';


const API_KEY='3bb9bbd32853ab443e3fc197c20c61ff';

function Display({flag, lastState, lastCity}){

    const [weather, setWeather] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(false);

        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastCity},${lastState},united_states`)    
        .then(res =>{
            if(lastState===""){
                setWeather("");
            }else{
                console.log(res.data.current.temperature);
                setWeather(res.data.current.temperature);
                setLoading(true);
            }
        })
        .catch(err =>{
            console.log('bad error');
        })
    },[lastState, lastCity]);

    return(
        <div className='display'>
            {loading && flag && <div> {lastCity}, {lastState} {weather}</div>}
            
        </div>
    )
}

export default Display;