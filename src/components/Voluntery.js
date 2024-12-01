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
        "I mentored children in coding (HTML/CSS), creating projects to introduce them to programming. Organized by Amalitech and sponsored by Access Bank.",
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
        "I developed a question and answer system by providing access to past questions and solutions. The system improved study efficiency.",
    },
    {
      number: 7,
      title: "LogicKids Vacation Classes",
      description:
        "I taught coding and problem-solving skills to children using HTML/CSS/JS, Python, and Scratch during vacation classes.",
    },
  ];

  return (
    <div id="voluntary" className="bg-gray-100 py-10">
      {/* Header Section */}

      {/* Highlight Image */}
      <div className="flex justify-center mb-10">
        <img
          className="w-3/6 rounded-lg shadow-md border-4 border-white"
          src={voluntery}
          alt="Voluntary Highlight"
        />
      </div>

      {/* Works Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="bg-blue-800 text-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold">{work.number}</h1>
              <h2 className="font-semibold text-xl">{work.title}</h2>
            </div>
            <p className="text-gray-300">{work.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Voluntery;
