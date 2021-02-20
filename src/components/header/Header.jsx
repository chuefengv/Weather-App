import React from 'react'
import Clock from './clock'
import Title from './title'
import Logo1 from './logo'
import './Header.css'


function Header(){
    return(
        <div className='header'>
            <Logo1 />
            <Title />
            <Clock />
            
        </div>
    )
}

export default Header;