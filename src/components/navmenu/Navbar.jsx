import React from 'react'
import './navbar.css'
//import logo from '../../assets/logo.png'
import { useState } from 'react'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('#')
    return (
        <div class="navbar">
            {/* <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Contact</a> */}
            <a href="#" onClick={() => setActiveItem('#')}>SS</a>
            <div class="topnav-right">
                <a href='#' onClick={() => setActiveItem('#')} className={activeItem === '#' ? 'active': ''}>Home</a>
                <a href='#about' onClick={() => setActiveItem('#about')} className={activeItem === '#about' ? 'active': ''}>About</a>
                <a href='#experience' onClick={() => setActiveItem('#experience')} className={activeItem === '#experience' ? 'active': ''}>Experience</a>
                <a href='#work' onClick={() => setActiveItem('#work')} className={activeItem === '#work' ? 'active': ''}>Work</a>
                <a href='#contact' onClick={() => setActiveItem('#contact')} className={activeItem === '#contact' ? 'active': ''}>Contact</a>
            </div>
            
        </div>
    )
}

export default Navbar