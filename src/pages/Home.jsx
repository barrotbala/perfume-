import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import BrandTrust from '../components/BrandTrust';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      <ProductShowcase />
      <Features />
      <BrandTrust />
      <Testimonials />
    </div>
  );
};

export default Home;
