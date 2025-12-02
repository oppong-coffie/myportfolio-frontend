import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Code, Laptop, GraduationCap, Trophy, Briefcase, Calendar, Star } from "lucide-react";
import voluntery from "../images/voluntery.jpg";

const Voluntery = () => {
  const works = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "PHP Bootcamp Volunteer 🐘",
      description:
        "Led an intensive PHP Bootcamp, teaching participants from scratch to advanced concepts at TTU. Helped students build their first dynamic websites.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Coding for Kids 👶",
      description:
        "Mentored kids in HTML/CSS, introducing them to the magic of programming. Organized by Amalitech and sponsored by Access Bank.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Saturday Coding 💻",
      description:
        "Led weekend coding sessions for beginners at Greater Heights School, focusing on essential programming skills and logical thinking.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "PrestigeLabs Mentor 🎓",
      description:
        "Provided guidance and support in coding through hands-on projects and lessons, helping participants prepare for quizzes and exams.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "TeachTru Mentor 👨‍🏫",
      description:
        "Taught coding skills to IT students at TTU who had no prior knowledge, delivering practical lessons and hands-on projects.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Pass Question System 📚",
      description:
        "Developed a system to provide access to past questions and solutions, significantly improving study efficiency for students.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Director of IT ❤️",
      description:
        "Lead the IT team at Carifika Global, an NGO focused on uniting Africa through technology and community service.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "NextJS Workshop ⚛️",
      description:
        "Assisted in organizing and delivering a React.js & Next.js workshop for beginner web developers, covering modern hooks and routing.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Project Manager 🚀",
      description:
        "Lead Starinx team to deliver web and mobile apps on time, ensuring quality code, best practices, and client satisfaction.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="voluntary" className="bg-dark py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Volunteering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Community</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Giving back to the community through mentorship, workshops, and leadership.
            I believe in the power of sharing knowledge. 🌍✨
          </p>
        </motion.div>

        {/* Highlight Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative p-2 bg-gradient-to-r from-primary to-secondary rounded-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              className="w-full max-w-3xl rounded-xl shadow-2xl"
              src={voluntery}
              alt="Volunteering Highlight"
            />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-dark-card border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300 shadow-lg hover:shadow-primary/10 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${work.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {work.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {work.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {work.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voluntery;
