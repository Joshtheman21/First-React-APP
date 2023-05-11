import React from 'react'
import Navbar from '../components/Navbar'
import AsadImage from '../components/AsadImage'
import Footer from '../components/Footer'
import FoodSection from '../components/Food'
const Food = () => {
  return (
    <div>
        <Navbar />
        <AsadImage heading='FOOD' text='What you can expect' />
        <FoodSection />
        <Footer />
    </div>
  )
}

export default Food