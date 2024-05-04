import React from 'react';
import About from './About';

import { useTheme } from "@/components/NavBar/DarkMode/theme-provider"; 

const AboutPage = () => {
    const { theme } = useTheme(); 

    // Determine the gradient classes based on the theme
    const gradientClass = theme === 'dark'
        ? "bg-gradient-to-b from-inverted_cream-light to-inverted-peach-light" 
        : "bg-gradient-to-b from-cream-light to-peach-light"; 

    return (
        <div className={`${gradientClass} h-screen pt-16 flex justify-center overflow-hidden`}>
            <div className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <About />
               
            </div>
        </div>
    );
};

export default AboutPage;
