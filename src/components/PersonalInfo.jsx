import React from 'react'
import { useState } from 'react'

const PersonalInfo = ({userData,setUserData}) => {
   
  return (
    <>
    <section className='personalInfo'>
            <h1>Personal Information</h1>
            <div className='information'>
                <div className="name-form">
                    <div className='firstName'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" value={userData.firstName} onChange={(e)=>{setUserData({
                            ...userData,
                            firstName:e.target.value
                        })}}/>
                    </div>
                    <div className='lastName'>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" value={userData.lastName} onChange={(e)=>{setUserData({
                            ...userData,
                            lastName:e.target.value
                        })}}/>
                    </div>
                </div>
                <div className="address-form">
                    <div className='Street'>
                        <label htmlFor="streetName">Street Name</label>
                        <input type="text" id="streetName" name="streetName" placeholder="Enter your street name" value={userData.street} onChange={(e)=>{setUserData({
                            ...userData,
                            street:e.target.value
                        })}}/>
                    </div>
                    <div className='City'>
                        <label htmlFor="cityName">City</label>
                        <input type="text" id="cityName" name="cityName" placeholder="Enter your city" value={userData.city} onChange={(e)=>{setUserData({
                            ...userData,
                            city:e.target.value
                        })}}/>
                    </div>
                    <div className='Zip'>
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" id="zipCode" name="zipCode" placeholder="Zip code"
                        value={userData.zip} 
                        onChange={(e)=>{setUserData({
                            ...userData,
                            zip:e.target.value
                            })}} 
                        maxLength="5"/>
                    </div>
                </div>
                <div className="email-form">
                    <div className='email'>
                        <label htmlFor="emailName">Email Address</label>
                        <input type="email" id="emailName" name="emailName" placeholder="Enter your email" value={userData.email} onChange={(e)=>{setUserData({
                            ...userData,
                            email:e.target.value
                        })}}/>
                    </div>
                    <div className='phoneNumber'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" maxLength="12" value={userData.phone} onChange={(e)=>{setUserData({
                            ...userData,
                            phone:e.target.value
                        })}}/>
                    </div>
                </div>
            </div>
            </section>
    </>
  )
}

export default PersonalInfo