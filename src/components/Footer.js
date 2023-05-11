import React from 'react'
import './FooterStyle.css'
import {FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
               <div className='location'>
                    <FaSearchLocation size ={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>15255 Marvel Street,</p>
                        <h4>Chicago, IL</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size ={20} style={{color: '#ffffff', marginRight: '1rem'}} />1-708-123-4567</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size ={20} style={{color: '#ffffff', marginRight: '1rem'}} />joshuaharris_23@yahoo.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>Why a Resort?</h4>
                <p>Staying at a resort can provide a relaxing, convenient, and luxurious vacation experience with a wide range of amenities and services available on-site. It's important to choose a resort that aligns with your travel goals and preferences to ensure you have an enjoyable and memorable stay.</p>
            
                <div className='social'>
                    <FaLinkedin size ={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaGithub size ={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaInstagram size ={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer