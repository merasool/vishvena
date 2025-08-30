import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Head from './Heading/Head'
import Navbar from './Nav/Navbar'
import Banner from './Banner/Banner'
import Info from './Info/Info'
import Cards from './Cards/Cards'
import Sider from './Sider/Sider'
import Features from './Features/Features'
import Contacts from './Contact/Contact'
import Services from './Services/Services'
import Common from './Common/Common'
import About from './About/About'
import Division from './Division/Division'

// ✅ Layout with common parts (Head + Navbar always visible)
function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      {children}
    </>
  )
}

// ✅ Home page content
function Home() {
  return (
    <>
      <Banner />
      <Info />
      <Features />
      <Cards />
      <Services />
      <Sider />
      <Contacts />
    </>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/common" element={<Common />} />
          <Route path="/about" element={<About />} />
           <Route path="/Division" element={<Division />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
