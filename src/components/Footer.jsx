import React from 'react'
import Logo2 from '../Assets/footer-logo.png'
const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        <section className='Logo2Section'>
          <img src={Logo2} className='logo2'/>
        </section>
        <section>
          <h5><a>Home</a></h5>
          <h5><a>About</a></h5>
          <h5><a>Menu</a></h5>
          <h5><a>Reservations</a></h5>
          <h5><a>Order Online</a></h5>
          <h5><a>Login</a></h5>
        </section>
        <section>
        <h5>Address</h5>
        <h5>Phone number</h5>
        <h5>email</h5>
        </section>
      </div>
    </footer>
  )
}

export default Footer