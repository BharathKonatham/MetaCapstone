import React from 'react'
import { NavLink } from 'react-router-dom'

const CurrReserv = ({reservations}) => {
    reservations.map((item,index)=>console.log(item))
    const firstRecord = reservations[0]
    const TimeFormatted =(time24)=> {
        // Split the time into hours and minutes
        const [hours, minutes] = time24.split(':');

        // Convert hours to 12-hour format
        let hours12 = parseInt(hours, 10) % 12;
        hours12 = hours12 === 0 ? 12 : hours12; // Handle midnight (00:00)
        // Determine AM or PM based on the original hours
        const meridiem = parseInt(hours, 10) < 12 ? 'AM' : 'PM';
        // Format the time in 12-hour format with AM/PM
        const time12 = `${hours12}:${minutes} ${meridiem}`;
        return time12;
      }
  return (
    <div className='currentReservations'>
        <h3>Current Reservations</h3>
        { reservations.map((item,index)=>{
            return(
            <section className='CurrReservContainer' key={index}>
            <div className='eventDetailsContainer'>
                <h4>{item.eventType}</h4>
                <div className='eventDetails'>
                    <div className='date'>
                        <p>Date of Reservation</p>
                        <div>
                            {item.date}
                        </div>
                    </div>
                    <div className='time'>
                        <p>time</p>
                        <div>
                        {TimeFormatted(item.time)}
                        </div>
                    </div>
                    <div className='Guests'>
                        <p>Number of guests</p>
                        <div>
                           {item.noOfGuests}
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
            )
        })}
        <NavLink to='/NewReservation' ><button>New Reservation</button></NavLink>
    </div>
  )
}

export default CurrReserv