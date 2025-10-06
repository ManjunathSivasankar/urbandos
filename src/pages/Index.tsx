import React from 'react';
import Hero from '@/components/Hero';
/*import ComboOffers from '@/components/ComboOffers';*/
import Categories from '@/components/Categories';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CustomizedTees from '@/components/CustomizedTees';
import Footer from '@/components/Footer';

interface IndexProps {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>; // ✅ include this
}

const Index = ({ cart, setCart, setShowCart }: IndexProps) => {
  return (
    <div className="min-h-screen">
      {/* ❌ Removed Navbar here, because it's already in App.tsx */}
      <Hero />
      {/* <ComboOffers />*/}
      <Categories />
      <CustomizedTees cart={cart} setCart={setCart} setShowCart={setShowCart} /> {/* ✅ Pass props */}
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
