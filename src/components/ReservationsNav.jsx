import React from 'react'
import {NavLink } from 'react-router-dom';
import chefsB from '../Assets/backIcon.svg'

const ReservationsNav = ({Heading,From}) => {
  console.log(From)
  const To = From === "Home" ? "/":"/Reservations"
  return (
    <nav>
      <NavLink  to={To? To : '/'}><img src={chefsB} alt='backIcon' className='backIcon'/></NavLink>
      <h2>{Heading}</h2>
    </nav>
  )
}

export default ReservationsNav