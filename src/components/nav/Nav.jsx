import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {MdHomeRepairService} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {TbMessageCircle} from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
  const [activeItem, setActiveItem] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveItem('#')} className={activeItem === '#' ? 'active': ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=> setActiveItem('#about')} className={activeItem === '#about' ? 'active': ''}><FaUser /></a>
      <a href='#experience' onClick={()=> setActiveItem('#experience')} className={activeItem === '#experience' ? 'active': ''}><MdHomeRepairService /></a>
      <a href='#services' onClick={()=> setActiveItem('#services')} className={activeItem === '#services' ? 'active': ''}><RiServiceFill /></a>
      <a href='#contact' onClick={()=> setActiveItem('#contact')} className={activeItem === '#contact' ? 'active': ''}><TbMessageCircle /></a>
    </nav>
  )
}

export default Nav