import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandTrust = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for background image — moves slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background image with parallax - high transparency for light theme */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{ y: bgY }}
      >
        <img
          src="/images/trust-bg.png"
          alt="Brand Heritage Background"
          className="w-full h-full object-cover blur-sm"
          style={{ minHeight: '120%', top: '-10%', position: 'absolute' }}
        />
      </motion.div>

      {/* Light cinematic overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white via-transparent to-white" />

      {/* Text content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div style={{ opacity: textOpacity, scale: textScale }}>
          <span className="text-orange-600 font-playfair italic tracking-[0.3em] text-xs font-medium mb-8 block uppercase">
            Uncompromising Heritage
          </span>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-[#1a1a1a] mb-12 uppercase tracking-tighter leading-none">
            Where Fragrance <br />
            <span className="italic font-normal text-orange-600">Meets Trust</span>.
          </h2>

          <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full max-w-xs mx-auto mb-12 opacity-30 shadow-sm" />

          <p className="text-gray-600 text-sm md:text-base font-medium max-w-2xl mx-auto leading-loose tracking-[0.2em] uppercase italic">
            At FRAGGO, we define a legacy of authenticity, sourced directly from the world's most pristine origins.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandTrust;
