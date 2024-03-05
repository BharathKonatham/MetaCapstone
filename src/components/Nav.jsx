import React from 'react'
import {NavLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const Nav = () => {
  return (
    <>
    <nav  className='Navbar'>
        <ul className='Menu'>
                <li ><NavLink  to="/">Home</NavLink></li>
                <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                <li><NavLink  to="/Menu">Menu</NavLink></li>
                <li><NavLink  to="/Reservations">Reservations</NavLink></li>
                <li><NavLink  to="/OrderOnline">Order Online</NavLink></li>
                <li><NavLink  to="/Login">Login</NavLink></li>
            </ul>
    </nav>
    </>
  )
}
//<NavLink  to="/About">About</NavLink>
export default Nav