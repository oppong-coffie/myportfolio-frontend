import heroImage from '../images/hero1.png';
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
        <div id='_home' className="bg-gray-800 text-white pt-20">
            {/* Hero Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6">
                {/* Text Content */}
                <div className="text-content">
                    <h1
                        data-aos="fade-right"
                        className="text-indigo-500 font-semibold text-xl sm:text-2xl lg:text-3xl mb-4"
                    >
                        My name is Emmanuel Oppong Coffie
                    </h1>
                    <h2
                        data-aos="fade-left"
                        className="font-bold text-2xl sm:text-4xl lg:text-6xl mb-6 text-yellow-200"
                    >
                        I am a FrontEnd Developer from Ghana
                    </h2>
                    <div
                        className="flex gap-6 mt-5"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Button
                            auto
                            className="bg-yellow-200 text-teal-700 px-6 py-3 rounded-lg hover:bg-yellow-300 transition-all shadow-md transform hover:scale-105"
                            >
                            <UserPen className="mr-2" />
                            Contact Me
                        </Button>
                        <Button
                            auto
                            className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-all shadow-md transform hover:scale-105"
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
                        className="w-[60%] md:w-[40%] rounded-xl mx-auto lg:ml-0 transform transition hover:rotate-3 hover:scale-110 duration-500"
                        src={heroImage}
                        alt="Hero"
                    />
                </div>
            </div>

            {/* Floating Elements */}
            <div
                className="floating-icons absolute top-16 right-16 hidden lg:block"
                data-aos="fade-down"
                data-aos-delay="500"
            >
                <SwitchCamera className="text-teal-500 w-10 h-10 animate-spin" />
            </div>
        </div>
    );
};

export default MainSection;
