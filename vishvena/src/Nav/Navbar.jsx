import React from 'react'
import './Navbar.modular.css'
import mail from '../assets/e-mail.jpeg'
import facebook from '../assets/Facebook.jpeg'
import instagram from '../assets/instagram.jpeg'
import pinterest from '../assets/pintrest.jpeg'
import twitter from '../assets/twitter.jpeg'
import youtube from '../assets/youtube.jpeg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <div className='contact-info'>
          <img src={mail} alt="email" className='email-icon' />
          <a href="mailto:vishvena@gmail.com" className='email-text'>vishvena@gmail.com</a>
        </div>
      </div>
      <div className='navbar-right'>
        <div className='social-icons'>
          <a href="https://www.facebook.com/vishvena/" className='social-link' target="_blank">
            <img src={facebook} alt="Facebook" className='social-icon' />
          </a>
          <a href="https://www.instagram.com/vishvena_official/" className='social-link' target="_blank">
            <img src={instagram} alt="Instagram" className='social-icon' />
          </a>
          <a href="https://x.com/vishvenatech" className='social-link' target="_blank">
            <img src={twitter} alt="Twitter" className='social-icon' />
          </a>
          <a href="https://www.pinterest.com/vishvenatech/" className='social-link' target="_blank">
            <img src={pinterest} alt="Pinterest" className='social-icon' />
          </a>
          <a href="https://www.youtube.com/@vishvena" className='social-link' target="_blank">
            <img src={youtube} alt="youtube" className='social-icon' />
          </a>
        </div>
      </div>
    </nav>
  )
}
