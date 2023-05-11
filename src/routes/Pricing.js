import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AsadImage from '../components/AsadImage'
import PricingCards from '../components/Pricing'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <AsadImage heading='Pricing.' text='Choose your Trip'/>
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing