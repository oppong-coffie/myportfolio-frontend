import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import zeazn from '../images/zeazn.png'
import zulupromo from '../images/zulupromr.png'
import game from '../images/game.png'
import password from '../images/password.png'
import news from '../images/news.png'
import team from '../images/team.png'

const Projects = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Animation happens only once when visible
    });
  }, []);

  return (
<div id="projects">
  <section className="py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
    <h2
      className="text-4xl font-bold text-center mb-12"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      🚀 Projects
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "Zeazn Limited Website",
          link: "https://zeazn.com",
          mainlink: "https://zeazn.com",
          image: zeazn,
        },
        {
          name: "ZuluDesk Business Website",
          link: "https://zulupromo.vercel.app",
          mainlink: "https://zuludesks.com",
          image: zulupromo,
        },
        {
          name: "Password Generator",
          link: "https://password-generator-oppongcoffies-projects.vercel.app",
          mainlink: "https://password-generator-oppongcoffies-projects.vercel.app",
          image: password,
        },
   
        {
          name: "TeamAlfy Company Website",
          link: "https://team-alfy.vercel.app/",
          mainlink: "https://teamalfy.com",
          image: team,
        },
        {
          name: "Tuaneka Ai",
          link: "https://tuaneka-v1.vercel.app",
          mainlink: "https://tuaneka-ai-vitereact.vercel.app",
          image: team,
        },
        {
          name: "Ai WhatApp Chatbot",
          link: "https://fake-whatsapp-chat-virid.vercel.app",
          mainlink: "https://wa.me/233595394667?text=hi%20Adwoa%2C%20tell%20me%20what%20you%20can%20do",
          image: team,
        },
        {
          name: "Time Tracking Dashboard",
          link: "https://time-tracking-dashboard-ts-sigma.vercel.app",
          mainlink: "https://time-tracking-dashboard-ts-sigma.vercel.app",
          image: team,
        },
        {
          name: "IPA Website",
          link: "https://ipagh.org",
          mainlink: "https://ipagh.org",
          image: team,
        },
      ].map(({ name, link, image, mainlink }, idx) => (
        <div
          key={idx}
          className="bg-gray-900 p-2 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay={idx * 200}
          data-aos-duration="1200"
        >
          <div className="relative overflow-hidden rounded-xl border border-gray-700 shadow-inner h-[215px]">
            <div className="transform scale-[0.5] origin-top-left w-[200%] h-[430px]">
              <iframe
                src={link}
                title={name}
                loading="lazy"
                className="w-full h-full border-none"
              />
            </div>
          </div>

          <div className="mt-4 text-center space-y-2">
            <h3 className="text-xl font-bold tracking-wide">{name}</h3>
            <a
              href={mainlink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 underline transition"
            >
              🌐 Visit Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h6m0 0v6m0-6L10 20"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>

  );
};

export default Projects;
