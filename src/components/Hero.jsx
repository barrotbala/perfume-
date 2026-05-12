import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Cinematic Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10" />
        <img
          src="/images/hero-bg.png"
          alt="Cinematic Background"
          className="w-full h-full object-cover opacity-65 transition-opacity duration-1000"
        />
      </div>

      {/* Simplified Navigation Bar - Logo Only */}
      <nav className="absolute top-0 left-0 w-full z-50 px-8 md:px-16 py-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-[#4a0411] p-2 rounded shadow-2xl">
            <img src="/images/logo1.jpeg" alt="FRAGGO Logo" className="h-16 object-contain mix-blend-lighten" />
          </div>
          <span className="text-white font-playfair font-bold tracking-[0.4em] text-sm uppercase">FRAGGO</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-center text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Brand Line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[1px] bg-orange-500 block opacity-50" />
            <span
              className="font-playfair italic font-medium tracking-[0.2em] text-sm"
              style={{
                background: 'linear-gradient(90deg, #f97316, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              FRAGGO — Where Fragrance Meets Trust
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-playfair font-bold leading-[1.05] tracking-tight mb-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="block text-5xl md:text-7xl lg:text-8xl"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f5e6d3 50%, #f97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              India's First Dedicated
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="block italic font-normal text-5xl md:text-7xl lg:text-8xl"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ea580c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Marketplace
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="block text-5xl md:text-7xl lg:text-8xl"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f5e6d3 60%, #f97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              for Authentic Perfumes
            </motion.span>
          </h1>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/50 text-sm md:text-base font-light tracking-[0.3em] uppercase italic leading-relaxed max-w-lg"
          >
            Curating the pure essence of luxury heritage.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
