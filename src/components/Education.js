import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import edu1 from '../images/TTU-LOGO.jpg'
import ipmc from '../images/ipmc.jpg'
import amalitech from '../images/amalitech.png'

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Smooth easing
      delay: 200, // Delay between animations
      once: true, // Ensures animations play only once
    });
  }, []);

  const educationData = [
    {
      institution: 'Takoradi Technical University',
      degree: 'Degree in Software Engineering',
      date: '07/2020 – 08/2024',
      image: edu1,
    },
    {
      institution: 'IPMC-Takoradi',
      degree: 'Professional in Hardware and Networking',
      date: '02/2022 – 08/2022',
      image: ipmc,
    },
    {
      institution: 'Amalitech Company Limited',
      degree: 'Virtual Assistantance',
      date: '03/2023 – 07/2023',
      image: amalitech,
    },
  ];

  return (
    <section id='education' className="py-12 px-6 bg-gradient-to-b from-blue-100 to-gray-100">
<h2
  className="text-3xl font-bold text-center text-blue-800 mb-8"
  data-aos="fade-down"
>
  🎓 Education
</h2>

  
    <div className="flex flex-col md:flex-row md:flex-wrap md:gap-6 md:justify-center space-y-8 md:space-y-0">
      {educationData.map(({ institution, degree, date, image }, idx) => (
        <div
          key={idx}
          className="p-6 bg-white shadow-lg rounded-lg flex items-center gap-4 hover:shadow-xl transition-shadow duration-300 md:w-[48%] lg:w-[30%]"
          data-aos="fade-up"
          data-aos-delay={idx * 200}
        >
          <img
            src={image}
            alt={institution}
            className="w-16 h-16 rounded-full border border-gray-300"
            data-aos="zoom-in"
            data-aos-delay={idx * 200 + 100}
          />
          <div>
            <h3
              className="font-bold text-lg text-gray-800"
              data-aos="fade-right"
              data-aos-delay={idx * 200 + 150}
            >
              {institution}
            </h3>
            <p
              className="text-gray-600"
              data-aos="fade-left"
              data-aos-delay={idx * 200 + 200}
            >
              {degree}
            </p>
            <p
              className="text-sm text-gray-500"
              data-aos="fade-up"
              data-aos-delay={idx * 200 + 250}
            >
              {date}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default Education;
