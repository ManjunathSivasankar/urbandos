import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
/*import ComboOffers from '@/components/ComboOffers';*/
import Categories from '@/components/Categories';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
