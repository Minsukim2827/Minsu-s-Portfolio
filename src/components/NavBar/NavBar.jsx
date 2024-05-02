import React from 'react';
import { Code, CodeXml } from 'lucide-react';
import { ModeToggle } from './DarkMode/mode-toggle';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useTheme } from "@/components/NavBar/DarkMode/theme-provider"; // Ensure the path is correct

const Navbar = () => {
  const { theme } = useTheme(); // Using the useTheme hook to get the current theme

  // Determine the text color classes based on the theme
  const textColorClass = theme === 'dark' ? "text-inverted_smokey" : "text-smokey";

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 bg-none shadow-md">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Code className="mr-2 w-10 h-10"/>
            <span className="font-bold text-2xl hover:text-peach-dark">M.</span>
            <span className={`font-bold text-2xl text-peach-dark hover:text-smokey`}>folio</span>
            <CodeXml className="ml-2 w-10 h-10"/>
          </div>
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
    </nav>
  );
};

export default Navbar;
