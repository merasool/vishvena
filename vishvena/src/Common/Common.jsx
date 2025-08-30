import React, { useState } from 'react'
import Head from '../Heading/Head'
import Navbar from '../Nav/Navbar'
import law from '../assets/Law.jpg'
import ai from '../assets/ai.jpg'
import dream from '../assets/dream.png'
import media from '../assets/media.jpg'
import { AiOutlineCamera, AiOutlineRobot } from 'react-icons/ai'
import { MdDevicesOther, MdAgriculture, MdHealthAndSafety } from 'react-icons/md'
import { FaRoad, FaLightbulb, FaComments, FaVideo } from 'react-icons/fa'
import './Common.modular.css'
import Slide from '../Common/Slide'
import News from '../News/News'
import Contact from '../Contact/Contact'

// ✅ Banner cards with links
const cards = [
  {
    img: law,
    title: "Patent Driven Innovations",
    description: "Your One-Stop Destination for Comprehensive IP Solutions",
    button: "LEARN MORE",
    link: "https://www.vishvena.com/patents-ip-realization"
  },
  {
    img: ai,
    title: "AI Division",
    description: "Discover our AI innovations and solutions.",
    button: "Explore AI",
    link: "https://www.vishvena.com/artificial-intelligence"
  },
  {
    img: dream,
    title: "Dream Projects",
    description: "See our visionary projects and ideas.",
    button: "View Projects",
    link: "https://www.vishvena.com/dreamtalk"
  },
  {
    img: media,
    title: "Media Division",
    description: "Check out our media and communications work.",
    button: "See Media",
    link: "https://www.vishvena.com/mediacraft"
  }
];

// ✅ Domain cards with links
const domainCards = [
  {
    icon: <AiOutlineCamera size={56} color="#1976d2" />,
    title: "AI Cameras",
    desc: "To know more about how we use AI Cameras...",
    link: "https://www.vishvena.com/ai-cameras"
  },
  {
    icon: <MdDevicesOther size={56} color="#1976d2" />,
    title: "Internet of Things",
    desc: "To know more about how we use Internet of Things...",
    link: "https://www.vishvena.com/internet-of-things"
  },
  {
    icon: <AiOutlineRobot size={56} color="#1976d2" />,
    title: "Artificial Intelligence",
    desc: "To know more about how we use Artificial Intelligence...",
    link: "https://www.vishvena.com/artificial-intelligence"
  },
  {
    icon: <FaRoad size={56} color="#1976d2" />,
    title: "Smart Roads",
    desc: "To know more about how we work on Smart Roads...",
    link: "https://www.vishvena.com/smart-roads"
  },
  {
    icon: <MdAgriculture size={56} color="#1976d2" />,
    title: "Agriculture",
    desc: "To know more about how we work on Agriculture Sectors...",
    link: "https://www.vishvena.com/agriculture"
  },
  {
    icon: <MdHealthAndSafety size={56} color="#1976d2" />,
    title: "Health",
    desc: "To know more about how we work on Health Sectors...",
    link: "https://www.vishvena.com/health"
  },
  {
    icon: <FaLightbulb size={56} color="#1976d2" />,
    title: "Patents-IP-Realization",
    desc: "To know more about how we provide services on Intellectual Property...",
    link: "https://www.vishvena.com/patents-ip-realization"
  },
  {
    icon: <FaComments size={56} color="#1976d2" />,
    title: "DreamTalk",
    desc: "To know more about DreamTalk services...",
    link: "https://www.vishvena.com/dreamtalk"
  },
  {
    icon: <FaVideo size={56} color="#1976d2" />,
    title: "MediaCraft",
    desc: "To know more about our MediaCraft services...",
    link: "https://www.vishvena.com/mediacraft"
  }
];

export default function Common() {
  const [current, setCurrent] = useState(0);

  const prevCard = () => setCurrent((current - 1 + cards.length) % cards.length);
  const nextCard = () => setCurrent((current + 1) % cards.length);

  const card = cards[current];

  return (
    <>
      <Head />
      <Navbar />
      <div className="common-banner-container">
        <img src={card.img} alt={card.title} className="common-banner-img" />
        <div className="common-banner-overlay">
          <h1 className="common-banner-title">{card.title}</h1>
          <p className="common-banner-desc">{card.description}</p>
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="common-banner-btn">{card.button}</button>
          </a>
        </div>
        <button className="arrow-btn left" onClick={prevCard}>&#8592;</button>
        <button className="arrow-btn right" onClick={nextCard}>&#8594;</button>
      </div>

      <div className="domain-section">
        <h2 className="domain-title">Our Domains & Areas</h2>
        <p className="domain-desc">
          We encourage you to Think Big too! Our end-to-end services, domains, and areas expertise in cutting edge tech and ability to build whatever you dream up, makes us your ideal partner. Explore our Domains & Areas.
        </p>
        <div className="domain-cards-grid">
          {domainCards.map((card, idx) => (
            <div className="domain-card" key={idx}>
              <div className="domain-card-icon">{card.icon}</div>
              <h3 className="domain-card-title">{card.title}</h3>
              <p className="domain-card-desc">{card.desc}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="domain-card-link"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Extra sections */}
      <Slide />
      <News />
      <Contact />
    </>
  )
}
