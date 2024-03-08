import React from 'react'
import { NavLink } from 'react-router-dom'

const CurrReserv = () => {
  return (
    <div className='currentReservations'>
        <h3>Current Reservations</h3>
        <section className='CurrReservContainer'>
            <div className='eventDetailsContainer'>
                <h4>Evnet Name</h4>
                <div className='eventDetails'>
                    <div className='date'>
                        <p>Date of Reservation</p>
                        <div>
                            03/05/2024
                        </div>
                    </div>
                    <div className='time'>
                        <p>time</p>
                        <div>
                            9:30 PM
                        </div>
                    </div>
                    <div className='Guests'>
                        <p>Number of guests</p>
                        <div>
                            6
                        </div>
                    </div>
                </div>
            </div>
            <div className='eventStatus'>
                <div className='status'>
                    <p>Status</p>
                    <div>
                      Confirmed
                    </div>
                </div>
            </div>
        </section>
        <NavLink to='/NewReservation' ><button>New Reservation</button></NavLink>
    </div>
  )
}

export default CurrReserv