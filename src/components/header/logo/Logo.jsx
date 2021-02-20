import React from 'react'
import './Logo.css'
import logo from 'url:../../../assets/w_logo.png'


function Logo1(){
    return(
        <div className='logo'>
            <img src={logo}></img>
        </div>
    );
};

export default Logo1;