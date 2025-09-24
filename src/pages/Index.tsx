import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ComboOffers from '@/components/ComboOffers';
import Categories from '@/components/Categories';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CustomizedTees from '@/components/CustomizedTees';
import Footer from '@/components/Footer';

interface IndexProps {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

const Index = ({ cart, setCart }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Navbar cartItemCount={cart.length} />
      <Hero />
      <ComboOffers />
      <Categories />
      <CustomizedTees cart={cart} setCart={setCart} /> {/* ✅ Pass props */}
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
