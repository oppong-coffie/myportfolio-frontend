import React from 'react';
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";
import react from '../images/react.png';
import css from '../images/rn.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.jpg';
import sql from '../images/sql.jpg';
import php from '../images/php.png';
import nextjs from '../images/nextjs.jpg';
import laravel from '../images/laravel.jpg';

const skillsData = [
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
    title: "🤝 Team Leadership",
    description: "I excel at leading and motivating teams, ensuring collaboration through Git, monday.com, and clear communication.",
  },
  {
    title: "📚 Continuous Learning",
    description: "I stay current with web trends and technologies to build innovative, future-ready products.",
  },
];

const techStack = [
  // { title: "HTML", content: "Structure of websites.", icon: html, tooltip: "Hypertext Markup Language" },
  // { title: "JavaScript", content: "Dynamic and interactive websites.", icon: js, tooltip: "JavaScript (JS)" },
  { title: "React", content: "Building UI components.", icon: react, tooltip: "React.js" },
  { title: "Next", content: "framework for javascript.", icon: nextjs, tooltip: "Next.js" },
  { title: "React Native", content: "Building mobile apps.", icon: css, tooltip: "React Native" },
  { title: "PHP", content: "Dynamic web pages & databases.", icon: php, tooltip: "PHP" },
  { title: "Laravel", content: "A popular PHP framework.", icon: laravel, tooltip: "Laravel" },
  { title: "SQL", content: "Structured query language.", icon: sql, tooltip: "SQL Databases" },
  // { title: "Tailwind CSS", content: "Utility-first CSS framework.", icon: Tailwind, tooltip: "Tailwind CSS" },
  // { title: "Bootstrap", content: "Responsive design framework.", icon: Bootstrap, tooltip: "Bootstrap" },
  { title: "Node.js", content: "JavaScript runtime for server-side.", icon: node, tooltip: "Node.js" },
  { title: "Express.js", content: "Backend framework for Node.js.", icon: express, tooltip: "Express.js" },
  { title: "MongoDB", content: "NoSQL Database.", icon: mongodb, tooltip: "MongoDB" },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id='skills' className="bg-dark text-white py-20">
      {/* Expertise Section */}
      <section className="container mx-auto px-6 md:px-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              My Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining technical skills with creative problem-solving to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
            >
              <Tooltip content={tech.tooltip} placement="top" className="text-black">
                <div className="flex-shrink-0 p-2 bg-white rounded-full">
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </Tooltip>
              <div>
                <h3 className="font-bold text-white">{tech.title}</h3>
                <p className="text-xs text-gray-400">{tech.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
