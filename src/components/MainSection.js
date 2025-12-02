import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Button } from "@nextui-org/react";
import { DownloadCloud, UserPen, SwitchCamera, PenTool } from 'lucide-react';
import heroImage from '../images/rec.png';
import '../css/MainSection.css';
import heroImage2 from '../images/hero3.jpg';
import heroImage3 from '../images/logo2.jpg';


const TypewriterEffect = ({ roles }) => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!roles || roles.length === 0) return;
        
        const currentRole = roles[currentRoleIndex];
        let timer;

        if (!isDeleting && displayedText.length < currentRole.length) {
            // Typing
            timer = setTimeout(() => {
                setDisplayedText(currentRole.substring(0, displayedText.length + 1));
            }, 100);
        } else if (!isDeleting && displayedText.length === currentRole.length) {
            // Pause before deleting
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && displayedText.length > 0) {
            // Deleting
            timer = setTimeout(() => {
                setDisplayedText(currentRole.substring(0, displayedText.length - 1));
            }, 50);
        } else if (isDeleting && displayedText.length === 0) {
            // Move to next role
            setIsDeleting(false);
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [displayedText, isDeleting, currentRoleIndex, roles]);

    return (
        <span className="relative inline-block min-h-[1.2em]">
            {displayedText || '\u00A0'}
            <motion.span
                className="inline-block ml-1 text-secondary"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                |
            </motion.span>
        </span>
    );
};

const MainSection = () => {
    return (
        <div id='_home' className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <h1 className="text-gray-300 font-medium text-xl sm:text-2xl lg:text-3xl mb-4">
                        Hello, I'm <span className="text-white font-semibold">Emmanuel Oppong Coffie</span>
                    </h1>
                    <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
                        <span className="text-violet-500 bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            <TypewriterEffect roles={["Ai chatbot builder", "Frontend developer", "Project manager"]} />
                        </span>
                    </h2>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8 text-gray-300">
                        <div className="text-center">
                            <h3 className="font-bold text-3xl text-white">30+</h3>
                            <p className="text-sm">Projects</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-3xl text-white">3+</h3>
                            <p className="text-sm">Years Exp.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-3xl text-white">30+</h3>
                            <p className="text-sm">Clients</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Link to="contact" smooth={true} duration={500}>
                            <Button
                                auto
                                className="bg-primary text-white px-8 py-6 rounded-xl font-semibold text-lg hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all transform hover:scale-105"
                            >
                                <UserPen className="mr-2" />
                                Contact Me
                            </Button>
                        </Link>
                        <a href="/emma_cv.pdf" download="emma-CV.pdf">
                            <Button
                                auto
                                className="bg-white/10 text-white border border-white/20 px-8 py-6 rounded-xl font-semibold text-lg hover:bg-white/20 backdrop-blur-md transition-all transform hover:scale-105"
                            >
                                <DownloadCloud className="mr-2" />
                                Download CV
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Hero Images */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-lg">
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-[70%] rounded-2xl shadow-2xl border border-white/10 relative z-10"
                            src={heroImage2}
                            alt="Emmanuel"
                        />
                        <motion.img
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[-20px] right-0 w-[50%] rounded-2xl shadow-2xl border border-white/10 z-20"
                            src={heroImage3}
                            alt="Coding"
                        />

                        {/* Floating Icon */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-10 right-10 z-0 opacity-50"
                        >
                            <SwitchCamera className="text-secondary w-24 h-24" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MainSection;
