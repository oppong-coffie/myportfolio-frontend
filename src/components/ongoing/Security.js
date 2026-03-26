import React, { useState, useEffect } from "react";
import { Input, Textarea, Button, Spinner, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Building2,
  Github,
  Handshake,
  Coins,
  Users,
  LayoutDashboard,
  Store,
  Timer,
  AlertCircle,
  TrendingUp,
  History,
  CheckCircle2,
  Activity,
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const Security = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [intent, setIntent] = useState("");

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

    const params = { name, phone, email, message: `Intent: ${intent}\n\n${message}` };
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
  // Hero Image Path from Artifacts
  const heroImagePath = "/izone_cloud_hero_1772185937321.png";

  const activityLog = [
    { date: "Jan 2024", task: "Initiated", status: "completed" },
    {
      date: "Feb 2024",
      task: "Designing ",
      status: "completed",
    },
    {
      date: "Mar 2024",
      task: "Frontend Development",
      status: "completed",
    },
    {
      date: "May 2024",
      task: "Backend Development",
      status: "completed",
    },
    { date: "June 2024", task: "Testing", status: "active" },
    { date: "Aug 2024", task: "Deployment", status: "pending" },
  ];

  return (
    <div className="relative group/main overflow-visible">
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative p-6 md:p-20 rounded-[5rem] border border-white/10 overflow-hidden bg-slate-950/40 backdrop-blur-3xl transition-all duration-700 hover:border-blue-500/40 shadow-[0_32px_128px_-32px_rgba(0,0,0,0.8)]"
      >
        {/* Decorative Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-60 -right-60 w-[800px] h-[800px] bg-blue-500/10 blur-[160px] rounded-full"
          />
        </div>

        <div className="relative z-10 space-y-32">
          {/* HERO SECTION WITH IMAGE */}
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-7xl md:text-[4rem] font-black tracking-tighter leading-[0.8] bg-gradient-to-br from-white via-white to-slate-500 bg-clip-text text-transparent italic">
                  Blaccbook {"   "}
                  <span className="text-blue-500 ml-10 not-italic">Services</span>
                </h2>
                <div className="space-y-8 bg-white/5 p-2 rounded-[1rem] border border-white/10 backdrop-blur-2xl">
                  <div className="flex items-center gap-1 border-b border-white/5">
                    <div className="p-1 rounded-2xl bg-red-400/10 border border-red-500/20 text-red-400">
                      <AlertCircle size={16} />
                    </div>
                    <h3 className="text-xl font-black text-white uppercase italic">
                      The Problem
                    </h3>
                  </div>
                  <p className="text-lg text-slate-400 font-medium leading-relaxed">
                    Legacy cloud systems in the public sector are{" "}
                    <span className="text-white border-b border-red-500/50">
                      perimetrically fragile
                    </span>
                    . Once the outer layer is breached, internal data silos are
                    exposed. iZone Cloud solves this with sub-node isolation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/5">
                {[
                  { icon: Users, label: "Client", value: "iota Web" },
                  { icon: Timer, label: "Timeline", value: "8 Months" },
                  { icon: Building2, label: "Sponsor", value: "None" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <stat.icon size={16} className="text-blue-500/50" />
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                      {stat.label}
                    </p>
                    <p className="text-sm font-black text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group/hero"
            >
              <img
                src={heroImagePath}
                alt="iZone Cloud Neural Infrastructure"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/hero:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
                <Activity size={14} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  Final Phase: Deployment active
                </span>
              </div>
            </motion.div>
          </div>

          {/* Start:: Progress Section */}
          <div className="bg-blue-500/5 p-10 lg:p-4 rounded-[2rem] border border-white/10 backdrop-blur-xl flex flex-col">

            {/* LIVE ACTIVITY FEED */}
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-4 border-b border-white/5 pb-1">
                <div className="p-3.5 rounded-2xl bg-slate-800 border border-white/10 text-slate-300">
                  <History size={20} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-[0.2em] text-white">
                  Activity Feed
                </h3>
              </div>

              <div className="flex gap-8 overflow-x-auto pb-6 relative snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
                {activityLog.map((log, idx) => (
                  <motion.div
                    key={log.task}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group flex-shrink-0 w-38 snap-start"
                  >
                    {/* Horizontal connector line */}
                    {idx !== activityLog.length - 1 && (
                      <div className="absolute top-2 left-6 right-[-2.5rem] h-px bg-gradient-to-r from-blue-500/50 via-white/10 to-transparent pointer-events-none" />
                    )}

                    <div className="flex flex-col gap-2 p-2 rounded-2xl transition-all hover:bg-white/[0.03] border border-transparent hover:border-white/5">
                      <div className="flex items-center gap-2">
                        <div
                          className={`z-10 h-4 w-4 rounded-full border-2 border-[#090e1a] shadow-sm flex-shrink-0 transition-transform group-hover:scale-125 ${log.status === "completed"
                            ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                            : log.status === "active"
                              ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse"
                              : "bg-slate-700"
                            }`}
                        />
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 w-fit px-2 py-0.5 rounded-full">
                          {log.date}
                        </span>

                      </div>
                      <div className="space-y-0">
                        <p
                          className={`text-sm font-bold tracking-wide leading-relaxed ${log.status === "pending" ? "text-slate-500" : "text-white"}`}
                        >
                          {log.task}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* IMPACT PROGRESSION */}
            <div className="space-y-1">
              {/* Background glow */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 space-y-10 pb-4">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-1">
                      <div className="text-blue-400 w-fit">
                        <TrendingUp size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-black text-white uppercase italic tracking-wide">
                          Impact Progression
                        </h3>
                      </div>
                    </div>
                    <span className="text-6xl lg:text-7xl font-black text-blue-400 italic leading-none drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      94%.
                    </span>
                  </div>
                  <div className="h-5 w-full bg-slate-900/80 rounded-full overflow-hidden border border-white/10 p-1 shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "94%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "300%"] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-3xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)] flex-shrink-0" />
                  <p className="text-sm text-emerald-400 font-medium tracking-wide">
                    <span className="text-white font-bold">Current Status:</span> Testing . . .
                  </p>
                </div>
              </div>

            </div>

          </div>
          {/* End:: Progress Section */}


          {/* Start:: Architecture Section */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5">
              <div className="max-w-3xl">
                <h3 className="text-4xl md:text-4xl font-black text-white tracking-tighter uppercase italic">
                  Architecture.
                </h3>
                <p className="text-xl text-slate-400 font-medium">
                  Three core functional units operating in parallel.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  id: "01",
                  icon: LayoutDashboard,
                  title: "User",
                  tag: "Dashboard",
                  color: "blue",
                  features: [
                    { name: "Main dashboard", status: "completed" },
                    { name: "Profile page", status: "completed" },
                    { name: "Service listing", status: "completed" },
                    { name: "Products listing", status: "completed" },
                    { name: "Firebase sync", status: "completed" },
                  ],
                },
                {
                  id: "02",
                  icon: Users,
                  title: "Admin",
                  tag: "IAM Layer",
                  color: "indigo",
                  features: [
                    { name: "Main dashboard", status: "completed" },
                    { name: "Profile page", status: "completed" },
                    { name: "Service listing", status: "completed" },
                    { name: "Products listing", status: "completed" },
                    { name: "Firebase sync", status: "completed" },
                  ],
                },
                {
                  id: "03",
                  icon: Store,
                  title: "Super Admin",
                  tag: "Listings",
                  color: "emerald",
                  features: [
                    { name: "Main dashboard", status: "completed" },
                    { name: "Profile page", status: "completed" },
                    { name: "Service listing", status: "completed" },
                    { name: "Products listing", status: "uncompleted" },
                    { name: "Firebase sync", status: "uncompleted" },
                  ],
                },
              ].map((unit) => (
                <motion.div
                  key={unit.id}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-[1rem] overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col items-start justify-between p-3 transition-colors hover:bg-white/[0.04]"
                >
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />

                  <div className="flex items-center justify-between w-full relative z-10">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-500">
                      <unit.icon size={36} strokeWidth={1.5} />
                    </div>
                    <span className="text-5xl font-black text-white/5 italic select-none uppercase">
                      {unit.id}
                    </span>
                  </div>

                  <div className="space-y-6 w-full relative z-10">
                    <div className="space-y-2">

                      <h4 className="text-xl font-black text-white uppercase tracking-wide">
                        {unit.title}
                      </h4>
                    </div>

                    <ul className="space-y-4">
                      {unit.features.map((f, i) => (
                        <li
                          key={i}
                          className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3 group/feat cursor-default"
                        >
                          {f.status === "completed" ? (
                            <div className="relative flex items-center justify-center flex-shrink-0">
                              <div className="absolute inset-0 bg-emerald-500/20 blur-sm rounded-full" />
                              <CheckCircle2 size={16} className="text-emerald-400 relative z-10" strokeWidth={2.5} />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-600 bg-slate-800/50 flex-shrink-0 transition-colors group-hover/feat:border-blue-500/50" />
                          )}
                          <span className={`transition-colors duration-300 ${f.status === "completed" ? "text-slate-200" : "group-hover/feat:text-slate-300"}`}>
                            {f.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-500 to-blue-600/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
            {/* End:: Architecture Section */}
          </div>

          {/* GLOBAL ACTIONS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-20 border-t border-white/5">
            <motion.button
              onClick={() => { setIntent("Collaborate"); onOpen(); }}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-6 px-12 py-6 bg-blue-600 rounded-[2.5rem] font-black text-white text-xl shadow-[0_32px_64px_-16px_rgba(37,99,235,0.6)] group cursor-pointer"
            >
              <Handshake
                size={28}
                className="group-hover:rotate-12 transition-transform"
              />
              <span>Collaborate</span>
            </motion.button>

            <motion.button
              onClick={() => { setIntent("Invest"); onOpen(); }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-6 px-12 py-6 bg-transparent border border-white/10 rounded-[2.5rem] font-black text-white text-xl backdrop-blur-3xl group cursor-pointer"
            >
              <Coins size={28} className="text-amber-400" />
              <span>Invest</span>
            </motion.button>

            <motion.a
              href="https://github.com/oppong-coffie"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-6 bg-slate-800 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all shadow-xl"
            >
              <Github size={28} className="text-slate-300" />
            </motion.a>
          </div>

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
                    {intent === "Invest" ? "Investment Inquiry" : "Collaboration"}
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
      </motion.section>
    </div>
  );
};

export default Security;
