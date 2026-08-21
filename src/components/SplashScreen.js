import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Progress counter animation from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 800); // Allow fade-out animation to complete
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4; // Organic increment
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onFinish]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070b14] overflow-hidden select-none font-sans"
        >
          {/* Ambient Glowing Background Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
          <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[90px] animate-blob pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[90px] animate-blob [animation-delay:2s] pointer-events-none" />

          {/* Grid lines texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
              backgroundSize: `24px 24px`
            }}
          />

          {/* Core Animated Logo Container */}
          <div className="relative flex flex-col items-center">
            
            {/* Concentric Rotating Gradient Rings around public/logo.png */}
            <div className="relative flex items-center justify-center">
              
              {/* Outer Rotating Dash Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 rounded-full border-2 border-dashed border-indigo-500/40"
              />

              {/* Inner Reverse Rotating Glow Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 rounded-full border border-cyan-400/50 border-t-purple-500 border-r-transparent"
              />

              {/* Pulse Ripple Effect */}
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-md"
              />

              {/* Central Logo Box with Glassmorphism */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                className="relative w-28 h-28 rounded-full bg-white/10 backdrop-blur-md p-1.5 shadow-[0_0_40px_rgba(99,102,241,0.4)] border border-white/20 flex items-center justify-center overflow-hidden"
              >
                {/* Logo Image */}
                <motion.img
                  src="/logo.png"
                  alt="Logo"
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full object-cover rounded-full drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                />

                {/* Shimmer sweep effect */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                />
              </motion.div>
            </div>

            {/* Brand Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-white">
                OPPONG<span className="text-indigo-400">-COFFIE</span>
              </h1>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-1 font-medium">
                Digital Portfolio Experience
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ opacity: 0, width: "0px" }}
              animate={{ opacity: 1, width: "220px" }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col items-center"
            >
              {/* Bar track */}
              <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.8)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Percentage & Loading Status */}
              <div className="flex items-center justify-between w-56 mt-2 text-xs font-mono text-gray-400">
                <span className="text-indigo-300">
                  {progress < 100 ? "Initializing..." : "Ready"}
                </span>
                <span className="text-white font-bold">{Math.min(progress, 100)}%</span>
              </div>
            </motion.div>
          </div>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={handleSkip}
            className="absolute bottom-8 text-xs tracking-widest text-gray-400 hover:text-white uppercase py-1.5 px-4 rounded-full border border-white/10 hover:border-indigo-500/50 bg-white/5 backdrop-blur-sm transition-all"
          >
            Skip Intro →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
