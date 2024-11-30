import React from 'react'

const Navbar = () => {
  return (
<div className="flex flex-col md:flex-row justify-between items-center text-white px-6 py-4 bg-gradient-to-r from-indigo-950 to-slate-900 shadow-lg">
  <div id='home' className="font-extrabold text-2xl tracking-widest mb-4 md:mb-0">
    Oppong
  </div>
  <div className="space-x-0 md:space-x-8 text-lg flex flex-col md:flex-row items-center">
    <a href="#home" className="hover:text-yellow-300 transition duration-300 ease-in-out mb-2 md:mb-0">Home</a>
    <a href="#about" className="hover:text-yellow-300 transition duration-300 ease-in-out mb-2 md:mb-0">About</a>
    <a href="#skills" className="hover:text-yellow-300 transition duration-300 ease-in-out">Skills</a>
    <a href="#tools" className="hover:text-yellow-300 transition duration-300 ease-in-out">Tools</a>
    <a href="#projects" className="hover:text-yellow-300 transition duration-300 ease-in-out">Projects</a>
    <a href="#voluntary" className="hover:text-yellow-300 transition duration-300 ease-in-out">Voluntary</a>
    <a href="#gallery" className="hover:text-yellow-300 transition duration-300 ease-in-out">Gallery</a>
    <a href="#faq" className="hover:text-yellow-300 transition duration-300 ease-in-out">FAG</a>
    <a href="#contact" className="hover:text-yellow-300 transition duration-300 ease-in-out">Contact</a>
  </div>
</div>

  )
}

export default Navbar