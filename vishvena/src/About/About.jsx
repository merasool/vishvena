import React from 'react'
import Head from '../Heading/Head'
import Navbar from '../Nav/Navbar'
import law from '../assets/Law.jpg'
import './About.modular.css'
import Services from '../Services/Services'
import News from '../News/News'
import Sider from '../Sider/Sider'
import Contact from'../Contact/Contact'

export default function About() {
  return (
    <>
      <Head />
      <Navbar />
      <div className="about-banner-container">
        <img src={law} alt="About Us" className="about-banner-img" />
        <div className="about-banner-overlay">
          <h1 className="about-banner-title">About Us</h1>
          <p className="about-banner-desc">
            Your One-Stop Destination for Comprehensive IP Solutions
          </p>
          <button className="about-banner-btn">LEARN MORE</button>
        </div>
      </div>
      <Services/>
      <News/>
      <Contact/>
    </>
  )
}