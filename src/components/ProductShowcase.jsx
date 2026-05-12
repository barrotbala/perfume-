import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'serose',
    name: 'SEROSE',
    tagline: 'Extrait de Parfum',
    category: 'Blossom',
    description: 'A masterful blend of Sichuan pepper and turmeric opening into a heart of rare roses.',
    image: '/images/p1.jpeg',
    accent: '#d4af37',
    bg: 'linear-gradient(135deg, #2d0a0a 0%, #1a0505 60%, #0d0000 100%)',
    badge: 'Bestseller',
    badgeColor: '#d4af37',
  },
  {
    id: 'crush',
    name: 'CRUSH',
    tagline: 'Extrait de Parfum',
    category: 'Tropical',
    description: 'A vibrant tropical masterpiece capturing the essence of a sun-drenched paradise.',
    image: '/images/p2.jpeg',
    accent: '#f97316',
    bg: 'linear-gradient(135deg, #fff8f0 0%, #fff3e0 60%, #fde8c8 100%)',
    badge: 'New Arrival',
    badgeColor: '#f97316',
    dark: false,
  },
  {
    id: 'flora',
    name: 'FLORA',
    tagline: 'Extrait de Parfum',
    category: 'Blossom',
    description: 'An elegant infusion of peony and mandarin, settled on a base of warm sandalwood.',
    image: '/images/p3.jpeg',
    accent: '#db2777',
    bg: 'linear-gradient(135deg, #fff9f9 0%, #fdf2f8 60%, #fce7f3 100%)',
    badge: 'Limited',
    badgeColor: '#db2777',
    dark: false,
  },
  {
    id: 'oud-dubai',
    name: 'OUD OF DUBAI',
    tagline: 'Eau de Parfum',
    category: 'Oriental',
    description: 'A rich oud-based fragrance with deep amber and wood notes evoking the spirit of Dubai.',
    image: '/images/p4.jpeg',
    accent: '#b8860b',
    bg: 'linear-gradient(135deg, #1c0e00 0%, #2d1500 60%, #1a0d00 100%)',
    badge: 'Exclusive',
    badgeColor: '#b8860b',
  },
  {
    id: 'silver-shade',
    name: 'SILVER SHADE',
    tagline: 'Eau de Parfum',
    category: 'Fresh Woody',
    description: 'A sleek, contemporary blend of crisp woods and subtle musk for a sophisticated presence.',
    image: '/images/p5.jpeg',
    accent: '#94a3b8',
    bg: 'linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 60%, #ffffff 100%)',
    badge: 'Signature',
    badgeColor: '#475569',
    dark: false,
  },
  {
    id: 'wave',
    name: 'WAVE',
    tagline: 'Eau de Parfum',
    category: 'Aquatic',
    description: 'One wave, endless impressions. A fresh oceanic burst with marine notes and a citrus heart.',
    image: '/images/p6.jpeg',
    accent: '#0ea5e9',
    bg: 'linear-gradient(135deg, #0c1b33 0%, #0f2d4a 60%, #0a1f35 100%)',
    badge: 'Cruelty Free',
    badgeColor: '#0ea5e9',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const ProductCard = ({ product, index }) => {
  const isDark = product.dark !== false;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl flex flex-col"
      style={{
        background: product.bg,
        boxShadow: `0 4px 30px rgba(0,0,0,0.12)`,
        minHeight: '420px',
      }}
    >
      {/* Badge */}
      <div
        className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
        style={{
          backgroundColor: product.badgeColor + '22',
          color: product.badgeColor,
          border: `1px solid ${product.badgeColor}55`,
        }}
      >
        {product.badge}
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 60%, ${product.accent}18 0%, transparent 70%)`,
        }}
      />

      {/* Image */}
      <div className="relative z-10 flex justify-center items-center pt-10 pb-4 px-6 flex-1">
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-48 w-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.35))',
          }}
        />
      </div>

      {/* Divider */}
      <div
        className="mx-6 mb-0 h-px opacity-20"
        style={{ backgroundColor: product.accent }}
      />

      {/* Info */}
      <div className="relative z-10 px-6 py-5">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.35em] mb-1"
          style={{ color: product.accent }}
        >
          {product.tagline} • {product.category}
        </p>
        <h3
          className="font-playfair font-bold text-2xl tracking-tight leading-tight mb-2 uppercase"
          style={{ color: isDark ? '#f5e6d3' : '#1a1a1a' }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs leading-relaxed mb-5 line-clamp-2"
          style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}
        >
          {product.description}
        </p>

        <Link to={`/product/${product.id}`}>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-between px-5 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300"
            style={{
              backgroundColor: product.accent + '18',
              border: `1px solid ${product.accent}44`,
              color: product.accent,
            }}
          >
            <span>Explore Fragrance</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <div id="collection" className="relative bg-[#FAF9F6] py-16 md:py-24">
      {/* Section Header */}
      <div className="py-4 text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-orange-600 font-playfair italic tracking-[0.3em] text-xs mb-3 block font-medium"
        >
          The Selection
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-playfair font-bold text-[#1a1a1a] tracking-tighter uppercase"
        >
          Signature Collection
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-sm text-gray-500 tracking-widest uppercase font-medium"
        >
          6 Exclusive Fragrances · Handcrafted for the Discerning
        </motion.p>
      </div>

      {/* 3×3 Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-14"
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">
          ✦ &nbsp; Crafted with Rare Ingredients &nbsp; ✦
        </p>
      </motion.div>
    </div>
  );
};

export default ProductShowcase;
