import React from 'react';
import About from './About';
import { useTheme } from "@/components/NavBar/DarkMode/theme-provider"; 

const AboutPage = () => {
    const { theme } = useTheme(); 

    const gradientClass = theme === 'dark'
        ? "bg-gradient-to-b from-inverted_cream-light to-inverted-peach-light" 
        : "bg-gradient-to-b from-cream-light to-peach-light"; 

    return (
        <div className={`${gradientClass} flex flex-col justify-center min-h-screen overflow-hidden pt-16`}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <About />
            </div>
        </div>
    );
};

export default AboutPage;
