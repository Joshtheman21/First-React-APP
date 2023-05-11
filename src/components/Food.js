import React from 'react'
import './FoodStyles.css'

import {Link} from 'react-router-dom'

import feast from '../assets/Feast.jpg'
import breakfast from '../assets/Breakfast.jpg'

const Food = () => {
  return (
    <div className='Food'>
        <div className='left'>
            <h1>Food</h1>
            <p> Resorts often offer a wide variety of food options, ranging from local cuisine to international favorites. This means that guests can try different types of food and satisfy different cravings without having to leave the resort.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={feast} className='img' alt=''/>
                </div>
                <div className='image-stack bottom'>
                    <img src={breakfast} className='img' alt=''/>
                  </div>
            </div>
          </div>
    </div>
  )
}

export default Food