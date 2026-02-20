import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Code, Cpu, ShieldCheck, Zap, Layers, Globe, Gamepad2, Ship, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Security from './ongoing/Security';

const OngoingProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/all-projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium text-sm group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          
          <div className="flex flex-col items-center">
            <h1 className="text-base font-black tracking-[0.2em] uppercase bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              Ongoing <span className="text-white">Projects</span>
            </h1>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-1" />
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">Live</span>
          </div>
        </div>
      </nav>

      <main className="">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-40"
        >
        

          {/* Section 1: iZone Cloud */}
          <Security />
          
        </motion.div>
      </main>

      {/* Lab Footer */}
      <footer className="py-32 px-6 border-t border-white/5 text-center bg-slate-950">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-500">
             <Layers size={32} />
          </div>
          <h3 className="text-4xl font-black tracking-tight">Evolving the Future</h3>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            These projects represent the frontline of my current research and development. 
            Check back often as I move these from laboratory to live production.
          </p>
          <div className="h-px w-24 bg-amber-500/30 mx-auto" />
        </div>
      </footer>
    </div>
  );
};

export default OngoingProjects;
