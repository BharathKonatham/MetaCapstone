import React from 'react'
import Nav from "./Nav"
import Logo from "../Assets/Logo.svg"
const Header = () => {
  return (
        <header className='Header'>
           <img src={Logo} className='logo'/>
          <Nav />
        </header>
  )    
         
}

export default Header