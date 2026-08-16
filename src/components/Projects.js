import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import zeazn from '../images/zeazn.png';
import zulupromo from '../images/zulupromr.png';
import game from '../images/game.png';

export const projects = [
  {
    name: "Zeazn Limited Website",
    slug: "zeazn",
    link: "https://zeazn.com",
    mainlink: "https://zeazn.com",
    image: zeazn,
    tags: ["React", "Tailwind"],
    description: "A comprehensive business website for Zeazn Limited, featuring a modern design and responsive layout.",
  },
  {
    name: "Memory Game",
    slug: "memory-game",
    link: "https://game-mocha-zeta-14.vercel.app",
    image: game, 
    tags: ["React", "Framer Motion", "TailwindCSS"],
    description: "An interactive memory card matching game with smooth animations and score tracking.",
  },
  {
    name: "TeamAlfy Company Website",
    slug: "teamalfy",
    link: "https://team-alfy.vercel.app/",
    image: zulupromo,
    tags: ["React", "TailwindCSS"],
    description: "Official company website for TeamAlfy, showcasing their services and design portfolio.",
  },
  // {
  //   name: "IPA Website",
  //   slug: "ipa",
  //   link: "https://ipagh.org",
  //   image: ipa,
  //   tags: ["Next.js", "TailwindCSS"],
  //   description: "Web portal for IPAGH NGO, facilitating community engagement and information dissemination.",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projects
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of my recent work, ranging from web applications to AI-powered chatbots.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
          >
            <a
              href={project.mainlink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-[250px] overflow-hidden bg-slate-900 flex items-center justify-center p-2"
            >
              {/* Image Preview with Overlay */}
              <img
                src={project.image}
                alt={project.name}
                className="max-h-full max-w-full w-auto h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />
            </a>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.mainlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline transition-all"
                >
                  View Details
                </a>
                <a
                  href={project.mainlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                >
                  Visit Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/all-projects"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          View All Projects <ExternalLink size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
