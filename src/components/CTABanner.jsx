import React from 'react';
import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section className="py-32 bg-gradient-to-t from-black via-[#1a0505] to-black relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-card border border-white/5 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative">
          
          {/* Subtle pattern background inside card */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Join the Elite</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white font-bold mb-8 leading-tight">
              Begin Your <span className="italic">Signature</span> <br/>
              Journey Today.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
              The world of authentic luxury is just a click away. Curate your collection with India's most trusted perfume marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-orange-500 text-black font-bold rounded-full uppercase tracking-widest text-sm transition-all duration-300"
              >
                Shop Collection
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 border border-white/10 text-white font-bold rounded-full uppercase tracking-widest text-sm transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;
