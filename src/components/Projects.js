import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import zeazn from '../images/zeazn.png';
import zulupromo from '../images/zulupromr.png';
import game from '../images/game.png';
import password from '../images/password.png';
import news from '../images/news.png';
import team from '../images/team.png';

const Projects = () => {
  const projects = [
    {
      name: "Zeazn Limited Website",
      link: "https://zeazn.com",
      mainlink: "https://zeazn.com",
      image: zeazn,
      tags: ["React", "Tailwind", "Business"],
    },
    {
      name: "ZuluDesk Business Website",
      link: "https://zulupromo.vercel.app",
      mainlink: "https://zuludesks.com",
      image: zulupromo,
      tags: ["Next.js", "E-commerce"],
    },
    {
      name: "Password Generator",
      link: "https://password-generator-oppongcoffies-projects.vercel.app",
      mainlink: "https://password-generator-oppongcoffies-projects.vercel.app",
      image: password,
      tags: ["Utility", "React"],
    },
    {
      name: "TeamAlfy Company Website",
      link: "https://team-alfy.vercel.app/",
      mainlink: "https://teamalfy.com",
      image: team,
      tags: ["Corporate", "Design"],
    },
    {
      name: "Tuaneka Ai",
      link: "https://tuaneka-v1.vercel.app",
      mainlink: "https://tuaneka-ai-vitereact.vercel.app",
      image: team,
      tags: ["AI", "Chatbot"],
    },
    {
      name: "Ai WhatApp Chatbot",
      link: "https://fake-whatsapp-chat-virid.vercel.app",
      mainlink: "https://wa.me/233595394667?text=hi%20Adwoa%2C%20tell%20me%20what%20you%20can%20do",
      image: team,
      tags: ["WhatsApp", "Bot"],
    },
    {
      name: "Time Tracking Dashboard",
      link: "https://time-tracking-dashboard-ts-sigma.vercel.app",
      mainlink: "https://time-tracking-dashboard-ts-sigma.vercel.app",
      image: team,
      tags: ["Dashboard", "TypeScript"],
    },
    {
      name: "IPA Website",
      link: "https://ipagh.org",
      mainlink: "https://ipagh.org",
      image: team,
      tags: ["NGO", "Website"],
    },
  ];

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
            Featured Projects
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
            <div className="relative h-[250px] overflow-hidden bg-gray-100">
              {/* Iframe Preview with Overlay */}
              <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-500">
                <iframe
                  src={project.link}
                  title={project.name}
                  loading="lazy"
                  className="w-[200%] h-[200%] transform scale-50 origin-top-left border-none pointer-events-none"
                  tabIndex="-1"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

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

              <a
                href={project.mainlink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors mt-4"
              >
                Visit Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
