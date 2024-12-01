import React, { useMemo, useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';

import html from '../images/html.png';
import js from '../images/js.png';
import react from '../images/react.png';
import Bootstrap from '../images/Bootstrap.png';
import css from '../images/css.png';
import Tailwind from '../images/Tailwind.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.jpg';
import sql from '../images/sql.jpg';
import php from '../images/php.png';
import laravel from '../images/Laravel.svg.png';

const Skills = () => {
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
         <section
        className="container mx-auto px-6 md:px-20 py-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
          My Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Creative Frontend Design</h3>
            <p className="text-gray-700">
              I craft visually stunning and responsive websites using tools like Tailwind CSS,
              React, and Vue.js.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Problem-Solving</h3>
            <p className="text-gray-700">
              I develop efficient solutions for complex problems with logical thinking and
              innovative design patterns.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Team Collaboration</h3>
            <p className="text-gray-700">
              Experienced in working with cross-functional teams, ensuring seamless project
              execution.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Continuous Learning</h3>
            <p className="text-gray-700">
              Always staying updated with the latest web technologies to deliver cutting-edge
              solutions.
            </p>
          </div>
        </div>
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
            title: "CSS",
            content: "Styling of web pages.",
            icon: css,
            tooltip: "Cascading Style Sheets (CSS)"
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
              className="p-6 bg-gray-100 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <Tooltip title={tooltip} arrowPointAtCenter>
                <div className="text-5xl mb-4">{<img src={icon} alt={title} className="w-16 h-16 rounded-full"/>}</div>
              </Tooltip>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-600 mt-2">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
