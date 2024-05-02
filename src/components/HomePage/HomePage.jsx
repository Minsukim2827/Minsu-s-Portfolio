import React from 'react';
import Intro from './intro';
import { useTheme } from "@/components/NavBar/DarkMode/theme-provider"; // Ensure the path is correct

const HomePage = () => {
    const { theme } = useTheme(); // Using the useTheme hook to get the current theme

    // Determine the gradient classes based on the theme
    const gradientClass = theme === 'dark' 
        ? "bg-gradient-to-b from-inverted_cream-light to-inverted-peach-light" // Inverted gradient for dark mode
        : "bg-gradient-to-b from-cream-light to-peach-light"; // Normal gradient for light mode

    return (
        <div className={`${gradientClass} md:h-screen max-h-screen pt-20 lg:max-w-4/5 lg:mx-auto flex justify-center`}>
            <Intro />
        </div>
    );
};

export default HomePage;
