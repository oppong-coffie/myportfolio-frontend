import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import zeazn from '../images/zeazn.png';
import zulupromo from '../images/zulupromr.png';
import game from '../images/game.png';
import password from '../images/password.png';
import news from '../images/news.png';
import team from '../images/team.png';

export const projects = [
  {
    name: "Zeazn Limited Website",
    slug: "zeazn",
    link: "https://zeazn.com",
    mainlink: "https://zeazn.com",
    image: zeazn,
    tags: ["React", "Tailwind", "Business"],
    description: "A comprehensive business website for Zeazn Limited, featuring a modern design and responsive layout.",
  },
  {
    name: "ZuluDesk Business Website",
    slug: "zuludesk",
    link: "https://zulupromo.vercel.app",
    mainlink: "https://zuludesks.com",
    image: zulupromo,
    tags: ["Next.js", "E-commerce"],
    description: "An e-commerce platform built with Next.js, providing a seamless shopping experience.",
  },
  {
    name: "Password Generator",
    slug: "password-generator",
    link: "https://password-generator-oppongcoffies-projects.vercel.app",
    mainlink: "https://password-generator-oppongcoffies-projects.vercel.app",
    image: password,
    tags: ["Utility", "React"],
    description: "A secure and customizable password generation tool built with React.",
  },
  {
    name: "TeamAlfy Company Website",
    slug: "teamalfy",
    link: "https://team-alfy.vercel.app/",
    mainlink: "https://teamalfy.com",
    image: team,
    tags: ["Corporate", "Design"],
    description: "Official company website for TeamAlfy, showcasing their services and design portfolio.",
  },
  {
    name: "Ai WhatApp Chatbot",
    slug: "whatsapp-bot",
    link: "https://fake-whatsapp-chat-virid.vercel.app",
    mainlink: "https://wa.me/233595394667?text=hi%20Adwoa%2C%20tell%20me%20what%20you%20can%20do",
    image: team,
    tags: ["WhatsApp", "Bot"],
    description: "A specialized AI chatbot integrated with WhatsApp for automated communication.",
  },
  {
    name: "IPA Website",
    slug: "ipa",
    link: "https://ipagh.org",
    mainlink: "https://www.ipagh.org",
    image: team,
    tags: ["NGO", "Website"],
    description: "Web portal for IPAGH NGO, facilitating community engagement and information dissemination.",
  },
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

              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-sm font-medium text-primary hover:underline transition-all"
                >
                  View Details
                </Link>
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
