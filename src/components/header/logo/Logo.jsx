import React from 'react'
import './Logo.css'
import logo from 'url:../../../assets/satellite-dish.png'
import gitIcon from 'url:../../../assets/github.png'


function Logo(){
    return(
        <div className='logo'>
            <a target="_blank" rel="noopener noreferrer" className='git-icon' href='https://github.com/chuefengv/Weather-App'>
                <img src={gitIcon}></img>
            </a>
            <a className='radar-icon' href='./'>
                <img src={logo}></img>
            </a>
        </div>
        
    );
};

export default Logo;