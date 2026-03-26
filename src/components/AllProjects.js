import React, { useState, useEffect } from 'react';
import { Input, Textarea, Button, Spinner, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Ipa from './products/Ipa.js';
import Zeazn from './products/Zeazn.js';
import ZuluDesk from './products/ZuluDesk.js';
import TeamAlfy from './products/TeamAlfy.js';
import WhatsAppBot from './products/WhatsAppBot.js';
import PasswordGenerator from './products/PasswordGenerator.js';
import TimeTracker from './products/TimeTracker.js';
import GuduGames from './products/GuduGames.js';
import Students from './products/Students.js';
import RozeyMobile from './products/RozeyMobile.js';
import Fashion from './products/Fashion.js';
import Contributed from './products/Contributed.js';
import Izone from './products/Izone.js';
import Prume from './products/Prume.js';
import Aakt from './products/Aakt.js';
import Sms from './products/Sms.js';

const AllProjects = () => {
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

    const params = { name, phone, email, message: `Idea Description from All Projects:\n\n${message}` };
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

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Left */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              <span className="text-sm tracking-wide">Back to Home</span>
            </Link>

            {/* Center */}
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-primary-300 via-primary-200 to-secondary-300 bg-clip-text text-transparent">
              All Projects
            </h1>

            {/* Right - Ongoing Badge */}
            <Link to="/ongoing-projects">
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="group relative flex items-center gap-2 px-4 py-1.5 
               bg-amber-500/10 border border-amber-500/30
               rounded-full shadow-sm transition-all duration-300 cursor-pointer"
              >
                {/* Glow Background */}
                <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-md opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300" />

                {/* Live Pulse Dot */}
                <div className="relative flex h-2 w-2">
                  <motion.span
                    animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inline-flex h-full w-full rounded-full bg-amber-400"
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 
                       shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                </div>

                <span className="relative text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-300">
                  Ongoing Products
                </span>
              </motion.div>
            </Link>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            My <span className="text-primary-400">Creative</span> Journey
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A deep dive into the projects I've built, ranging from web applications to AI-powered chatbots.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="">
        <Ipa />
        <Zeazn />
        <ZuluDesk />
        <TeamAlfy />
        {/* <Tuaneka /> */}
        <WhatsAppBot />
        <PasswordGenerator />
        <TimeTracker />
        <GuduGames />
        <Students />
        <Izone />
        <Prume />
        <Aakt />
        <RozeyMobile />
        {/* <Stallion /> */}
        <Sms />
        <Fashion />
        <Contributed />
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 bg-slate-800/50 border-t border-white/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to build something amazing?</h2>
          <button
            onClick={() => {onOpen(); }}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)]"
          >
            Describe your idea and i will bring it to life <Home className="ml-3" size={24} />
          </button>
        </div>
      </section>

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
                Describe Your Idea
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
                      label="Your Idea"
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
                      placeholder="Tell me a bit about what you want to build..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all"
                    disabled={loading}
                  >
                    {loading ? <Spinner color="white" size="sm" /> : "Send Details"}
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

export default AllProjects;
