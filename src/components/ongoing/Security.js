import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle,
  Clock,
  Target,
  Loader2,
  Circle,
  Github,
  ArrowRight,
  ShieldCheck,
  Activity,
  Lock,
  Globe,
  FileText,
} from "lucide-react";
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const Security = () => {
  return (
    <div className="relative group/main">
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative p-10 md:p-16 rounded-[3.5rem] border border-white/20 overflow-hidden bg-slate-950/60 backdrop-blur-2xl transition-all duration-700 hover:border-blue-500/30 shadow-2xl"
      >
        {/* Animated Background Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/20 blur-[130px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-44 -left-44 w-[600px] h-[600px] bg-indigo-600/15 blur-[130px] rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-10">
            {/* Title & Description */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent"
              >
                iZone Cloud
              </motion.h2>
              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
                Architechting a{" "}
                <span className="text-blue-400 font-bold italic">
                  zero-trust
                </span>{" "}
                infrastructure for enterprise-grade isolated networking and
                automated secure orchestration.
              </p>
            </div>

            {/* Progress & ETA Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5, borderColor: "rgba(59,130,246,0.3)" }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors group/card"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black">
                    Development Completion
                  </span>
                  <span className="text-lg font-black text-blue-400">72%</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-white/5 overflow-hidden ring-1 ring-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  />
                </div>

                <div className="mt-4 flex items-center gap-2.5 text-xs text-slate-300 font-bold">
                  <Activity size={16} className="text-blue-400 animate-pulse" />
                  <span>
                    Phase 3:{" "}
                    <span className="text-blue-200">System Hardening</span>
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, borderColor: "rgba(16,185,129,0.3)" }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-black">
                    Estimated Launch
                  </span>
                  <span className="text-lg font-black text-emerald-400">
                    Mar 2026
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-400 font-bold">
                      <Clock size={16} className="text-emerald-400" />
                      Time Remaining
                    </span>
                    <span className="font-black text-emerald-100">
                      ~21 Days
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-400 font-bold">
                      <Target size={16} className="text-blue-400" />
                      Deployment Ready
                    </span>
                    <span className="font-black text-blue-100">
                      94% Confidence
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project Roadmap */}
            <div className="space-y-6">
              <div className="flex items-end justify-between px-2">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400/80">
                  Project Roadmap
                </h3>
                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                  Infrastructure Cycle
                </span>
              </div>

              <div className="grid gap-3">
                {[
                  {
                    title: "Discovery & Threat Modeling",
                    status: "done",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Security Architecture Design",
                    status: "done",
                    icon: Lock,
                  },
                  {
                    title: "Hardening & Implementation",
                    status: "active",
                    icon: Activity,
                  },
                  {
                    title: "Vulnerability Scanning & QA",
                    status: "pending",
                    icon: Globe,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{
                      x: 8,
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-xl border ${
                          item.status === "done"
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                            : item.status === "active"
                              ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                              : "bg-white/5 border-white/10 text-slate-500"
                        }`}
                      >
                        <item.icon
                          size={18}
                          className={
                            item.status === "active" ? "animate-pulse" : ""
                          }
                        />
                      </div>
                      <span className="text-[15px] font-bold text-slate-100 group-hover:text-blue-200 transition-colors">
                        {item.title}
                      </span>
                    </div>

                    <div
                      className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border shadow-sm ${
                        item.status === "done"
                          ? "text-emerald-400 bg-emerald-500/5 border-emerald-500/20"
                          : item.status === "active"
                            ? "text-blue-400 bg-blue-500/10 border-blue-500/20 animate-pulse"
                            : "text-slate-500 bg-white/5 border-white/10"
                      }`}
                    >
                      {item.status === "done"
                        ? "Complete"
                        : item.status === "active"
                          ? "Ongoing"
                          : "Queue"}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

         
          </div>

          {/* RIGHT PREVIEW */}
          <div className="sticky top-8">
            {/* Main Preview Container */}
            <motion.div
              whileHover={{ rotateY: -3, rotateX: 2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] group/preview"
            >
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />

              <motion.img
                src="/me.jpg"
                alt="iZone Cloud Visualization"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/preview:scale-105"
              />

              {/* Security Scan Overlay Animation */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 opacity-40 shadow-[0_0_15px_rgba(59,130,246,0.8)] pointer-events-none"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-20" />

              {/* Floating Status Badge */}
              <div className="absolute bottom-8 left-8 right-8 z-30">
                <div className="p-6 rounded-[2rem] bg-slate-900/80 border border-white/10 backdrop-blur-xl space-y-3 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={20} className="text-emerald-400" />
                    <span className="text-sm font-black text-white uppercase tracking-widest">
                      Tech Stack
                    </span>
                  </div>

                  <div className="flex gap-4 pt-1">
                    <div className="flex items-center gap-2 text-[10px] font-black text-blue-400 uppercase tracking-tighter">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />{" "}
                      React
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-tighter">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                      Next.js
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-tighter">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                      Next.js
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-tighter">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                      Next.js
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-tighter">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                      Next.js
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* client */}
            <div className="flex justify-center gap-4 mt-8">
                  <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full cursor-default"
            >
              <Building2 size={16} className="text-blue-400" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-blue-200/60 font-medium">
                Client:
              </span>
              <span className="text-[13px] font-black tracking-wide text-white">
                IPA GH
              </span>
            </motion.div>
            </div>

               {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <motion.a
                href="https://github.com/oppong-coffie"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl font-black
                           bg-white/10 border border-white/10 text-white transition-all shadow-lg shadow-black/20"
              >
                Source Code <Github size={20} />
              </motion.a>

         
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Security;
