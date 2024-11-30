import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
              name: "Church Website",
              link: "https://church-ashen.vercel.app",
              image: "https://via.placeholder.com/300",
            },
            {
              name: "Time-Tracking Dashboard",
              link: "https://time-tracking-dashboard-ts-oppong-coffie.vercel.app",
              image: "https://via.placeholder.com/300",
            },
            {
              name: "Memory Game",
              link: "https://memory-game-oppong-coffie.vercel.app",
              image: "https://via.placeholder.com/300",
            },
            {
              name: "Password Generator",
              link: "https://password-generator-oppongcoffies-projects.vercel.app",
              image: "https://via.placeholder.com/300",
            },
            {
              name: "News Dashboard",
              link: "https://newsfeed-git-main-oppong-coffie.vercel.app",
              image: "https://via.placeholder.com/300",
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
