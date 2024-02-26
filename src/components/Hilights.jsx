import React from 'react'
import greekSalad from '../Assets/greek salad.jpg'
import burchetta from '../Assets/bruchetta.svg'
import lemonDesert from '../Assets/lemon dessert.jpg'
import devlivery from '../Assets/scooter-delivery-food-svgrepo-com.svg'
import { NavLink } from 'react-router-dom'
const Hilights = () => {
  return (
    <div className='Hilights'>
      <div className='container'>
        <div className='onlineitems'>
          <h2>Specials</h2>
          <NavLink  to="/OrderOnline">
            <button className='orderOnline'>Order Online</button>
          </NavLink>
        </div>
        <div className='itmesContainer'>
          <section className='item'>
            <img src={greekSalad}/>
            <div>
              <h4><span>Greek Salad</span>
              <span style={{color:'Red'}}>$20</span></h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fugit id tempore sit temporibus dolorem veritatis aspernatur ratione accusamus nihil!</p>
              <h5 className='delivery'>
                <a>Order Delivery</a>
                <img src={devlivery}  className='deliveryicon'/>
                </h5>
            </div>
          </section>
          <section className='item'>
            <img src={burchetta}/>
            <div>
              <h4><span>Burchetta</span>
              <span style={{color:'Red'}}>$20</span></h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fugit id tempore sit temporibus dolorem veritatis aspernatur ratione accusamus nihil!</p>
              <h5 className='delivery'>
                <a>Order Delivery</a>
                <img src={devlivery} className='deliveryicon'/>
                </h5>
            </div>
          </section>
          <section className='item'>
            <img src={lemonDesert} />
            <div>
              <h4><span>Lemon Desert</span>
              <span style={{color:'Red'}}>$20</span></h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore fugit id tempore sit temporibus dolorem veritatis aspernatur ratione accusamus nihil!</p>
              <h5 className='delivery'>
                <a>Order Delivery</a>
                <img src={devlivery} className='deliveryicon'/>
                </h5>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Hilights