import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  cartItemCount?: number;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ cartItemCount = 0, setShowCart }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section (works on homepage only)
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const textColorClass = isScrolled ? "text-black" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-subtle border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className={`flex-shrink-0 flex items-center space-x-2 cursor-pointer ${textColorClass}`}
            onClick={() => navigate("/")}
          >
            <img src="/logo.svg" alt="UrbanDos Logo" className="h-7 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "categories", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${textColorClass}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            {/* Desktop Cart */}
            <div
              className="relative cursor-pointer p-2"
              title="Cart"
              onClick={() => setShowCart(true)} // ✅ open cart drawer
            >
              <ShoppingCart size={24} className={textColorClass} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu & Cart */}
          <div className="md:hidden flex items-center space-x-4">
            <div
              className="relative cursor-pointer p-2"
              title="Cart"
              onClick={() => setShowCart(true)} // ✅ open cart drawer
            >
              <ShoppingCart size={24} className={textColorClass} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textColorClass} hover:text-gray-400 transition-colors duration-200`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["hero", "categories", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-black hover:text-gray-500 transition-colors duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
