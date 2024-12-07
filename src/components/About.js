import React from 'react';
import profile2 from '../images/port7.jpg';
import eli from '../images/eli.png';
import eli2 from '../images/eli2.png';
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
    <div id="about" className="bg-indigo-950">
      {/* Header Section */}
      <section
        className="text-center px-6 md:px-20 py-12  text-white shadow-lg"
        data-aos="fade-in"
      >
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          About Me
        </h1>
        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I'm a passionate Frontend Developer and AI Bot Builder dedicated to crafting intelligent digital solutions. 
          With expertise in frameworks like React and Vue.js, I specialize in building modern, responsive, and accessible
          web interfaces. As an AI bot builder, I develop chatbots powered by platforms like BotPress and Gupshup, 
          enabling businesses to automate customer interactions, book appointments, and provide 24/7 support through website,
          whatsApp or USSD. Whether it’s building dynamic web applications or conversational bots, Let’s create something amazing together! 🚀
        </p>
        <div
          className="mt-8"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className='flex'>
            <img src={eli2} 
             className="w-72 h-72 mx-auto hover:scale-105 transition-transform duration-500"
            />
          <img
            src={profile2 || 'https://via.placeholder.com/150'}
            alt="Profile Picture"
            className="w-72 h-72 mx-auto rounded-full shadow-xl border-4 border-white hover:scale-105 transition-transform duration-500"
          />
          <img src={eli2} 
          className="w-72 h-72 mx-auto hover:scale-105 transition-transform duration-500"
          />

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
