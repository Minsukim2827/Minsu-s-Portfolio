import React, { useState } from 'react';
import { Menu, Code, CodeXml } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from "@/components/NavBar/DarkMode/theme-provider"; // Ensure the path is correct
import { ModeToggle } from './DarkMode/mode-toggle';

const NavMobile = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const textColorClass = theme === 'dark' ? "text-inverted_smokey" : "text-smokey";
  const backgroundColorClass = theme === 'dark' ? "bg-black" : "bg-gradient-to-b from-cream-light to-peach-light";

  return (
    <div className="flex justify-between items-center w-full px-4 ">
      <div className="flex items-center">
        <Code className="mr-2 w-10 h-10"/>
        <span className="font-bold text-2xl ">M.</span>
        <span className={`font-bold text-2xl text-peach-dark`}>folio</span>
        <CodeXml className="ml-2 w-10 h-10"/>
      </div>
      <div className="flex flex-row items-center gap-3">
        <ModeToggle />
        <Menu className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
      </div>
      {isOpen && (
        <div className={`absolute top-full right-0 w-full ${backgroundColorClass} bg-opacity-80 shadow-md flex flex-col items-start py-2`}>
          <Link to="/" className={`px-4 py-2 text-lg ${textColorClass}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className={`px-4 py-2 text-lg ${textColorClass}`} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className={`px-4 py-2 text-lg ${textColorClass}`} onClick={() => setIsOpen(false)}>Projects</Link>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
