import { ChevronDown, Instagram } from 'lucide-react';
import hero from '@/assets/hero.jpg';

const Hero = () => {
  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/urban.dos/', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={hero} 
          alt="UrbanDos Premium Clothing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 fade-in">
        <img 
          src="/urbandos.svg" // Static path from public folder
          alt="URBANDOS Logo"
          className="mx-auto w-[280px] md:w-[400px] mb-6"
        />
        <p className="text-xl md:text-2xl font-light tracking-wide text-gray-200 mb-12 max-w-2xl mx-auto">
          Streetwear redefined <br/>Customised Tees at affordable prices.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToCategories}
            className="hero-button group bg-black text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-500 ease-in-out hover:bg-white hover:text-black border border-black"
          >
            EXPLORE COLLECTION
          </button>

          <button 
            onClick={openInstagram}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-500 ease-in-out hover:bg-pink-700"
          >
            <Instagram size={18} />
            Follow on Instagram
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToCategories}
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
