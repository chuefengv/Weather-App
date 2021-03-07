import React from 'react';
import Searchbar from './searchbar'
import './Footer.css'

function Footer({setState, setFlag, setLastState, state, lastState, city, setCity, currState, setCurrState, lastCity, setLastCity}){
    return(
        <div className='footer'>
            <Searchbar className='searchbar' setLastCity={setLastCity} lastCity={lastCity} city={city} setCity={setCity} currState={currState} setCurrState={setCurrState} setState={setState} setFlag={setFlag} setLastState={setLastState} state={state} lastState={lastState}/>
            <div className='copyright'>
                <p>Copyright © 2021, Created By Chuefeng V.</p>
            </div>
        </div>
    )
}

export default Footer;