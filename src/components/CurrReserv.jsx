import React from 'react'

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
                            5/6/2024
                        </div>
                    </div>
                    <div className='time'>
                        <p>time</p>
                        <div>

                        </div>
                    </div>
                    <div className='Guests'>
                        <p>Number of guests</p>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='eventStatus'>

            </div>
        </section>
    </div>
  )
}

export default CurrReserv