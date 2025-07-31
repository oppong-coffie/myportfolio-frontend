import React, { useMemo, useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import html from '../images/html.png';
import js from '../images/js.png';
import react from '../images/react.png';
import Bootstrap from '../images/Bootstrap.png';
import css from '../images/rn.png';
import Tailwind from '../images/Tailwind.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.jpg';
import sql from '../images/sql.jpg';
import php from '../images/php.png';
import laravel from '../images/Laravel.svg.png';

const skills = [
  {
    title: "🎨 Frontend Development",
    description: "I build stunning and responsive interfaces using Tailwind CSS, ReactJS.",
  },
  {
    title: "📱 Mobile App Development",
    description: "I create cross-platform mobile apps using React Native and Expo for smooth user experiences.",
  },
  {
    title: "🤖 AI Automation",
    description: "I automate workflows using OpenAI, BotPress, and APIs to boost productivity and user interaction.",
  },
  {
    title: "🧠 Problem-Solving",
    description: "I deliver smart solutions to complex challenges with clean, scalable code.",
  },
  {
    title: "🤝 Team Collaboration",
    description: "I work effectively with teams using Git, Agile, and clear communication to meet goals.",
  },
  {
    title: "📚 Continuous Learning",
    description: "I stay current with web trends and technologies to build innovative, future-ready products.",
  },
];
const Skills = () => {
  

  
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
  const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div id='skills' className="bg-slate-800">
         {/* Skills/Experience Section */}
         <section className="container mx-auto px-6 md:px-20 py-10">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 My Skills & Expertise
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
              transition: { type: "spring ", stiffness: 300 },
            }}
            variants={itemVariants}
            className="bg-white shadow hover:shadow-md transition duration-300 rounded-xl p-6 border border-gray-100 group"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2 group-hover:text-blue-900 transition-colors">
              {skill.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>

      {/* Skills Section */}
      <section className="py-12 px-6 bg-white">
        <h2
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          data-aos="fade-down"
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          {[{
            title: "HTML",
            content: "Structure of websites.",
            icon: html,
            tooltip: "Hypertext Markup Language (HTML)"
          },
          {
            title: "JavaScript",
            content: "Dynamic and interactive websites.",
            icon: js,
            tooltip: "JavaScript (JS)"
          },
          {
            title: "React",
            content: "Building UI components.",
            icon: react,
            tooltip: "React.js"
          },
          {
            title: "PHP",
            content: "dynamic web pages by interacting with databases.",
            icon: php,
            tooltip: "PHP"
          },
          {
            title: "Laravel",
            content: "a popular PHP framework.",
            icon: laravel,
            tooltip: "Laravel blade"
          },
          {
            title: "React Native",
            content: "Styling and building mobile apps.",
            icon: css,
            tooltip: "React Native framework for mobile development"
          },          
          {
            title: "Tailwind CSS",
            content: "Utility-first CSS framework.",
            icon: Tailwind,
            tooltip: "Tailwind CSS"
          },
          {
            title: "Bootstrap",
            content: "Responsive design framework.",
            icon: Bootstrap,
            tooltip: "Bootstrap"
          },
          {
            title: "Node.js",
            content: "JavaScript runtime for server-side.",
            icon: node,
            tooltip: "Node.js"
          },
          {
            title: "Express.js",
            content: "Backend framework for Node.js.",
            icon: express,
            tooltip: "Express.js"
          },
          {
            title: "MongoDB",
            content: "NoSQL Database.",
            icon: mongodb,
            tooltip: "MongoDB"
          },
          {
            title: "SQL",
            content: "Structured query language for relational databases.",
            icon: sql,
            tooltip: "SQL Databases"
          }].map(({ title, content, icon, tooltip }, idx) => (
            <div
            key={idx}
            className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 200}
          >
            <Tooltip title={tooltip} arrowPointAtCenter>
              <div className="flex-shrink-0">
                <img
                  src={icon}
                  alt={title}
                  className="w-20 h-20 rounded-full border-4 border-blue-200 shadow-md hover:rotate-3 transition-transform duration-300"
                />
              </div>
            </Tooltip>
          
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-gray-800 tracking-wide">{title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{content}</p>
            </div>
          </div>
          
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
