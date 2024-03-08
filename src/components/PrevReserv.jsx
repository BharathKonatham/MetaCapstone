import React from 'react'

const PreReserv = () => {
  return (
    <div className='prevReservations'>
       <h3>Previous Reservations</h3>
       <section className='prevReservContainer'>
            <div className='prevDetailsContainer'>
            <h4>Event Name</h4>
                <div className='prevEventDetails'>
                    <div className='date'>
                        <p>Date of Reservation</p>
                        <div>
                            03/05/2024
                        </div>
                    </div>
                    <div className='eventStatus'>
                      <div className='status'>
                          <p>Status</p>
                          <div>
                            Dined
                          </div>
                      </div>
                    </div>
                </div>
            </div>
       </section>
    </div>
  )
}

export default PreReserv