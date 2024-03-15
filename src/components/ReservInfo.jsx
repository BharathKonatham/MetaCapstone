import React from 'react'

const ReservInfo = ({resrvData,setReservData}) => {
  return (
    <>
        <h1>Reservation details</h1>
                <div className="details">
                    <div className="numbers">
                        <div className="time_date">
                            <div className="date">
                                <p>Date of Reservation</p>
                                <input type="date" value={resrvData.date} onChange={(e)=>{
                                    setReservData({...resrvData,date:e.target.value})
                                }}/>
                            </div>
                            <div className="time">
                                <p>Time</p>
                                <input type="time" value={resrvData.time} onChange={(e)=>{
                                    setReservData({...resrvData,time:e.target.value})}}/>
                            </div>
                        </div>
                        <div className="num_Guest">
                            <p>Number of Guests</p>
                            <div>
                                {
                                    [1,2,3,4,5,6].map((item,index)=>(
                                       <button className={`button_${item === resrvData.noOfGuests? 'selected':''}`} key={index} onClick={(e)=>{
                                        e.preventDefault()
                                        setReservData({...resrvData,noOfGuests:item})}}>{item}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="event">
                        <label htmlFor='eventType'>Event Type</label>
                            <select id="eventType" value={resrvData.eventType}  onChange={(e)=>{
                                setReservData({...resrvData,eventType:e.target.value})
                            }}>
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
                        <textarea id="textArea" value={resrvData.specialRequest} onChange={(e)=> setReservData({...resrvData,specialRequest:e.target.value})} rows={4} cols={50}></textarea>
                    </div>
                </div>
    </>
  )
}

export default ReservInfo