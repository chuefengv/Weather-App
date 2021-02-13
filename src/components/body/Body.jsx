import React, { useEffect, useState }  from 'react'
import { weatherAPI } from "../../services/weatherCall";
import Display from './display'
import './Body.css'
import axios from 'axios';


function Body({flag, lastCity}){
    const [weather, setWeather] = useState([]);

    useEffect(()=>{
        const API_KEY='d927a6b3c39a782e1a9e488ba5fd8e5a';

        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastCity},united_states`)    
        .then(res =>{
            if(lastCity===""){
                setWeather("")
            }else{
                console.log(res.data.current.temperature);
                setWeather(res.data.current.temperature);
            }
        })
        .catch(err =>{
            console.log('bad error');
        })
    },[lastCity]);

    return(
        <div className='body'>
            {flag && <div>{lastCity}</div>}
            {flag && weather}
            <Display className='display' />
        </div>
    )
}

export default Body;