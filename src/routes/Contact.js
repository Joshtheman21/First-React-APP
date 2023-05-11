import React from 'react'
import AsadImage from '../components/AsadImage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <AsadImage heading='Contact' text='Contact JH TRAVEL'/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact