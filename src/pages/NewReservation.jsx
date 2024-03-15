import React, { useState } from 'react'
import '../styles/NewReservation.css'
import ReservationsNav from '../components/ReservationsNav'
import Footer from '../components/Footer'
import PersonalInfo from '../components/PersonalInfo'
import ReservInfo from '../components/ReservInfo'
import NewReservHero from '../components/NewReservHero'

import { useRef } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {AddReservDetails} from '../store/ReservationSlice'

const NewReservation = () => {
    const reservations = useSelector((state)=>state.Reservation.ReservationDetails)
    const formRef = useRef(null);
    const dispatch = useDispatch()
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
    const date = (iDate)=>{
        const inputDate = new Date(iDate);
        resrvData.date = `${(inputDate.getMonth() + 1).toString().padStart(2, '0')}/${inputDate.getDate().toString().padStart(2, '0')}/${inputDate.getFullYear()}`;
    }
    const isFormEmpty = Object.values(resrvData).some((value) =>{
        if (typeof value === 'string') {
            return value.trim() === '';
          }
    })
    const resetForm = ()=>{
        setReservData({
            ...resrvData,
            date:'',
            time:'',
            noOfGuests:0,
            eventType:'',
            specialRequest:'',
        })
        setUserData({
            ...userData,
            firstName:'',
            lastName:'',
            street:'',
            city:'',
            zip:'',
            email:'',
            phone:'',
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        date(resrvData.date)
        dispatch(AddReservDetails(resrvData))
        resetForm()
    }


    return (
        <>
        <ReservationsNav Heading="New Reservation" />
        <main className='NewReservMain'>
            <form ref={formRef} onSubmit={handleSubmit}>
            <NewReservHero />
            <PersonalInfo  userData={userData} setUserData={setUserData} />
            <section className='reservDetails'>
                <ReservInfo resrvData={resrvData} setReservData={setReservData}/>
                <button type='submit' disabled={isFormEmpty}>Confirm Reservation</button>
            </section>
            </form>
        </main>
        <Footer />
        </>
    )
}
export default NewReservation