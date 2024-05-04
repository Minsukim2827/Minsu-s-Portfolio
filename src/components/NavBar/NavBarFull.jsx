import React from 'react';
import { Code, CodeXml } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useTheme } from "@/components/NavBar/DarkMode/theme-provider"; 
import { ModeToggle } from './DarkMode/mode-toggle'; 

const NavBarFull = () => {
  const { theme } = useTheme(); 


  const textColorClass = theme === 'dark' ? "text-inverted_smokey" : "text-smokey";

  return (
    <div className="max-w-7xl mx-auto w-full">
        
      <div className="flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center">
          <Code className="mr-2 w-10 h-10"/>
          <span className="font-bold text-2xl hover:text-peach-dark">M.</span>
          <span className={`font-bold text-2xl text-peach-dark hover:text-smokey`}>folio</span>
          <CodeXml className="ml-2 w-10 h-10"/>
        </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="navHover" className="bg-transparent font-bold">
            <Link to="/" className={`text-lg ${textColorClass} hover:text-peach-dark`}>
              Home
            </Link>
          </Button>

          <Button variant="navHover" className="bg-transparent font-bold">
            <Link to="/about" className={`text-lg ${textColorClass} hover:text-peach-dark`}>
              About
            </Link>
          </Button>

          <Button variant="navHover" className="bg-transparent font-bold">
            <Link to="/projects" className={`text-lg ${textColorClass} hover:text-peach-dark`}>
              Projects
            </Link>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBarFull;
