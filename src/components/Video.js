import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyle.css'

import ResortVid from '../assets/ResortVideo.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={ResortVid} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>JH Resorts</h1>
        <p>Why Choose a Resort? by your favorite traveler Joshua Harris</p>
    <div>
        <Link to='/food' className='btn'>Food</Link>
        <Link to='/contact' className='btn btn-light'>Launch</Link>
    </div>
    </div>
    </div> 
  )
}

export default Video