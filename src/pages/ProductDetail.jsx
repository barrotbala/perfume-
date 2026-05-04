import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Droplets, Mountain, Flower2, Leaf, Trees, Wind, Citrus, Apple } from 'lucide-react';

const productDetails = {
  serose: {
    name: "SEROSE",
    tagline: "Extrait de Parfum • Blossom",
    image: "/images/p1.jpeg",
    description: "A masterful blend of Sichuan pepper and turmeric opening into a heart of rare roses. Earthy, floral, and warm.",
    notes: {
      top: [
        { name: "Sichuan Pepper", icon: <Flame size={20} /> },
        { name: "Turmeric", icon: <Mountain size={20} /> }
      ],
      middle: [
        { name: "May Rose", icon: <Flower2 size={20} /> },
        { name: "Bulgarian Rose", icon: <Flower2 size={20} /> },
        { name: "Turkish Rose", icon: <Flower2 size={20} /> }
      ],
      base: [
        { name: "Patchouli", icon: <Leaf size={20} /> },
        { name: "Tonka Bean", icon: <Sparkles size={20} /> }
      ]
    },
    accords: ["Rose", "Warm Spicy", "Patchouli", "Fresh Spicy", "Earthy", "Woody", "Floral", "Vanilla", "Herbal"]
  },
  crush: {
    name: "CRUSH / CARUSH",
    tagline: "Extrait de Parfum • Tropical",
    image: "/images/p2.jpeg",
    description: "A vibrant, tropical masterpiece that captures the essence of a sun-drenched paradise. Bold, fruity, and smoky.",
    notes: {
      top: [
        { name: "Bergamot", icon: <Citrus size={20} /> },
        { name: "Black Currant", icon: <Sparkles size={20} /> },
        { name: "Apple", icon: <Apple size={20} /> },
        { name: "Lemon", icon: <Citrus size={20} /> }
      ],
      middle: [
        { name: "Pineapple", icon: <Sparkles size={20} /> },
        { name: "Patchouli", icon: <Leaf size={20} /> },
        { name: "Moroccan Jasmine", icon: <Flower2 size={20} /> }
      ],
      base: [
        { name: "Birch", icon: <Trees size={20} /> },
        { name: "Musk", icon: <Wind size={20} /> },
        { name: "Oak Moss", icon: <Leaf size={20} /> },
        { name: "Cedarwood", icon: <Trees size={20} /> }
      ]
    },
    accords: ["Fruity", "Sweet", "Woody", "Leather", "Citrus", "Smoky", "Musky", "Tropical", "Fresh", "Mossy"]
  },
  flora: {
    name: "FLORA",
    tagline: "Extrait de Parfum • Blossom",
    image: "/images/p3.jpeg",
    description: "An elegant infusion of peony and mandarin, settled on a base of warm sandalwood and patchouli.",
    notes: {
      top: [
        { name: "Peony", icon: <Flower2 size={20} /> },
        { name: "Citruses", icon: <Citrus size={20} /> },
        { name: "Mandarin Orange", icon: <Citrus size={20} /> }
      ],
      middle: [
        { name: "Osmanthus", icon: <Flower2 size={20} /> },
        { name: "Rose", icon: <Flower2 size={20} /> }
      ],
      base: [
        { name: "Sandalwood", icon: <Trees size={20} /> },
        { name: "Patchouli", icon: <Leaf size={20} /> }
      ]
    },
    accords: ["Floral", "Citrus", "Fresh", "Rose", "Fruity", "Woody", "Patchouli", "Warm Spicy"]
  }
};

const NoteCard = ({ title, items, colorClass }) => (
  <div className="mb-12">
    <h3 className={`text-xl font-bold tracking-[0.3em] uppercase mb-8 pb-4 border-b border-gray-100 ${colorClass}`}>
      {title} Notes
    </h3>
    <div className="flex flex-wrap gap-6">
      {items.map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4 bg-gray-50 border border-gray-100 px-6 py-3 rounded-2xl group hover:bg-white hover:shadow-md transition-all cursor-default"
        >
          <div className={`${colorClass} group-hover:scale-110 transition-transform`}>
            {item.icon}
          </div>
          <span className="text-gray-800 text-sm font-bold tracking-widest uppercase">{item.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDetails[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="h-screen flex items-center justify-center text-gray-800">Product not found</div>;

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-black transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left: Sticky Image Container */}
          <div className="lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-[3.5rem] overflow-hidden bg-white border border-gray-100 p-4 shadow-xl"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto rounded-[2.8rem] shadow-sm"
              />
            </motion.div>
          </div>

          {/* Right: Detailed Content */}
          <div className="pt-8 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-600 font-bold tracking-[0.6em] uppercase text-xs mb-4 block">Signature Breakdown</span>
              <h1 className="text-6xl md:text-8xl font-bold text-[#111] font-playfair mb-4 leading-none uppercase tracking-tighter">
                {product.name}
              </h1>
              <p className="text-2xl text-orange-600 font-playfair italic mb-10">{product.tagline}</p>
              <p className="text-gray-600 text-lg font-medium leading-loose mb-16 max-w-2xl border-l-2 border-orange-200 pl-8 italic">
                {product.description}
              </p>

              {/* Notes Grid */}
              <div className="space-y-4">
                <NoteCard title="Top" items={product.notes.top} colorClass="text-yellow-600" />
                <NoteCard title="Middle" items={product.notes.middle} colorClass="text-orange-600" />
                <NoteCard title="Base" items={product.notes.base} colorClass="text-red-600" />
              </div>

              {/* Main Accords */}
              <div className="mt-16 pt-16 border-t border-gray-200">
                <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-8 text-gray-400">Main Accords</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
                  {product.accords.map((accord, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 shadow-sm group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-600 text-xs font-bold tracking-widest uppercase group-hover:text-black transition-colors">
                        {accord}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
