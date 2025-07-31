import React, { useEffect } from 'react';
import profile2 from '../images/hero4.jpg';
import eli2 from '../images/eli2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="about" className="bg-indigo-950 text-white px-6 md:px-20 py-16">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-down">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-blue-400">
  👨‍💻 About Me
</h1>

        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-gray-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I'm a creative <span className="font-semibold text-blue-500">Frontend Developer</span> &{' '}
          <span className="font-semibold text-green-500">AI Bot Builder</span> passionate about building
          smart, user-friendly digital products.
          <br className="hidden sm:block" />
          I specialize in <span className="font-medium">responsive web & mobile apps</span> using React,
          Next.js, and React Native 📱—and I bring conversations to life with bots powered by BotPress,
          Gupshup & WhatsApp 💬.
          <br className="hidden sm:block" />
          From booking systems to 24/7 automated support, I help businesses go digital with ease.
          Let’s build something awesome together! 🚀
        </p>
      </div>

      {/* Profile Images */}
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-8"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <img
          src={eli2}
          alt="Illustration"
          className="w-60 h-60 hover:scale-105 transition-transform duration-500 hidden md:block"
        />
        <img
          src={profile2 || 'https://via.placeholder.com/150'}
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
