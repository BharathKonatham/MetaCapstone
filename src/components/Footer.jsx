import React from 'react'
import Logo2 from '../Assets/footer-logo.png'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        <section className='Logo2Section'>
          <img src={Logo2} className='logo2'/>
        </section>
        <section>
          <p><NavLink  to="/">Home</NavLink></p>
          <p><NavLink  to="/Menu">Menu</NavLink></p>
          <p><NavLink  to="/About">About</NavLink></p>
          <p><NavLink  to="/Reservations">Reservations</NavLink></p>
          <p><NavLink  to="/OrderOnline">Order Online</NavLink></p>
          <p><NavLink  to="/Login">Login</NavLink></p>
        </section>
        <section>
        <p>Address</p>
        <p>Phone number</p>
        <p>email</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer