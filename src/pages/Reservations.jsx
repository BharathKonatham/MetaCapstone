import React from 'react'
import '../styles/Reservations.css';
import { useLocation } from 'react-router-dom';

import ReservationsNav from '../components/ReservationsNav'
import CurrReserv from '../components/CurrReserv'
import PrevReserv from '../components/PrevReserv'
import Footer from '../components/Footer'
import { UseSelector, useSelector } from 'react-redux';
const Reservations = () => {
  const reservations = useSelector((state)=>state.Reservation.ReservationDetails)

console.log(reservations)

  return (
    <main className='ReservationsMain'>
        <ReservationsNav Heading="Reservations" From="Reservations"  />
        <CurrReserv reservations= {reservations}/>
        <PrevReserv />
        <Footer />
    </main>
  )
}

export default Reservations