import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/NavBar/DarkMode/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Define classes based on the theme
  const buttonClass = theme === "dark"
    ? "bg-transparent text-white border border-white rounded-full hover:border-peach-dark hover:text-peach-dark"
    : "bg-transparent text-smokey border border-smokey rounded-full hover:border-inverted_smokey hover:text-inverted_smokey";


    
  return (
    <Button className={buttonClass} size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
