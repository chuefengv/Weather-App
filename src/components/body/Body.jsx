import React from 'react'
import Display from './display'
import './Body.css'

function Body({flag, lastState, lastCity}){

    return(
        <div className='body'>
            <Display className='display' lastCity={lastCity} flag={flag} lastState={lastState}/>
        </div>
    )
}

export default Body;