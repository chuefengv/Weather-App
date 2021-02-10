import React from 'react'
import Clock from './clock'
import Title from './title'
import './Header.css'

function Header(){
    return(
        <div className='header'>
            Header
            <Title />
            <Clock />
            
        </div>
    )
}

export default Header;