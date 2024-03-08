import React from 'react'
import '../styles/Reservations.css'

import ReservationsNav from '../components/ReservationsNav'
import CurrReserv from '../components/CurrReserv'
import PrevReserv from '../components/PrevReserv'
import Footer from '../components/Footer'

const Reservations = () => {
  return (
    <main className='ReservationsMain'>
        <ReservationsNav Heading="Reservations" From="Reservations" />
        <CurrReserv />
        <PrevReserv />
        <Footer />
    </main>
  )
}

export default Reservations