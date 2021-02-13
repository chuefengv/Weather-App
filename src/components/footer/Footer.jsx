import React from 'react';
import Searchbar from './searchbar'
import './Footer.css'

function Footer({setCity, setFlag, setLastCity, city}){
    return(
        <div className='footer'>
            Footer
            <Searchbar className='searchbar' setCity={setCity} setFlag={setFlag} setLastCity={setLastCity} city={city}/>
        </div>
    )
}

export default Footer;