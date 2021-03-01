import React, {useEffect, useState} from 'react'
import './Weather_icon.css'
import ReactAnimatedWeather from 'react-animated-weather'

let forecast_map = new Map()
forecast_map.set(113, "CLEAR_DAY")
forecast_map.set(116, "PARTLY_CLOUDY_DAY")
forecast_map.set(143, "FOG")
forecast_map.set(248, "FOG")
forecast_map.set(260, "FOG")
forecast_map.set(119, "CLOUDY")
forecast_map.set(122, "CLOUDY")
forecast_map.set(200, "CLOUDY")
forecast_map.set(176, "RAIN")
forecast_map.set(185, "RAIN")
forecast_map.set(263, "RAIN")
forecast_map.set(266, "RAIN")
forecast_map.set(281, "RAIN")
forecast_map.set(284, "RAIN")
forecast_map.set(293, "RAIN")
forecast_map.set(296, "RAIN")
forecast_map.set(299, "RAIN")
forecast_map.set(302, "RAIN")
forecast_map.set(305, "RAIN")
forecast_map.set(308, "RAIN")
forecast_map.set(311, "RAIN")
forecast_map.set(314, "RAIN")
forecast_map.set(353, "RAIN")
forecast_map.set(356, "RAIN")
forecast_map.set(359, "RAIN")
forecast_map.set(386, "RAIN")
forecast_map.set(389, "RAIN")
forecast_map.set(182, "SLEET")
forecast_map.set(317, "SLEET")
forecast_map.set(320, "SLEET")
forecast_map.set(362, "SLEET")
forecast_map.set(365, "SLEET")
forecast_map.set(179, "SNOW")
forecast_map.set(227, "SNOW")
forecast_map.set(230, "SNOW")
forecast_map.set(323, "SNOW")
forecast_map.set(326, "SNOW")
forecast_map.set(329, "SNOW")
forecast_map.set(332, "SNOW")
forecast_map.set(335, "SNOW")
forecast_map.set(338, "SNOW")
forecast_map.set(350, "SNOW")
forecast_map.set(368, "SNOW")
forecast_map.set(371, "SNOW")
forecast_map.set(374, "SNOW")
forecast_map.set(377, "SNOW")
forecast_map.set(392, "SNOW")
forecast_map.set(395, "SNOW")

function Weather_icon({forecast, lastState}){

    useEffect(()=>{
        display = document.getElementsByClassName('display')[0];
        console.log(forecast);

        if(forecast_map.get(forecast)=='CLEAR_DAY' || forecast_map.get(forecast)=='PARTLY_CLOUDY_DAY'){
            display.style.backgroundPosition='left';
            display.style.transition='background-position 3s'
        }
        else if(forecast_map.get(forecast)==='FOG' || forecast_map.get(forecast)==='CLOUDY' || forecast_map.get(forecast)==='RAINY'){
            display.style.backgroundPosition='center';
            display.style.transition='background-position 3s'

        }
        else if(forecast_map.get(forecast)==='SLEET' || forecast_map.get(forecast)==='SNOW'){
            display.style.backgroundPosition='right';
            display.style.transition='background-position 3s'

        }
    },[forecast]);

    return(
        <div>
            {!lastState &&              
            <ReactAnimatedWeather
                icon='CLEAR_DAY'
                color='white'
                size={200}
                animate={true}
            />}

            {lastState &&              
            <ReactAnimatedWeather
                icon={forecast_map.get(forecast)}
                color='white'
                size={200}
                animate={true}
            />}
        </div>
    )
}

export default Weather_icon;