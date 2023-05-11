import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className ='btc'> 1BTC </p>
                <p>- 3 Days -</p>
                <p>- Average View -</p>
                <p>- Featured -</p>
                <p>- No Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>-Suite-</h3>
                <span className='bar'></span>
                <p className ='btc'> 1BTC </p>
                <p>- 5 Days -</p>
                <p>- Balcony View -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>-Executive-</h3>
                <span className='bar'></span>
                <p className ='btc'> 1BTC </p>
                <p>- 7 Days -</p>
                <p>- All-Around Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>
    </div>
  )   
}


export default Pricing