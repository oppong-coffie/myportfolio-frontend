import React from 'react';
import profile2 from '../images/hero4.jpg';
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
  className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-center text-gray-400"
  data-aos="fade-up"
  data-aos-delay="400"
>
  I'm a creative <span className="font-semibold text-blue-600">Frontend Developer</span> & 
  <span className="font-semibold text-green-600"> AI Bot Builder</span> passionate about building smart, user-friendly digital products.  
  <br className="hidden sm:block" />
  I specialize in <span className="font-medium">responsive web & mobile apps</span> using React, Next, and React Native 📱—and I bring 
  conversations to life with bots powered by BotPress, Gupshup & WhatsApp 💬.
  <br className="hidden sm:block" />
  From booking systems to 24/7 automated support, I help businesses go digital with ease. Let's build something awesome together! 🚀
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
