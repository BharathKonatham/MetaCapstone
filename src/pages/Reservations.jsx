import React from 'react'
import '../styles/Reservations.css'

import ReservationsNav from '../components/ReservationsNav'
import CurrReserv from '../components/CurrReserv'

const Reservations = () => {
  return (
    <main>
        <ReservationsNav />
        <CurrReserv />
    </main>
  )
}

export default Reservations