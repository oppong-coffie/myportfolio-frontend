import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profile2 from '../images/hero4.jpg';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const TypewriterCode = ({ code, language }) => {
  const [displayedCode, setDisplayedCode] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedCode(code.substring(0, i));
      i++;
      if (i > code.length) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [code]);

  useEffect(() => {
    Prism.highlightAll();
  }, [displayedCode]);

  return (
    <pre className="whitespace-pre-wrap h-[300px] overflow-y-auto custom-scrollbar">
      <code className={`language-${language}`}>
        {displayedCode}
      </code>
    </pre>
  );
};

const About = () => {
  const codeString = `// Hi, I'm Emma 👋
function AboutMe() {
  const role = "Frontend Developer & AI Bot Builder";
  const skills = ["React", "Next.js", "React Native 📱"];
  const bots = ["BotPress", "Gupshup", "WhatsApp 💬"];

  return (
    <>
      <h2>{role}</h2>
      <p>
        Passionate about building smart, user-friendly digital products 🚀.
        Specialize in responsive web & mobile apps with {skills.join(", ")}.
      </p>
      <p>
        I also bring conversations to life with {bots.join(", ")}.
        From booking systems to 24/7 automated support, 
        I help businesses go digital with ease.
      </p>
    </>
  );
}

export default AboutMe;`;

  return (
    <section id="about" className="bg-dark text-white px-6 md:px-20 py-20 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About Me
          </span>
        </h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Fake VS Code Editor */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-white/10 bg-[#1e1e1e]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-3 border-b border-white/5">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <p className="text-gray-400 text-sm font-mono">AboutMe.js</p>
            <div className="w-12"></div>
          </div>

          {/* Code Area */}
          <div className="p-6 font-mono text-sm">
            <TypewriterCode code={codeString} language="js" />
          </div>
        </motion.div>

        {/* Profile Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={profile2 || "https://via.placeholder.com/150"}
              alt="Profile"
              className="relative w-64 h-64 rounded-full object-cover border-4 border-dark shadow-2xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
