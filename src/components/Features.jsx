import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Features = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth line growth
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const features = [
    {
      number: "01",
      title: "Global Sourcing",
      desc: "Our master perfumers travel the globe to source the rarest, most exquisite ingredients from pristine origins. We believe true luxury starts at the source.",
      side: "left"
    },
    {
      number: "02",
      title: "Vetted Origins",
      desc: "Every single drop is verified for 100% brand authenticity, ensuring you receive the pure essence of luxury. Trust is our most precious ingredient.",
      side: "right"
    },
    {
      number: "03",
      title: "Pure Essence",
      desc: "Highly concentrated formulations crafted for a lasting legacy and an unforgettable olfactory journey. Experience fragrances that linger in memory.",
      side: "left"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-12 bg-[#F9F7F2] overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')]" />

      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-600 font-playfair italic tracking-[0.3em] text-xs mb-2 block font-medium">Our Quality</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] font-playfair tracking-tighter leading-none uppercase mb-6">
            The Essence of <span className="italic font-normal text-orange-600">Excellence</span>
          </h2>
          
          {/* The "Center One Line" Start */}
          <div className="flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* The Animated Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-black/5 hidden md:block" />
        <motion.div 
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 origin-top hidden md:block"
          style={{ scaleY }}
        />

        <div className="space-y-16 md:space-y-24 relative">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full`}>
              {/* Left Content */}
              <div className={`w-full md:w-[45%] ${feature.side === 'left' ? 'text-left md:text-right' : 'md:opacity-0 pointer-events-none'}`}>
                {feature.side === 'left' && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    <span className="text-orange-600 font-playfair italic text-3xl mb-2 block font-medium">{feature.number}</span>
                    <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4 uppercase tracking-widest font-playfair">{feature.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-loose font-medium tracking-wide italic">
                      {feature.desc}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Center Dot */}
              <div className="relative z-10 my-4 md:my-0">
                <motion.div 
                  className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
              </div>

              {/* Right Content */}
              <div className={`w-full md:w-[45%] ${feature.side === 'right' ? 'text-left' : 'md:opacity-0 pointer-events-none'}`}>
                {feature.side === 'right' && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    <span className="text-orange-600 font-playfair italic text-3xl mb-2 block font-medium">{feature.number}</span>
                    <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4 uppercase tracking-widest font-playfair">{feature.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-loose font-medium tracking-wide italic">
                      {feature.desc}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur Orbs - Lighter Versions */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-orange-200/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Features;
