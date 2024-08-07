import React from 'react'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About us</NavLink>

    </nav>
  )
}

export default Navbar