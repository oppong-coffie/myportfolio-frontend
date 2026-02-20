import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, GitBranch, Share2 } from 'lucide-react';

const Contributed = () => {
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

  const contributions = [
    {
      title: "Open Source UI Library",
      role: "Core Contributor",
      description: "Contributed to specialized React components and accessibility audits.",
      tech: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "FinTech Dashboard",
      role: "Frontend Consultant",
      description: "Collaborated on real-time data visualization and security modules.",
      tech: ["Next.js", "D3.js", "Auth0"],
      link: "#"
    },
    {
      title: "Medical Record System",
      role: "UI Architect",
      description: "Developed a high-fidelity design system and component architecture.",
      tech: ["React Native", "Figma", "Redux"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-base font-black tracking-[0.2em] text-gray-900 flex items-center gap-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Project<span className="text-blue-600">Contributions</span>
            </h1>
            <div className="h-0.5 w-8 bg-blue-600/20 rounded-full mt-0.5" />
          </div>
        </div>
      </header>

      <main className="py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Section Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <Users size={16} className="text-blue-500" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-blue-500 font-bold">Collaborative Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Projects I've <span className="text-blue-600">Built With Others</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              A curated selection of collaborative works where I've contributed as a developer, architect, or consultant.
            </p>
          </motion.div>

          {/* Contributions List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {contributions.map((project, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="group relative p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-blue-500/20 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden"
              >
                {/* Decorative Background Icon */}
                <div className="absolute -right-8 -bottom-8 text-gray-200 group-hover:text-blue-50 transition-colors duration-500">
                  <GitBranch size={160} />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                        <Share2 size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black tracking-tight">{project.title}</h3>
                        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{project.role}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 leading-relaxed font-medium">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover:border-blue-100 group-hover:text-blue-400 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.a 
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center p-4 bg-gray-900 text-white rounded-2xl hover:bg-blue-600 transition-all shadow-lg group"
                  >
                    View Contribution
                    <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-10 rounded-[2.5rem] bg-slate-900 text-white text-center overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/1) blur-[100px] rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">Want to collaborate?</h3>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                I'm always looking for interesting projects to contribute to. Let's build something exceptional together.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-500/30 hover:bg-blue-400 transition-colors"
              >
                Inquire for Collaboration
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contributed;
