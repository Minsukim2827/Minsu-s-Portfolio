import React from 'react';
import About from './About';
import { useTheme } from "@/components/NavBar/DarkMode/theme-provider"; 
import RenderModel from './RenderModel';
import Model from './Model';
import bg from '@/assets/stack/bg.png';
import TechCircle from './TechCircle';

const AboutPage = () => {
    const { theme } = useTheme();

    const gradientClass = theme === 'dark'
        ? "bg-gradient-to-b from-inverted_cream-light to-inverted-peach-light"
        : "bg-gradient-to-b from-cream-light to-peach-light";

    return (
        <div className={`${gradientClass} flex flex-col justify-center min-h-screen pt-16 overflow-hidden`}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <About />
            </div>
            <div className="w-full h-screen relative">
                <img src={bg} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 z-10 flex justify-center items-center">
                    <div style={{ width: '40vw', height: '40vw', position: 'absolute' }}>
                        <TechCircle />
                    </div>
                </div>
                <div className="absolute inset-0 z-20">
                    <RenderModel>
                        <Model />
                    </RenderModel>
                </div>
            </div>
        </div>
    );
};


export default AboutPage;
