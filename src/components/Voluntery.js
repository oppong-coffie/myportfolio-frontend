import React from "react";
import voluntery from "../images/voluntery.jpg";
import voluntery1 from "../images/react.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/style.css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Voluntery = () => {
  const works = [
    {
      number: 1,
      title: "PHP Bootcamp Volunteer",
      description:
        "I led an intensive PHP Bootcamp, teaching participants from scratch to advanced at TTU.",
    },
    {
      number: 2,
      title: "Coding for Kid",
      description:
        "I mentored kids in (HTML/CSS), introducing them to programming. Organized by Amalitech and sponsored by Access Bank.",
    },
    {
      number: 3,
      title: "Saturday Coding",
      description:
        "I led weekend coding sessions for beginners at Greater Heights School focusing on essential programming skills.",
    },
    {
      number: 4,
      title: "PrestigeLabs Coding Mentor",
      description:
        "I provided guidance and support in coding through hands-on projects and lessons, helping participants prepare for quizzes.",
    },
    {
      number: 5,
      title: "TeachTru Coding Mentor",
      description:
        "I taught coding skills to IT students at TTU who had no prior knowledge, delivering practical lessons and hands-on projects.",
    },
    {
      number: 6,
      title: "Pass Question System",
      description:
        "I developed a system to provide access to past questions and solutions improving study efficiency.",
    },
    {
      number: 7,
      title: "Director of IT",
      description:
        "Lead the IT team at Carifika Global, an NGO focused on uniting Africa through technology.",
    },    
    {
      number: 8,
      title: "NextJS Workshop Assistant",
      description:
        "Assisted in organizing and delivering a React.js workshop for beginner web developers.",
    },
    {
      number: 9,
      title: "Project Manager",
      description:
        "Lead Starinx team to deliver web and mobile apps on time, ensuring quality and client satisfaction.",
    }      
  ];

  return (
    <div id="voluntary" className="bg-gray-100 py-14 px-4 sm:px-6 lg:px-12">
        {/* Highlight Image */}
        <div className="flex justify-center mb-2">
        <img
          className="w-3/6 rounded-lg shadow-md border-4 border-white"
          src={voluntery}
          alt="Voluntary Highlight"
        />
      </div>
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          I’ve been fortunate to share my knowledge through community events, workshops, and mentorship programs.
        </p>
      </div>

    

      {/* Volunteer Work Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="bg-blue-800 text-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-bold bg-white text-blue-800 w-10 h-10 flex items-center justify-center rounded-full shadow">
                {work.number}
              </span>
              <h3 className="font-semibold text-xl">{work.title}</h3>
            </div>
            <p className="text-gray-200 text-sm">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voluntery;
