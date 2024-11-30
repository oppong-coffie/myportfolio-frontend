import heroImage from '../images/file.png';
import '../css/MainSection.css';
import { SwitchCamera, DownloadCloud, UserPen } from 'lucide-react';
import { Button } from "@nextui-org/react";
import AOS from 'aos';
import React, { useState, useEffect } from 'react';

import 'aos/dist/aos.css';

const MainSection = () => {
    const [size, setSize] = useState('large'); // Default is 'middle'

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className="bg-slate-900 py-20">
            {/* Hero Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Text Content */}
                <div className="text-content">
                    <h1
                        data-aos="fade-right"
                        className="text-orange-600 font-semibold text-2xl md:text-3xl mb-4"
                    >
                        My name is Emmanuel Oppong Coffie
                    </h1>
                    <h2
                        data-aos="fade-left"
                        className="w-full md:w-3/4 font-bold text-blue-600 text-4xl md:text-6xl mb-6"
                    >
                        I am a FrontEnd Developer from Ghana
                    </h2>
                    <div
                        className="flex gap-10 mt-5"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Button
                            auto
                            className="bg-orange-600 text-white hover:bg-orange-700 transition-transform transform hover:scale-105 shadow-lg"
                        >
                            <UserPen className="mr-2" />
                            Contact Me
                        </Button>
                        <Button
                            auto
                            className="bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
                        >
                            <DownloadCloud className="mr-2" />
                            Download CV
                        </Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div
                    className="hero-image flex justify-center lg:justify-end w-full lg:w-1/2"
                    data-aos="zoom-in-left"
                >
                    <img
                        id="heroimage"
                        className="w-3/4 rounded-xl shadow-2xl transform transition hover:rotate-3 hover:scale-110 duration-500"
                        src={heroImage}
                        alt="Hero"
                    />
                </div>
            </div>

            {/* Floating Elements */}
            <div
                className="floating-icons absolute -top-10 right-10 hidden lg:block"
                data-aos="fade-down"
                data-aos-delay="500"
            >
                <SwitchCamera className="text-blue-600 w-12 h-12 animate-bounce" />
            </div>
        </div>
    );
};

export default MainSection;
