import React from 'react'
import Nav from "./Nav"
import Logo from "../Assets/Logo.svg"
const Header = () => {
  return (
        <header className='Header'>
          <div className='container'>
            <img src={Logo} className='logo'/>
            <Nav />
          </div>

        </header>
  )
}

export default Header