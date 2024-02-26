import React from 'react'
import {NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <>
    <nav  className='Navbar'>
        <ul className='Menu'>
                <li ><NavLink  to="/">Home</NavLink></li>
                <li><NavLink  to="/About">About</NavLink></li>
                <li><NavLink  to="/Menu">Menu</NavLink></li>
                <li><NavLink  to="/Reservations">Reservations</NavLink></li>
                <li><NavLink  to="/OrderOnline">Order Online</NavLink></li>
                <li><NavLink  to="/Login">Login</NavLink></li>
            </ul>
    </nav>
    </>
  )
}

export default Nav