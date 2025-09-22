const Footer = () => {
  return (
    <footer className="bg-pure-black text-pure-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <img 
              src="/urbandos.svg" // Static path from public folder
              alt="URBANDOS Logo"
              className="mx-auto w-[280px] md:w-[400px] mb-6"
            />
          <p className="text-silver-light font-light tracking-wide mb-6">
            Premium streetwear for the modern urban lifestyle
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#hero" className="text-silver-light hover:text-pure-white transition-colors duration-200">
              Home
            </a>
            <a href="#categories" className="text-silver-light hover:text-pure-white transition-colors duration-200">
              Collection
            </a>
            <a href="#about" className="text-silver-light hover:text-pure-white transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-silver-light hover:text-pure-white transition-colors duration-200">
              Contact
            </a>
          </div>

          <div className="border-t border-grey-dark pt-8">
            <p className="text-silver-light font-light text-sm">
              © 2025 UrbanDos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;