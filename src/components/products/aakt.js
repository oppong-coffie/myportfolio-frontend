import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Code, Cpu, ShieldCheck, Laptop, Building2, Layers } from 'lucide-react';

const aakt = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    "Advanced technical consultancy",
    "Tailored software solutions",
    "Expert training and workshop portal",
    "Industry-leading R&D insights"
  ];

  const techStack = [
    { name: "Framework", value: "React Dashboard", icon: <Code size={18} /> },
    { name: "Infrastructure", value: "Cloud-Native", icon: <Layers size={18} /> },
    { name: "Security", value: "Standardized", icon: <ShieldCheck size={18} /> },
    { name: "UI/UX", value: "Figma Derived", icon: <Cpu size={18} /> }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-base font-black tracking-[0.2em] text-gray-900 flex items-center gap-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AAKT <span className="text-primary">Consult</span>
            </h1>
            <div className="h-0.5 w-8 bg-primary/20 rounded-full mt-0.5" />
          </div>
        </div>
      </header>

      <main className="py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 mb-20 bg-gray-50 aspect-video group"
          >
            <div className="w-full h-full flex items-center justify-center bg-teal-900">
               <Laptop size={80} className="text-white animate-pulse" />
               <span className="ml-4 text-2xl font-black text-white tracking-widest uppercase">AAKT Preview Coming Soon</span>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            <motion.div variants={itemVariants} className="max-w-3xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
                  <Building2 size={16} className="text-primary" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-primary/70">
                    Category
                  </span>
                  <span className="text-sm font-bold text-primary tracking-wide">
                    Tech Consultancy
                  </span>
                </div>
              </div>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                AAKT is a premier technical consultancy portal providing expert-driven software solutions and tailored training for industry leaders.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div variants={itemVariants} className="space-y-8">
                <h3 className="text-2xl font-black flex items-center gap-3 tracking-tight">
                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <ShieldCheck className="text-primary" size={24} />
                  </div>
                  Key Features
                </h3>
                <ul className="space-y-5">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-600 group">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <CheckCircle className="text-green-500" size={14} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-8">
                <h3 className="text-2xl font-black flex items-center gap-3 tracking-tight">
                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <Code className="text-primary" size={24} />
                  </div>
                  Technical Stack
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {techStack.map((tech, i) => (
                    <div key={i} className="p-5 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white transition-all group shadow-sm hover:shadow-md">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform shadow-sm">
                        {tech.icon}
                      </div>
                      <div className="text-[10px] text-gray-400 uppercase font-black tracking-[0.15em] mb-1">{tech.name}</div>
                      <div className="font-bold text-gray-900">{tech.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-10 flex flex-col sm:flex-row gap-5">
              <motion.a 
                href="#" 
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 0 12px rgba(34, 197, 94, 0.15)",
                    "0 0 0 0px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-gray-900 text-white rounded-[2rem] font-bold transition-all hover:bg-green-600 group"
              >
                <div className="relative flex h-3 w-3 mr-3">
                  <motion.span 
                    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                  />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                </div>
                Contact AAkt 
                <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default aakt;
