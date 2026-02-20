import React, { useEffect } from 'react';
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
import ToolsSection from './Tools'
import Gallery1 from './Gallery1'
import Certs from './Certs'


const MainLayout = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    document.body.appendChild(script1);      

    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2024/12/04/12/20241204120535-6QGZ5WZN.js";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className='bg-slate-900 h-screen'>
      <Navbar />
      <MainSection />
      <About />
      <Education />
      <Skills />
      <ToolsSection />
      <Certs />
      <Projects />
      <Voluntery />
      <Gallery1 />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
};

export default MainLayout;
