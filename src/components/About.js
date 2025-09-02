import React, { useEffect } from 'react';
import profile2 from '../images/hero4.jpg';
import eli2 from '../images/eli2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"

const About = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="about" className="bg-indigo-950 text-white px-6 md:px-20 py-16">
    {/* Heading */}
    <div className="text-center mb-12" data-aos="fade-down">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-blue-400">
        👨‍💻 About Me
      </h1>

      {/* Fake VS Code Editor */}
      <div className="max-w-3xl mx-auto rounded-xl shadow-xl overflow-hidden border border-gray-700">
        {/* Header Bar */}
        <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2">
          {/* Traffic Light Buttons */}
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          {/* File Name */}
          <p className="text-gray-300 text-sm font-mono">AboutMe.js</p>
          <div className="w-12"></div> {/* Spacer */}
        </div>

        {/* Code Area */}
        <div className="bg-[#1e1e1e] p-6 font-mono text-sm overflow-x-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-js">
{`// Hi, I'm Emma 👋
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

export default AboutMe;`}
            </code>
          </pre>
        </div>
      </div>
    </div>

    {/* Profile Images */}
    <div
      className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      <img
        src={eli2}
        alt="Illustration"
        className="w-60 h-60 hover:scale-105 transition-transform duration-500 hidden md:block"
      />
      <img
        src={profile2 || "https://via.placeholder.com/150"}
        alt="Profile"
        className="w-60 h-60 rounded-full shadow-lg border-4 border-white hover:scale-105 transition-transform duration-500"
      />
      <img
        src={eli2}
        alt="Illustration"
        className="hidden md:block w-60 h-60 hover:scale-105 transition-transform duration-500"
      />
    </div>
  </section>
  
  );
};

export default About;
