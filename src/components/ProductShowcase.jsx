import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'serose',
    name: "SEROSE",
    tagline: "Extrait de Parfum • Blossom",
    description: "A masterful blend of Sichuan pepper and turmeric opening into a heart of rare roses. Earthy, floral, and warm.",
    image: "/images/p1.jpeg",
    bgImage: "/images/trust-bg.png",
    cardBg: "bg-gradient-to-br from-[#450a0a] via-[#1a0505] to-black", 
    accentColor: "text-red-500",
    titleColor: "bg-gradient-to-r from-[#f5e6d3] to-[#d4af37] bg-clip-text text-transparent",
    subtextColor: "text-[#d1d1d1]",
    borderColor: "border-red-900/30",
    glowColor: "shadow-[0_0_80px_rgba(139,0,0,0.4)]",
    btnHover: "hover:bg-red-800",
    keywords: ["Rare Roses", "Earthy", "Warm"],
  },
  {
    id: 'crush',
    name: "CRUSH",
    tagline: "Extrait de Parfum • Tropical",
    description: "A vibrant, tropical masterpiece that captures the essence of a sun-drenched paradise. Bold, fruity, and smoky.",
    image: "/images/p2.jpeg",
    bgImage: "/images/crush-bottle.png",
    cardBg: "bg-[#FFFBF5]",
    accentColor: "text-orange-600",
    titleColor: "text-[#111]",
    subtextColor: "text-gray-500",
    borderColor: "border-orange-100/50",
    glowColor: "shadow-[0_0_80px_rgba(249,115,22,0.2)]",
    btnHover: "hover:bg-orange-600",
    keywords: ["Tropical", "Bold", "Fruity"],
  },
  {
    id: 'flora',
    name: "FLORA",
    tagline: "Extrait de Parfum • Blossom",
    description: "An elegant infusion of peony and mandarin, settled on a base of warm sandalwood and patchouli.",
    image: "/images/p3.jpeg",
    bgImage: "/images/p3.jpeg",
    cardBg: "bg-gradient-to-br from-[#FFF9F9] via-[#FDF2F8] to-[#FEF9C3]", // Cream to Floral Pink to Light Gold
    accentColor: "text-[#db2777]", // Deep pink
    titleColor: "bg-gradient-to-r from-[#d4af37] via-[#db2777] to-[#d4af37] bg-clip-text text-transparent",
    subtextColor: "text-gray-600",
    borderColor: "border-pink-100",
    glowColor: "shadow-[0_0_80px_rgba(219,39,119,0.25)]",
    btnHover: "hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#db2777]",
    keywords: ["Peony", "Mandarin", "Elegant"],
  }
];

const ProductCard = ({ product, index }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Highlight logic for description
  const renderDescription = (text, keywords, accentColor) => {
    let parts = [text];
    keywords.forEach(keyword => {
      let newParts = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const split = part.split(keyword);
          for (let i = 0; i < split.length; i++) {
            newParts.push(split[i]);
            if (i < split.length - 1) newParts.push(<span key={keyword + i} className={`${accentColor} font-bold`}>{keyword}</span>);
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    return parts;
  };

  return (
    <div ref={cardRef} className="py-4 md:py-6 px-4 md:px-8">
      <div className={`relative max-w-7xl mx-auto overflow-hidden rounded-[4rem] md:rounded-[6rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] ${product.cardBg}`}>
        {/* Parallax Background Image / Pattern */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-[0.12]"
          style={{ y: bgY }}
        >
          <img 
            src={product.bgImage} 
            alt="" 
            className={`w-full h-full object-cover blur-3xl`}
            style={{ minHeight: '120%', top: '-10%', position: 'absolute' }}
          />
        </motion.div>
        
        {/* Extra Decorative layer for Flora floating patterns */}
        {product.id === 'flora' && (
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/floral-paper.png')] opacity-10"
          />
        )}

        {/* Card Content Wrapper */}
        <div className="relative z-10 px-8 md:px-24 py-12 md:py-20">
          <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
            
            {/* Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <span className={`font-playfair italic tracking-[0.3em] text-xs mb-4 block font-medium ${product.accentColor}`}>
                Signature Collection
              </span>
              <h2 className={`text-5xl md:text-8xl font-bold mb-4 font-playfair uppercase tracking-tighter leading-none ${product.titleColor}`}>
                {product.name}
              </h2>
              <h3 className={`text-xl font-playfair italic mb-8 opacity-80 ${product.accentColor}`}>
                {product.tagline}
              </h3>
              <p className={`${product.subtextColor} text-base md:text-lg mb-10 font-medium leading-loose tracking-wide max-w-xl italic`}>
                {renderDescription(product.description, product.keywords, product.accentColor)}
              </p>
              <Link 
                to={`/product/${product.id}`}
                className="inline-block"
              >
                <div className={`px-12 py-4 bg-[#111] text-white text-[10px] font-bold uppercase tracking-[0.4em] ${product.btnHover} transition-all duration-500 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1`}>
                  Explore Fragrance
                </div>
              </Link>
            </motion.div>

            {/* Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0]
              }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 1.2 },
                scale: { duration: 1.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative group">
                {/* Glow layer */}
                <div className={`absolute -inset-10 blur-[80px] opacity-40 rounded-full transition-all duration-700 group-hover:opacity-60 ${product.glowColor.replace('shadow-[', 'bg-').replace(']', '')}`} />
                
                <div className={`relative p-3 rounded-[3.5rem] bg-white/40 backdrop-blur-sm border ${product.borderColor} ${product.glowColor} transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_50px_150px_rgba(0,0,0,0.2)]`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-[40vh] md:h-[55vh] w-auto object-cover rounded-[3rem] transition-transform duration-[2s]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <div id="collection" className="relative bg-[#FAF9F6] py-8 md:py-12">
      <div className="py-8 text-center">
        <span className="text-orange-600 font-playfair italic tracking-[0.3em] text-xs mb-2 block font-medium">The Selection</span>
        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#1a1a1a] tracking-tighter uppercase">Signature Collection</h2>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
