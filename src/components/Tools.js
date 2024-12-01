import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import vs from '../images/vs2.png'
import postman from '../images/postman2.png'
import trello from '../images/trello.png'
import vercel from '../images/vercel.png'
import botpress from '../images/botpress.png'
import twilio from '../images/twillo.png'
import gupshup from '../images/gupshup.png'

const ToolsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with custom settings
  }, []);

  const tools = [
    {
      name: "Visual Studio Code",
      description:
        "A lightweight yet powerful code editor that supports numerous extensions for front-end, back-end, and full-stack development.",
      logo: vs,
    },
    {
      name: "Postman",
      description:
        "A popular API testing tool for developers to test and interact with APIs. Postman simplifies API requests, testing, and documentation.",
      logo: postman,
    },
    {
      name: "Trello",
      description:
        "A web-based project management tool that allows developers and teams to organize tasks with boards, lists, and cards.",
      logo: trello,
    },
    {
      name: "Git",
      description:
        "A distributed version control system that tracks changes in source code, enabling collaboration and efficient workflows.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    },
    {
      name: "Figma",
      description:
        "A design tool for creating wireframes, prototypes, and user interfaces, enabling seamless collaboration between teams.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      name: "Vercel",
      description:
        "A platform for creating, deploying, and managing containerized applications in any environment.",
      logo: vercel,
    },
    {
      name: "Slack",
      description:
        "A communication tool that streamlines team collaboration through channels, direct messages, and integrations.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    },
    {
      name: "Gupshup",
      description:
        "It is commonly used to create chatbots, automate customer interactions, and enable multi-channel messaging for businesses.",
      logo: gupshup,
    },
    {
      name: "Twilio",
      description:
        "A cloud communications platform that enables developers to add messaging, voice, video, and other communication capabilities to their applications using APIs.",
      logo: twilio,
    },
    {
      name: "GitHub",
      description:
        "A code hosting platform for version control and collaboration, enabling developers to share and manage projects.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
      name: "Zoom",
      description:
        "A video conferencing tool for virtual meetings, webinars, and collaboration with remote teams.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
    },
    {
      name: "Botpress",
      description:
        "A  platform designed for building, deploying, and managing conversational AI chatbots.",
      logo: botpress,
    },
  ];

  return (
    <section id="tools" className="tools py-20 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-bold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Tools I Use
        </h2>
        <p
          className="text-lg text-gray-600 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          These are the tools that help me create seamless and efficient
          solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="tool-card bg-white shadow-lg rounded-lg p-6 text-center transform transition hover:-translate-y-2 hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center h-20 mb-4">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600">
                {tool.name}
              </h3>
              <p className="text-gray-500 mt-2">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
