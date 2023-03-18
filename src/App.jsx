import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Navbar from './components/navmenu/Navbar'
import Home from './components/home/Home'
import Work from './components/work/Work'
import Education from './components/education/Education'
//import Aboutme from './components/aboutme/Aboutme'

const App = () => {
  return (
    <>
      {/* <Nav /> */}
      <Navbar />
      <Home />
      {/* <Header /> */}
      <About />
      <Experience />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App