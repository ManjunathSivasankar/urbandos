import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Apply black when scrolled, white otherwise
  const textColorClass = isScrolled ? 'text-black' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-subtle border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div
            className={`flex-shrink-0 flex items-center space-x-2 cursor-pointer ${textColorClass}`}
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/logo.svg" 
              alt="UrbanDos Logo" 
              className="h-7 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className={`nav-link ${textColorClass}`}>Home</button>
            <button onClick={() => scrollToSection('categories')} className={`nav-link ${textColorClass}`}>Collection</button>
            <button onClick={() => scrollToSection('about')} className={`nav-link ${textColorClass}`}>About</button>
            <button onClick={() => scrollToSection('contact')} className={`nav-link ${textColorClass}`}>Contact</button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textColorClass} hover:text-grey transition-colors duration-200`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
       {isMobileMenuOpen && (
  <div className="md:hidden bg-white border-t border-border">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 text-black hover:text-grey transition-colors duration-200">Home</button>
      <button onClick={() => scrollToSection('categories')} className="block w-full text-left px-3 py-2 text-black hover:text-grey transition-colors duration-200">Collection</button>
      <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-black hover:text-grey transition-colors duration-200">About</button>
      <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-black hover:text-grey transition-colors duration-200">Contact</button>
    </div>
  </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
