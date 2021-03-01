import React from 'react'
import Title from './title'
import Logo from './logo'
import './Header.css'


function Header(){
    return(
        <div className='header'>
                <Logo />
                <Title />
        </div>
    )
}

export default Header;