import React from 'react'
import { Link } from 'react-router-dom'
import './Head.modular.css'
import logo from '../assets/vishvena-logo.png'

export default function Head() {
  return (
    <div className='head-container'>
      <div className='nav-left'>
        <div className='tags'>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/Division" className='nav-link'>Our Divisions</Link>
          <Link to="/common" className='nav-link'>Expertise Areas</Link>
          <Link to="/about" className='nav-link'>About Us</Link>
          <Link to="/common" className='nav-link'>Blog</Link>
          <Link to="/common" className='nav-link'>Contact Us</Link>
        </div>
      </div>
      <div className='logo-container'>
        <Link to="/common">
          <img src={logo} alt='vishvena' className='logo' />
        </Link>
      </div>
    </div>
  )
}
