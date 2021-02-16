import React from 'react';
import Searchbar from './searchbar'
import './Footer.css'

function Footer({setState, setFlag, setLastState, state, lastState}){
    return(
        <div className='footer'>
            Footer
            <Searchbar className='searchbar' setState={setState} setFlag={setFlag} setLastState={setLastState} state={state} lastState={lastState}/>
        </div>
    )
}

export default Footer;