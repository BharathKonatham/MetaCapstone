import React from 'react'

import '../styles/Home.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className='mainHome'>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}

export default Home