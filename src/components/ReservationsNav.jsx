import React from 'react'
import { useHistory } from 'react-router-dom';

import {NavLink } from 'react-router-dom';
import chefsB from '../Assets/backIcon.svg'

const ReservationsNav = ({Heading,From}) => {
  return (
    <nav> 
      <NavLink  to={'/'}><img src={chefsB} alt='backIcon' className='backIcon'/></NavLink>
      <h2>{Heading}</h2>
    </nav>
  )
}

export default ReservationsNav