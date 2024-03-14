import React, { useState } from 'react'
import '../styles/NewReservation.css'
import ReservationsNav from '../components/ReservationsNav'
import Footer from '../components/Footer'
import PersonalInfo from '../components/PersonalInfo'
import ReservInfo from '../components/ReservInfo'
import NewReservHero from '../components/NewReservHero'
const NewReservation = () => {

    const [userData,setUserData] = useState({
        firstName:'',
        lastName:'',
        street:'',
        city:'',
        zip:'',
        email:'',
        phone:'',
    })
    const [resrvData,setReservData] = useState({
        date:'',
        time:'',
        noOfGuests:0,
        eventType:'',
        specialRequest:'',
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(userData)
    }
    return (
        <>
        <ReservationsNav Heading="New Reservation" />
        <main className='NewReservMain'>
            <form onSubmit={handleSubmit}>
            <NewReservHero />
            <PersonalInfo  userData={userData} setUserData={setUserData} />
            <section className='reservDetails'>
                <ReservInfo resrvData={resrvData} setReservData={setReservData}/>
                <button type='submit'>Confirm Reservation</button>
            </section>
            </form>
        </main>
        <Footer />
        </>
    )
}
export default NewReservation