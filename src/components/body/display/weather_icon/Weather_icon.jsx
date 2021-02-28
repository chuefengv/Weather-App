import React from 'react'
import './Weather_icon.css'
import ReactAnimatedWeather from 'react-animated-weather'

let forecast = new Map();
forecast.set(113, "CLEAR_DAY")
forecast.set(116, "PARTLY_CLOUDY_DAY")
forecast.set(143, "FOG")
forecast.set(248, "FOG")
forecast.set(260, "FOG")
forecast.set(119, "CLOUDY")
forecast.set(122, "CLOUDY")
forecast.set(200, "CLOUDY")
forecast.set(176, "RAIN")
forecast.set(185, "RAIN")
forecast.set(263, "RAIN")
forecast.set(266, "RAIN")
forecast.set(281, "RAIN")
forecast.set(284, "RAIN")
forecast.set(293, "RAIN")
forecast.set(296, "RAIN")
forecast.set(299, "RAIN")
forecast.set(302, "RAIN")
forecast.set(305, "RAIN")
forecast.set(308, "RAIN")
forecast.set(311, "RAIN")
forecast.set(314, "RAIN")
forecast.set(353, "RAIN")
forecast.set(356, "RAIN")
forecast.set(359, "RAIN")
forecast.set(386, "RAIN")
forecast.set(389, "RAIN")
forecast.set(182, "SLEET")
forecast.set(317, "SLEET")
forecast.set(320, "SLEET")
forecast.set(362, "SLEET")
forecast.set(365, "SLEET")
forecast.set(179, "SNOW")
forecast.set(227, "SNOW")
forecast.set(230, "SNOW")
forecast.set(323, "SNOW")
forecast.set(326, "SNOW")
forecast.set(329, "SNOW")
forecast.set(332, "SNOW")
forecast.set(335, "SNOW")
forecast.set(338, "SNOW")
forecast.set(350, "SNOW")
forecast.set(368, "SNOW")
forecast.set(371, "SNOW")
forecast.set(374, "SNOW")
forecast.set(377, "SNOW")
forecast.set(392, "SNOW")
forecast.set(395, "SNOW")















function Weather_icon(){
    return(
        <ReactAnimatedWeather
                    icon={defaults.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
    )
}

export default Weather_icon;