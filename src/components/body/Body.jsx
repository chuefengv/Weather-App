import React, { useEffect, useState }  from 'react'
import Display from './display'
import './Body.css'
import axios from 'axios';

const API_KEY='d927a6b3c39a782e1a9e488ba5fd8e5a';


function Body({flag, lastCity}){
    const [weather, setWeather] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(false);

        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastCity},united_states`)    
        .then(res =>{
            if(lastCity===""){
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
    },[lastCity]);

    return(
        <div className='body'>
            {loading && flag && <div>{lastCity} {weather}</div>}
            <Display className='display' />
        </div>
    )
}

export default Body;