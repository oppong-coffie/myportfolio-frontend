import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ToolsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with custom settings
  }, []);

  const tools = [
    {
      name: "Visual Studio Code",
      description:
        "A lightweight yet powerful code editor that supports numerous extensions for front-end, back-end, and full-stack development.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Visual_Studio_Code_1.35_icon.svg",
    },
    {
      name: "Postman",
      description:
        "A popular API testing tool for developers to test and interact with APIs. Postman simplifies API requests, testing, and documentation.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Postman_Logo_2022.svg",
    },
    {
      name: "Trello",
      description:
        "A web-based project management tool that allows developers and teams to organize tasks with boards, lists, and cards.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Trello-logo-2020.svg",
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
      name: "Docker",
      description:
        "A platform for creating, deploying, and managing containerized applications in any environment.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    },
    {
      name: "Slack",
      description:
        "A communication tool that streamlines team collaboration through channels, direct messages, and integrations.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    },
    {
      name: "Notion",
      description:
        "A productivity tool that combines note-taking, project management, and databases into a single platform.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    },
    {
      name: "Canva",
      description:
        "An intuitive design tool for creating professional graphics, presentations, and social media content.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Canva_Logo_2021.svg",
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
      name: "Jira",
      description:
        "A project management and issue-tracking tool that helps teams plan, track, and release software effectively.",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/05/Jira_%28Software%29_logo.svg",
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
