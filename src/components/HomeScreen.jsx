import React from 'react'
import "./HomeScreen.css"
import Navbar from './Navbar'
import Banner from './Banner'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      {/* NavBar  */}
      <Navbar />
      
      {/* Banner  */}
      <Banner />
        {/* Row  */}
    </div>
  )
}

export default HomeScreen
