import React from 'react'
import Navbar from './Navbar'
import MainSection from './MainSection'
import About from './About'
import Contact from './Contact'
import Voluntery from './Voluntery'
import Footer from './Footer'
import Skills from './Skills'
import Education from './Education'
import Projects from './Projects'
import Faq from './Faq'
import Testimonials from './Testimonials'
import ToolsSection from './Tools'
import Gallery from './Gallery'

const MainLayout = () => {
  return (
    <div className='bg-slate-900 h-screen'>
        < Navbar />
        < MainSection />
        <About />
        <Education />
        < Skills />
        <ToolsSection />
        <Projects />
        <Voluntery />
        <Gallery />
        <Contact />
        <Faq />
        {/* <Testimonials /> */}
        <Footer />
    </div>
  )
}

export default MainLayout