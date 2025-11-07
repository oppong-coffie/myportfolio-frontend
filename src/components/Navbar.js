import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-white px-6 py-4 bg-gradient-to-r from-indigo-950 to-slate-900 shadow-lg fixed top-0 left-0 w-full z-50">
      {/* Logo and Hamburger */}
      <div className="flex justify-between items-center w-full md:w-auto">
        {/* Brand Name */}
        <div id="home" className="font-extrabold text-2xl tracking-tighter">
          Oppong
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 space-x-0 md:space-x-16 mt-4 md:mt-0 text-lg`}
      >
        {[
          { name: 'Home', to: '_home' },
          { name: 'About', to: 'about' },
          { name: 'Skills', to: 'skills' },
          { name: 'Projects', to: 'projects' },
          { name: 'Certifications', to: 'certifications' },
          { name: 'Voluntary', to: 'voluntary' },
          { name: 'Gallery', to: 'gallery' },
          { name: 'FAQ', to: 'faq' },
          { name: 'Contact', to: 'contact' },
        ].map((link) => (
          <Link
          
            to={link.to}
            smooth={true}
            duration={500}
            className="hover:text-[#9747FF] transition duration-300 ease-in-out cursor-pointer"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click 
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
