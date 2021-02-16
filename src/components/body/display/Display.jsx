import React, { useEffect, useState }  from 'react'
import axios from 'axios';


const API_KEY='d927a6b3c39a782e1a9e488ba5fd8e5a';

function Display({flag, lastState}){

    const [weather, setWeather] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(false);

        axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=${lastState},united_states`)    
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
    },[lastState]);

    return(
        <div className='display'>
            {loading && flag && <div>{lastState} {weather}</div>}
            
        </div>
    )
}

export default Display;