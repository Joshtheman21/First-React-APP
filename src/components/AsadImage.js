import React, { Component } from 'react'
import './AsadStyles.css'

export class AsadImage extends Component {
  render() {
    return (
        <div className='asad-img'>
            <div className='heading'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
        
        
    )
  }
}

export default AsadImage