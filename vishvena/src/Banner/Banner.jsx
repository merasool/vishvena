import React from 'react'
import banner from '../assets/aisolution.jpg'
import './Banner.modular.css'

export default function Banner() {
  return (
    <div className='banner-container'>
      <img 
        src={banner} 
        alt='AI Solutions Banner' 
        className='banner-image' 
      />
    </div>
  )
}
