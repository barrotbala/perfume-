import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Citrus, Leaf, Flower2, Wind, Trees, Sparkles, Flame, Droplets, Mountain } from 'lucide-react';

const productsData = [
  {
    id: 'serose',
    name: "SEROSE",
    tagline: "Extrait de Parfum • Blossom",
    image: "/images/p1.jpeg",
    description: "A masterful blend of Sichuan pepper and turmeric opening into a heart of rare roses. Earthy, floral, and warm.",
    notes: {
      top: [
        { name: "Sichuan Pepper", icon: <Flame size={14} /> },
        { name: "Turmeric", icon: <Mountain size={14} /> }
      ],
      middle: [
        { name: "May Rose", icon: <Flower2 size={14} /> },
        { name: "Bulgarian Rose", icon: <Flower2 size={14} /> },
        { name: "Turkish Rose", icon: <Flower2 size={14} /> }
      ],
      base: [
        { name: "Patchouli", icon: <Leaf size={14} /> },
        { name: "Tonka Bean", icon: <Sparkles size={14} /> }
      ]
    },
    accords: ["Rose", "Warm Spicy", "Patchouli", "Fresh Spicy", "Earthy", "Woody", "Floral", "Vanilla", "Herbal"]
  },
  {
    id: 'crush',
    name: "CRUSH",
    tagline: "Extrait de Parfum • Tropical",
    image: "/images/p2.jpeg",
    description: "A vibrant, tropical masterpiece that captures the essence of a sun-drenched paradise. Bold, fruity, and smoky.",
    notes: {
      top: [
        { name: "Bergamot", icon: <Citrus size={14} /> },
        { name: "Black Currant", icon: <Sparkles size={14} /> },
        { name: "Apple", icon: <Apple size={14} /> },
        { name: "Lemon", icon: <Citrus size={14} /> }
      ],
      middle: [
        { name: "Pineapple", icon: <Sparkles size={14} /> },
        { name: "Patchouli", icon: <Leaf size={14} /> },
        { name: "Moroccan Jasmine", icon: <Flower2 size={14} /> }
      ],
      base: [
        { name: "Birch", icon: <Trees size={14} /> },
        { name: "Musk", icon: <Wind size={14} /> },
        { name: "Oak Moss", icon: <Leaf size={14} /> },
        { name: "Cedarwood", icon: <Trees size={14} /> }
      ]
    },
    accords: ["Fruity", "Sweet", "Woody", "Leather", "Citrus", "Smoky", "Musky", "Tropical", "Fresh", "Mossy"]
  },
  {
    id: 'flora',
    name: "FLORA",
    tagline: "Extrait de Parfum • Blossom",
    image: "/images/p3.jpeg",
    description: "An elegant infusion of peony and mandarin, settled on a base of warm sandalwood and patchouli. Sophisticated and fresh.",
    notes: {
      top: [
        { name: "Peony", icon: <Flower2 size={14} /> },
        { name: "Citruses", icon: <Citrus size={14} /> },
        { name: "Mandarin Orange", icon: <Citrus size={14} /> }
      ],
      middle: [
        { name: "Osmanthus", icon: <Flower2 size={14} /> },
        { name: "Rose", icon: <Flower2 size={14} /> }
      ],
      base: [
        { name: "Sandalwood", icon: <Trees size={14} /> },
        { name: "Patchouli", icon: <Leaf size={14} /> }
      ]
    },
    accords: ["Floral", "Citrus", "Fresh", "Rose", "Fruity", "Woody", "Patchouli", "Warm Spicy"]
  }
];

const NoteSection = ({ title, items, colorClass }) => (
  <div className="mb-8">
    <h5 className={`text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-50`}>{title} Notes</h5>
    <div className="flex flex-wrap gap-3">
      {items.map((note, i) => (
        <div key={i} className={`flex items-center gap-2.5 bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-sm hover:border-orange-200 transition-colors`}>
          <span className={colorClass}>{note.icon}</span>
          <span className="text-[#333] text-[10px] font-bold tracking-wider uppercase">{note.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const FeaturedProduct = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = productsData[activeTab];

  return (
    <section className="py-32 bg-white relative z-20 overflow-hidden">
      {/* Soft color splashes */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Olfactory Heritage</span>
            <h2 className="text-5xl md:text-8xl font-bold text-[#111] font-playfair tracking-tighter leading-none mb-6 uppercase">
              Signature <br/>
              <span className="text-orange-600 italic">Breakdown</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4 p-2 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner">
            {productsData.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-3.5 rounded-2xl text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
                  activeTab === idx ? 'bg-white text-orange-600 shadow-md scale-105' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-orange-500/5 blur-2xl rounded-[4rem] group-hover:bg-orange-500/10 transition-colors"></div>
              <motion.div 
                className="relative z-10 bg-white rounded-[3.5rem] p-4 shadow-2xl border border-gray-50 overflow-hidden aspect-square lg:aspect-auto lg:h-[700px]"
              >
                <img 
                  src={current.image} 
                  alt={current.name} 
                  className="w-full h-full object-cover rounded-[2.8rem]"
                />
              </motion.div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 pt-8 lg:pt-16">
              <div className="mb-16">
                <h3 className="text-6xl md:text-8xl font-bold text-[#111] mb-4 tracking-tighter font-playfair uppercase">{current.name}</h3>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-orange-600"></div>
                  <h4 className="text-xl text-orange-600 font-playfair italic uppercase tracking-widest">{current.tagline}</h4>
                </div>
                <p className="text-gray-500 font-light leading-loose text-lg max-w-2xl">
                  {current.description}
                </p>
              </div>

              {/* Notes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 mb-16">
                <div className="md:col-span-7">
                  <NoteSection title="Top" items={current.notes.top} colorClass="text-yellow-500" />
                  <NoteSection title="Middle" items={current.notes.middle} colorClass="text-orange-500" />
                  <NoteSection title="Base" items={current.notes.base} colorClass="text-red-500" />
                </div>
                
                <div className="md:col-span-5 border-l border-gray-100 pl-10 mt-12 md:mt-0">
                  <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-[#111]">Main Accords</h5>
                  <div className="space-y-5">
                    {current.accords.map((accord, i) => (
                      <div key={i} className="flex items-center justify-between group">
                        <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-orange-600 transition-colors">{accord}</span>
                        <div className="w-2 h-2 rounded-full border border-orange-500 group-hover:bg-orange-500 transition-all"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                <span className="text-gray-400 text-[10px] font-medium tracking-[0.3em] uppercase italic">Crafted by FRAGGO Master Perfumers</span>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
                    <Droplets size={16} />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedProduct;
