import React from 'react'
import './Logo.css'
import logo from 'url:../../../assets/satellite-dish.png'
import gitIcon from 'url:../../../assets/github.png'


function Logo(){
    return(
        <div className='logo'>
            {/* <a className='git-icon' href='./'>
                <img src={gitIcon}></img>
            </a> */}
            <a className='radar-icon' href='./'>
                <img src={logo}></img>
            </a>
        </div>
        
    );
};

export default Logo;