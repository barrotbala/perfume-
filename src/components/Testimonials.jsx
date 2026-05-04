import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sophia L.",
    role: "Collector",
    text: "A symphony of tropical notes that truly lasts. FRAGGO has set a new standard for authenticity in the luxury market. Every spray tells a story of origin."
  },
  {
    id: 2,
    name: "Marc J.",
    role: "Connoisseur",
    text: "The experience of this site is just a prelude to the depth of the fragrance. 'CRUSH' is an absolute masterpiece of balance and energy. Simply flawless."
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-16 bg-[#FDFCFB] relative overflow-hidden">
      {/* Light decorative accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-50/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-orange-600 font-playfair italic tracking-[0.3em] text-xs font-medium mb-6 block uppercase">The Experience</span>
            <h2 className="text-5xl md:text-7xl font-playfair text-[#111] font-bold tracking-tighter uppercase leading-none mb-12">
              Voices of <br/>
              <span className="italic font-normal text-orange-600">Excellence</span>
            </h2>
            
            <div className="flex gap-6">
              <button 
                onClick={() => setIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-600 hover:border-orange-600 transition-all duration-300 group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-600 hover:border-orange-600 transition-all duration-300 group"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Massive decorative quote mark in light theme */}
            <Quote className="text-orange-100/50 absolute -top-24 -left-20 w-48 h-48 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <p className="text-3xl md:text-4xl font-light text-gray-800 leading-[1.6] italic font-playfair mb-12 tracking-tight">
                  "{testimonials[index].text}"
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-orange-600" />
                  <div>
                    <h4 className="text-xl font-bold text-[#111] tracking-widest uppercase mb-1 font-playfair">{testimonials[index].name}</h4>
                    <span className="text-orange-600 font-playfair italic tracking-[0.2em] text-[10px] font-medium uppercase">{testimonials[index].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
