import React from 'react'
import Display from './display'
import './Body.css'

function Body({flag, lastState}){

    return(
        <div className='body'>
            <Display className='display' flag={flag} lastState={lastState}/>
        </div>
    )
}

export default Body;