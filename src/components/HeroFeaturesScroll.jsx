import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Hero from './Hero';
import Features from './Features';
import ProductShowcase from './ProductShowcase';

const HeroFeaturesScroll = () => {
  const containerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  
  // Track scroll progress across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track when the container is in view to toggle fixed positioning
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0 && latest <= 0.95) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  // Bottle Transformations for the 3D Effect
  // Hero -> Features -> Start of Product Showcase
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.7, 0.9, 1], [0, 1.2, 1, 0.9, 0.6, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.7, 0.85], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#0a0a0a]">
      
      {/* 
        3D Bottle Overlay 
        Restored and optimized for the dark cinematic theme.
        Using mix-blend-screen ensures the black background of the image disappears into the dark sections.
      */}
      <div 
        className="fixed top-0 left-0 h-screen w-full overflow-hidden pointer-events-none flex items-center justify-center z-[100]"
        style={{
          display: isFixed ? 'flex' : 'none'
        }}
      >
        <motion.div 
          className="relative flex items-center justify-center w-full h-full max-w-lg"
          style={{ 
            scale, 
            rotateY,
            rotateZ,
            opacity,
            perspective: "1500px"
          }}
        >
          {/* Subtle Glow to separate from background */}
          <div className="absolute w-80 h-80 bg-white/5 blur-[100px] rounded-full"></div>
          
          <img 
            src="/images/crush-bottle.png" 
            alt="3D Perfume Bottle" 
            className="w-auto h-[65vh] object-contain"
            style={{ 
              mixBlendMode: 'screen', // This perfectly removes the black background of the image
              filter: 'brightness(1.1) contrast(1.2)'
            }}
          />
        </motion.div>
      </div>

      {/* The actual sections */}
      <div className="relative z-10">
        <section className="min-h-screen"><Hero /></section>
        <section className="min-h-screen"><Features /></section>
        <ProductShowcase />
      </div>

    </div>
  );
};

export default HeroFeaturesScroll;
