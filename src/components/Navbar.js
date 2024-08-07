import React from 'react'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { useAuth } from './auth'


function Navbar() {
  const auth = useAuth()
  

  const navLinkStyles = (isActive)=>{
    return {
      fontWeight : isActive? 'bold':'normal',
      textDecoration:isActive ? 'none': 'underline'
    }
  }

  return (
    <nav>
    <NavLink to='/' style={navLinkStyles}>Home</NavLink>
    <NavLink to='/profile' style={navLinkStyles}>Profile</NavLink>

    <NavLink to='/products' style={navLinkStyles}>Products</NavLink>

    <NavLink to='/about' style={navLinkStyles}>About us</NavLink>
{
  !auth.user && (
    <NavLink to='/login' style={navLinkStyles}>Products</NavLink>
  )
  
}
    </nav>
  )
}

export default Navbar