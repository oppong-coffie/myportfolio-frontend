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
    <div id='projects'>
      {/* Projects Section */}
      <section className="py-12 px-6 bg-gray-900 text-white">
        <h2
          className="text-3xl font-bold text-center mb-8"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Zeazn",
              link: "https://zeaznai.vercel.app",
              image: zeazn,
            },
            {
              name: "ZuluDesk Promo Page",
              link: "https://zulupromo.vercel.app",
              image: zulupromo,
            },
            {
              name: "Memory Game",
              link: "https://memory-game-oppong-coffie.vercel.app",
              image: game,
            },
            {
              name: "Password Generator",
              link: "https://password-generator-oppongcoffies-projects.vercel.app",
              image: password,
            },
            {
              name: "News Dashboard",
              link: "https://newsfeed-git-main-oppong-coffie.vercel.app",
              image: news,
            },
            {
              name: "TeamAlfy company website",
              link: "https://team-alfy.vercel.app/",
              image: team,
            },
          ].map(({ name, link, image }, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              data-aos-duration="1200"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-40 object-cover rounded-lg mb-4 hover:opacity-90 transition"
              />
              <h3 className="text-xl font-bold">{name}</h3>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
