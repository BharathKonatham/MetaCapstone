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
        <section className='personalInfo'>
        <h1>Personal Information</h1>
        <div className='information'>
            <div className="name-form">
                <div className='firstName'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
                </div>
                <div className='lastName'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
                </div>
            </div>
            <div className="address-form">
                <div className='Street'>
                    <label htmlFor="streetName">Street Name</label>
                    <input type="text" id="streetName" name="streetName" placeholder="Enter your street name" />
                </div>
                <div className='City'>
                    <label htmlFor="cityName">City</label>
                    <input type="text" id="cityName" name="cityName" placeholder="Enter your city" />
                </div>
                <div className='Zip'>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" name="zipCode" placeholder="Zip code" />
                </div>
            </div>
            <div className="email-form">
                <div className='email'>
                    <label htmlFor="emailName">Email Address</label>
                    <input type="email" id="emailName" name="emailName" placeholder="Enter your email" />
                </div>
                <div className='phoneNumber'>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />
                </div>
            </div>
        </div>
        </section>
        <section className='reservDetails'>
            <h1>Reservation details</h1>
            <div className="details">
                <div className="numbers">
                    <div className="time_date">
                        <div className="date">
                            <p>Date of Reservation</p>
                            <input type="date" />
                        </div>
                        <div className="time">
                            <p>Time</p>
                            <input type="time" />
                        </div>
                    </div>
                    <div className="num_Guest">
                        <p>Number of Guests</p>
                        <div>
                            {
                                [1,2,3,4,5,6].map((item,index)=>(
                                    <button className={''} key={index}>{item}</button>
                                ))
                            }
                            
                        </div>
                    </div>
                    <div className="event">
                       <p>Select Event</p>
                        <select id="eventType" value={''} onChange={''} name='eventType'>
                            <option value="">Select Event</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className='additionalInfo'>
                    <p>Special Request</p>
                    <textarea id="textArea" value={''} onChange={''} rows={4} cols={50}></textarea>
                </div>
            </div>
            <button>Confirm Reservation</button>
        </section>
    </main>
    <Footer />
    </>
  )
}
export default NewReservation