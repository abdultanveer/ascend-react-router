import React from 'react'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'


function Navbar() {

  

  const navLinkStyles = (isActive)=>{
    return {
      fontWeight : isActive? 'bold':'normal',
      textDecoration:isActive ? 'none': 'underline'
    }
  }

  return (
    <nav>
    <NavLink to='/' style={navLinkStyles}>Home</NavLink>
    <NavLink to='/about' style={navLinkStyles}>About us</NavLink>

    </nav>
  )
}

export default Navbar