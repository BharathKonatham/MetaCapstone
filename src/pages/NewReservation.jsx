import React from 'react'
import '../styles/NewReservation.css'
import ReservationsNav from '../components/ReservationsNav'
import Footer from '../components/Footer'
const NewReservation = () => {
  return (
    <>
    <ReservationsNav Heading="New Reservation" />
    <main className='NewReservMain'>
        <section className='Hero'>
            <div className="title">
                <h3>Little Lemon</h3>
                <h3>Table Reservation</h3>
                <h3>Chicago</h3>
            </div>
            <div className="image">
                <p>Securing a reservation at Little Lemon is in high demand, so it's advisable to ensure you book your table at the optimal time. Currently, we have temporarily suspended the option to reschedule reservations due to an overwhelming demand. We appreciate your understanding and recommend reserving your spot at your earliest convenience to guarantee your dining experience.</p>
            </div>
        </section>
        <div>NewReservation</div>
    </main>
    
    <Footer />
    </>
  )
}

export default NewReservation