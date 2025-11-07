import heroImage from '../images/rec.png';
import heroImage2 from '../images/hero3.jpg';
import '../css/MainSection.css';
import { SwitchCamera, DownloadCloud, UserPen } from 'lucide-react';
import { Button } from "@nextui-org/react";
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';


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
        <div id='_home' className="bg-indigo-950 text-white pt-20">
            {/* Hero Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6">
                {/* Text Content */}
                <div className="text-content">
                    <h1
                        data-aos="fade-right"
                        className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl mb-4"
                    >
                        My name is Emmanuel Oppong Coffie
                    </h1>
                    <h2
                        data-aos="fade-left"
                        className="font-bold text-2xl sm:text-4xl lg:text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#FFFFFF]"
                        >
                        A FRONTEND DEVELOPER AND AI BOT BUILDER
                    </h2>
                    <div className='flex gap-12'>
                        <div className=''>
                            <h2 className='font-bold text-5xl text-center'>30+</h2> <h1>Projects</h1>
                        </div>
                        <div className=''>
                            <h2 className='font-bold text-5xl text-center'>3+</h2> <h1>Experience</h1>
                        </div>
                        <div className=''>
                            <h2 className='font-bold text-5xl text-center'>30+</h2> <h1>satisfied costomers</h1>
                        </div>
                     
                    </div>
                    <div
                        className="flex gap-6 mt-5"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <a href='#contact'
                             >
                        <Button
                            auto
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-all shadow-md transform hover:scale-105"
                            >
                            <UserPen className="mr-2" />
                            Contact Me
                        </Button>
             
                        </a>
                        <a 
    href="/emma_cv.pdf" 
    download="emma-CV.pdf"
    className="inline-block"
>
    <Button
        auto
        className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-all shadow-md transform hover:scale-105"
    >
        <DownloadCloud className="mr-2" />
        Download CV
    </Button>
</a>

                       
                    </div>
                    
                </div>

                {/* Hero Image */}
                <div
                    className="hero-image flex justify-center lg:justify-end w-full lg:w-1/2"
                    data-aos="zoom-in-left"
                >
                    <img
                        id="heroimage"
                        className="w-[60%] hidden md:block md:w-[40%] rounded-xl mx-auto mr[-32px] transform transition hover:rotate-3 hover:scale-110 duration-500"
                        src={heroImage}
                        alt="Hero"
                    />
                    <img
                        id="heroimage"
                        className="w-72 rounded-xl mx-auto md:mr-16 transform transition hover:rotate-3 hover:scale-110 duration-500"
                        src={heroImage2}
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
