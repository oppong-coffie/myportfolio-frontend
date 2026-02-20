import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Ipa from './products/Ipa';
import Zeazn from './products/Zeazn';
import ZuluDesk from './products/ZuluDesk';
import TeamAlfy from './products/TeamAlfy';
import Tuaneka from './products/Tuaneka';
import WhatsAppBot from './products/WhatsAppBot';
import PasswordGenerator from './products/PasswordGenerator';
import TimeTracker from './products/TimeTracker';
import GuduGames from './products/GuduGames';
import Students from './products/Students';
import RozeyMobile from './products/RozeyMobile';
import Stallion from './products/Stallion';
import Fashion from './products/Fashion';
import Contributed from './products/Contributed';

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
   {/* Navigation Header */}
<nav className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/10">
  <div className="px-6 py-4">
    <div className="flex items-center justify-between">
      
      {/* Left */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 transition-colors font-medium"
      >
        <ArrowLeft size={18} />
        <span className="text-sm tracking-wide">Back to Home</span>
      </Link>

      {/* Center */}
      <h1 className="text-xl font-extrabold bg-gradient-to-r from-primary-300 via-primary-200 to-secondary-300 bg-clip-text text-transparent">
        All Projects
      </h1>

      {/* Right - Ongoing Badge */}
<Link to="/ongoing-projects">
  <motion.div
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="group relative flex items-center gap-2 px-4 py-1.5 
               bg-amber-500/10 border border-amber-500/30
               rounded-full shadow-sm transition-all duration-300 cursor-pointer"
  >
    {/* Glow Background */}
    <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-md opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300" />
  
    {/* Live Pulse Dot */}
    <div className="relative flex h-2 w-2">
      <motion.span
        animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        className="absolute inline-flex h-full w-full rounded-full bg-amber-400"
      />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 
                       shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
    </div>
  
    <span className="relative text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-300">
      Ongoing Products
    </span>
  </motion.div>
</Link>

    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            My <span className="text-primary-400">Creative</span> Journey
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A deep dive into the projects I've built, ranging from web applications to AI-powered chatbots.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="">
       <Ipa />
       <Zeazn />
       <ZuluDesk />
       <TeamAlfy />
       <Tuaneka />
       <WhatsAppBot />
       <PasswordGenerator />
       <TimeTracker />
       <GuduGames />
       <Students />
       <izone />
       <prume />
       <aakt />
       <RozeyMobile />
       <Stallion />
       <sms />
       <Fashion />
       <Contributed />
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 bg-slate-800/50 border-t border-white/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to build something amazing?</h2>
          <Link
            to="/#contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-black text-xl hover:scale-105 transition-transform"
          >
            Describe your idea and i will bring it to life <Home className="ml-3" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
