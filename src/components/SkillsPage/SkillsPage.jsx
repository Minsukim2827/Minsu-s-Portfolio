import React from 'react';
import { useTheme } from "@/components/NavBar/DarkMode/theme-provider";
import bg from '@/assets/stack/bg1.png'; 
import ParticlesComponent from './ParticlesComponent';
import ModelFrame from './ModelFrame';
import ImageCarousel from './ImageCarousel';

const SkillsPage = () => {
    const { theme } = useTheme();

    const gradientClass = theme === 'dark'
        ? "bg-gradient-to-b from-inverted_cream-light to-inverted-peach-light"
        : "bg-gradient-to-b from-cream-light to-peach-light";

    return (
        <div className={`${gradientClass} w-screen h-screen flex items-center justify-center relative bg-cover bg-no-repeat bg-center overflow-hidden pt-16`}
             style={{ backgroundImage: `url(${bg})` }}>
            <h1 className=" z-50 absolute top-1/2 left-0 transform -translate-y-1/2 pl-20" style={{ fontSize: '5cqw' }}>
                <span className="text-white">My </span>
                <span className="text-peach">Skills</span>
            </h1>
            <div className="absolute inset-0">
                <ParticlesComponent />
            </div>
            <div className="animate-spin-slow z-100">
            <ImageCarousel />
            </div>
            <div className="absolute">
            <ModelFrame />
            </div>
        </div>
    );
};

export default SkillsPage;

