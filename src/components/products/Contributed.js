import React, { useState, useEffect } from 'react';
import { Input, Textarea, Button, Spinner, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { motion } from 'framer-motion';
import { Users, GitBranch, Share2 } from 'lucide-react';

const Contributed = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    emailjs.init("T5HMx10wLGbYc1M3F");
  }, []);

  const sendSms = async () => {
    try {
      await axios.post(
        'https://myportfolio-backend-nu.vercel.app/sms/sendme',
        { name, phone },
        { headers: { 'Content-Type': 'application/json' } }
      );
      await axios.post(
        'https://myportfolio-backend-nu.vercel.app/sms/sendsms',
        { name, phone },
        { headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Error sending SMS:', error.message);
    }
  }

  const sendEmail = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setFeedback("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setFeedback("");

    const params = { name, phone, email, message: `Intent: Collaboration\n\n${message}` };
    const serviceID = "service_2whq5dc";
    const templateID = "template_5a8k82b";

    emailjs
      .send(serviceID, templateID, params)
      .then(() => {
        setFeedback("Message sent successfully!");
        setLoading(false);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        sendSms();
      })
      .catch((error) => {
        setFeedback("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
        setLoading(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const contributions = [
    {
      title: "Blaccbook",
      role: "Core Contributor",
      description: "Contributed to specialized React components and accessibility audits.",
      tech: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "FinTech Dashboard",
      role: "Frontend Consultant",
      description: "Collaborated on real-time data visualization and security modules.",
      tech: ["Next.js", "D3.js", "Auth0"],
      link: "#"
    },
    {
      title: "Medical Record System",
      role: "Team Lead",
      description: "Developed a high-fidelity design system and component architecture.",
      tech: ["React Native", "Figma", "Redux"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-base font-black tracking-[0.2em] text-gray-900 flex items-center gap-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Project<span className="text-blue-600">Contributions</span>
            </h1>
            <div className="h-0.5 w-8 bg-blue-600/20 rounded-full mt-0.5" />
          </div>
        </div>
      </header>

      <main className="py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Section Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <Users size={16} className="text-blue-500" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-blue-500 font-bold">Collaborative Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Projects I've <span className="text-blue-600">Built With Others</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              A curated selection of collaborative works where I've contributed as a developer, architect, or consultant.
            </p>
          </motion.div>

          {/* Contributions List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {contributions.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-blue-500/20 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden"
              >
                {/* Decorative Background Icon */}
                <div className="absolute -right-8 -bottom-8 text-gray-200 group-hover:text-blue-50 transition-colors duration-500">
                  <GitBranch size={160} />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                        <Share2 size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black tracking-tight">{project.title}</h3>
                        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{project.role}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 leading-relaxed font-medium">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover:border-blue-100 group-hover:text-blue-400 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-[2rem] font-bold transition-all hover:bg-blue-600 group"
                  >
                    View Contribution
                    <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a> */}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-10 rounded-[2.5rem] bg-slate-900 text-white text-center overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/1) blur-[100px] rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">Want to collaborate?</h3>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                I'm always looking for interesting projects to contribute to. Let's build something exceptional together.
              </p>
              <motion.button
                onClick={onOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-500 text-white rounded-[2rem] font-black text-lg shadow-xl shadow-blue-500/30 hover:bg-blue-400 transition-colors inline-flex items-center justify-center cursor-pointer"
              >
                Contact for Collaboration
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* CONTACT MODAL */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        classNames={{
          base: "bg-slate-900 border border-white/10 shadow-2xl pb-6",
          header: "border-b border-white/5",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white text-2xl font-black italic uppercase tracking-wider">
                Collaboration Request
              </ModalHeader>
              <ModalBody>
                <form onSubmit={sendEmail} className="space-y-6 mt-4">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      label="Name"
                      variant="bordered"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      classNames={{
                        inputWrapper: "border-white/20 group-data-[focus=true]:border-blue-500",
                        label: "text-slate-400",
                        input: "text-white"
                      }}
                      required
                    />
                    <Input
                      type="email"
                      label="Email"
                      variant="bordered"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      classNames={{
                        inputWrapper: "border-white/20 group-data-[focus=true]:border-blue-500",
                        label: "text-slate-400",
                        input: "text-white"
                      }}
                      required
                    />
                    <Input
                      type="tel"
                      label="Phone"
                      variant="bordered"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      classNames={{
                        inputWrapper: "border-white/20 group-data-[focus=true]:border-blue-500",
                        label: "text-slate-400",
                        input: "text-white"
                      }}
                    />
                    <Textarea
                      label="Message"
                      variant="bordered"
                      minRows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      classNames={{
                        inputWrapper: "border-white/20 group-data-[focus=true]:border-blue-500",
                        label: "text-slate-400",
                        input: "text-white"
                      }}
                      required
                      placeholder="Tell me a bit about how you'd like to collaborate..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all"
                    disabled={loading}
                  >
                    {loading ? <Spinner color="white" size="sm" /> : "Send Message"}
                  </Button>

                  {feedback && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 text-center font-bold text-sm bg-black/20 p-3 rounded-lg ${feedback.includes("successfully") ? "text-emerald-400 border border-emerald-500/20" : "text-red-400 border border-red-500/20"
                        }`}
                    >
                      {feedback}
                    </motion.p>
                  )}
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

    </div>
  );
};

export default Contributed;
