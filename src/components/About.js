import React from 'react';
import profile2 from '../images/heroImage.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div id='about' className="bg-gray-50 py-12">
      {/* Header Section */}
      <section
        className="text-center px-6 md:px-20 py-12 bg-gradient-to-r from-blue-800 to-purple-800 text-white"
        data-aos="fade-in"
      >
        <h1
          className="text-5xl font-extrabold mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          About Me
        </h1>
        <p
          className="text-lg max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A passionate Front-end Developer who transforms ideas into user-friendly digital
          experiences. I focus on blending creativity with functionality to create impactful
          solutions.
        </p>
        <div
          className="mt-6"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <img
            src={profile2 || 'https://via.placeholder.com/150'}
            alt="Profile Picture"
            className="w-40 h-40 mx-auto rounded-full shadow-xl border-4 border-white hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

   
    </div>
  );
};

export default About;
