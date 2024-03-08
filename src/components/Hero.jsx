import React from 'react'
import HeroImage from '../Assets/restauranfood.jpg'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='Hero'>
      <div className='container'>
        <section className='title'>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis tenetur quod maxime laudantium doloribus. Fugit, corporis. Minima consequuntur dignissimos optio rem id, nobis commodi, animi libero iure laborum quas iusto.
              </p>
              <NavLink to="/NewReservation" >
                <button className='reservetable'>Reserve a Table</button>
              </NavLink>
          </section>
          <section className='heroimgcontainer'>
              <img src={HeroImage} className='heroimage'/>
          </section>
      </div>
        
    </div>
  )
}

export default Hero