
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'
    }`}>
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rajesh R
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Projects
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Projects
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
