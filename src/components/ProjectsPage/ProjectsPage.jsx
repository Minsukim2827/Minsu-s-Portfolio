import React from 'react';
import { useTheme } from "@/components/NavBar/DarkMode/theme-provider"; 
import Projects from './Projects';

function ProjectsPage() {
    const { theme } = useTheme(); 

    const gradientClass = theme === 'dark' 
        ? "bg-gradient-to-b from-inverted_cream-light to-inverted-peach-light" 
        : "bg-gradient-to-b from-cream-light to-peach-light"; 

    return (
        <div className={`${gradientClass} lg:max-w-4/5 min-h-screen lg:mx-auto flex justify-center pt-16`}>
            <Projects />
        </div>
    );
}

export default ProjectsPage;