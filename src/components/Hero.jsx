import React from 'react'
import HeroImage from '../Assets/restauranfood.jpg'
const Hero = () => {
  return (
    <div className='Hero'>
        <div className='title'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis tenetur quod maxime laudantium doloribus. Fugit, corporis. Minima consequuntur dignissimos optio rem id, nobis commodi, animi libero iure laborum quas iusto.
            </p>
            <button className='reservetable'>Reserve a Table</button>
        </div>
        <div className='heroimgcontainer'>
          
            <img src={HeroImage} className='heroimage'/>
        
          
        </div>
    </div>
  )
}

export default Hero