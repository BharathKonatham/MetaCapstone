import React from 'react'
import chefsA from '../Assets/Mario and Adrian A.jpg'
import chefsB from '../Assets/Mario and Adrian b.jpg'
const About = () => {
  return (
    <div className='About'>
        <div className='AboutContainer'> 
            <div className='title'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem unde officia consectetur dolores maxime dicta exercitationem sit 
                neque sed. Libero commodi ut voluptas aliquam. At quidem deleniti iusto dolor tempora alias sint commodi fuga optio? Vitae ea illum non voluptas.
                </p>         
            </div>
            <div className='heroimgcontainer'>
            
                <img src={chefsA} className='heroimage1'/>
                <img src={chefsB} className='heroimage2'/>
            
            
            </div>
        </div>
        
    </div>
  )
}

export default About