import React from 'react'
import { testmonials } from '../Data/Testmonila'

const Testmonials = () => {


  return (
    <div className='testmonial'>
      <div className='testmonialContainer' >
        {testmonials.map((item,i)=>{
          const rotation = Math.floor(Math.random() * (7 - (-7) + 1)) - 7;
          return(
          <section key={i} style={{transform:`rotate(${rotation}deg)`}}>
            <div className='testmonialContent' >
              <h4 className='rating'>{item.rating}</h4>
              <div className='person'>
                <img src={item.image} className='personImg'/>
                <h4 className='personName'>{item.name}</h4>                
              </div>
              <p>{item.testmony}!</p>
            </div>
            
          </section>)
        })}
      </div>
    </div>
  )
}

export default Testmonials