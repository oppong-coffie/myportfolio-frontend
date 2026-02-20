import React from "react";
import { motion } from "framer-motion";
import cursorLogo from "../images/cursor.avif";
import postman from "../images/postman2.png";
import trello from "../images/trello.png";
import botpress from "../images/botpress.png";
import twilio from "../images/twillo.png";
import gupshup from "../images/gupshup.png";

const ToolsSection = () => {
  const tools = [
    {
      name: "Cursor",
      description:
        "An AI-first code editor built for modern developers. Cursor helps you write, refactor, and debug code with powerful AI assistance.",
      logo: cursorLogo,
    },
    {
      name: "Postman",
      description:
        "An API platform for building and using APIs, streamlining testing, debugging, and collaboration.",
      logo: postman,
    },
    {
      name: "Trello",
      description:
        "A flexible task management tool using boards, lists, and cards to visually organize projects and track progress.",
      logo: trello,
    },
    // {
    //   name: "Git",
    //   description:
    //     "A powerful version control system enabling developers to manage code, track changes, and collaborate seamlessly.",
    //   logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    // },
    {
      name: "Figma",
      description:
        "A collaborative design platform used for creating UI/UX designs, prototypes, and real-time team collaboration.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    // {
    //   name: "Vercel",
    //   description:
    //     "A deployment and hosting platform optimized for frontend frameworks, enabling fast and secure delivery.",
    //   logo: vercel,
    // },
    // {
    //   name: "Slack",
    //   description:
    //     "A real-time messaging and collaboration tool that helps teams communicate efficiently through channels and integrations.",
    //   logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    // },
    {
      name: "Gupshup",
      description:
        "A conversational messaging platform for building chatbots and automating multi-channel business communications.",
      logo: gupshup,
    },
    {
      name: "Twilio",
      description:
        "A developer-friendly cloud communication platform for integrating messaging, voice, and video into applications via APIs.",
      logo: twilio,
    },
    {
      name: "GitHub",
      description:
        "A popular platform for hosting and managing Git repositories, supporting collaboration, version control, and DevOps workflows.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
      name: "n8n",
      description:
        "An open-source workflow automation tool that connects apps and services to automate repetitive tasks and processes visually.",
      logo: "https://avatars.githubusercontent.com/u/45487711?s=280&v=4",
    },
    {
      name: "Botpress",
      description:
        "An open-source chatbot framework for building, deploying, and managing intelligent conversational AI systems.",
      logo: botpress,
    },
  ];

  return (
    <section
      id="tools"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-100"
    >
      <div className="container mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tools I <span className="text-primary">Use</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These tools empower me to build fast, scalable, and intelligent digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gray-50 rounded-full p-4 shadow-inner">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {tool.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
