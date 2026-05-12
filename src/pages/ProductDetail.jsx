import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const productDetails = {
  serose: {
    name: "SEROSE",
    tagline: "Extrait de Parfum • Blossom",
    image: "/images/p1.jpeg",
    description: "A masterful blend of Sichuan pepper and turmeric opening into a heart of rare roses. Earthy, floral, and warm.",
    notes: {
      top: [
        { name: "Sichuan Pepper", icon: "🌶️" },
        { name: "Turmeric", icon: "🫚" }
      ],
      middle: [
        { name: "May Rose", icon: "🌹" },
        { name: "Bulgarian Rose", icon: "🌹" },
        { name: "Turkish Rose", icon: "🌹" }
      ],
      base: [
        { name: "Patchouli", icon: "🌿" },
        { name: "Tonka Bean", icon: "🫘" }
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
        { name: "Bergamot", icon: "🍊" },
        { name: "Black Currant", icon: "🫐" },
        { name: "Apple", icon: "🍎" },
        { name: "Lemon", icon: "🍋" }
      ],
      middle: [
        { name: "Pineapple", icon: "🍍" },
        { name: "Patchouli", icon: "🌿" },
        { name: "Moroccan Jasmine", icon: "🌼" }
      ],
      base: [
        { name: "Birch", icon: "🌲" },
        { name: "Musk", icon: "🪨" },
        { name: "Oak Moss", icon: "🌱" },
        { name: "Cedarwood", icon: "🪵" }
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
        { name: "Peony", icon: "🌸" },
        { name: "Citruses", icon: "🍊" },
        { name: "Mandarin Orange", icon: "🍊" }
      ],
      middle: [
        { name: "Osmanthus", icon: "🌼" },
        { name: "Rose", icon: "🌹" }
      ],
      base: [
        { name: "Sandalwood", icon: "🪵" },
        { name: "Patchouli", icon: "🌿" }
      ]
    },
    accords: ["Floral", "Citrus", "Fresh", "Rose", "Fruity", "Woody", "Patchouli", "Warm Spicy"]
  },
  "oud-dubai": {
    name: "OUD OF DUBAI",
    tagline: "Eau de Parfum • Oriental",
    image: "/images/p4.jpeg",
    description: "A rich and opulent oud-based fragrance with deep amber and wood notes, evoking the timeless spirit of Dubai. Warm, mysterious, and utterly captivating.",
    notes: {
      top: [
        { name: "Amber", icon: "🟡" }
      ],
      middle: [
        { name: "Floral", icon: "🌸" },
        { name: "Sugar", icon: "🍯" }
      ],
      base: [
        { name: "Vanilla", icon: "🌾" },
        { name: "Musk", icon: "🪨" }
      ]
    },
    accords: ["Oud", "Amber", "Vanilla", "Floral", "Sweet", "Musk", "Warm", "Oriental", "Woody"]
  },
  "silver-shade": {
    name: "SILVER SHADE",
    tagline: "Eau de Parfum • Fresh Woody",
    image: "/images/p5.jpeg",
    description: "A sleek, contemporary fragrance with crisp fruits opening into a floral heart, settling on a sophisticated base of sandalwood and white musk. Clean, modern, and refined.",
    notes: {
      top: [
        { name: "Blackcurrant", icon: "🫐" },
        { name: "Plum", icon: "🍑" },
        { name: "Lemon", icon: "🍋" },
        { name: "Bergamot", icon: "🍋" }
      ],
      middle: [
        { name: "Rose", icon: "🌹" },
        { name: "Jasmine", icon: "🌼" },
        { name: "Iris", icon: "💜" }
      ],
      base: [
        { name: "Sandalwood", icon: "🪵" },
        { name: "Tonka Bean", icon: "🫘" },
        { name: "White Musk", icon: "🤍" },
        { name: "Cedarwood", icon: "🌲" }
      ]
    },
    accords: ["Fresh", "Fruity", "Floral", "Woody", "Musky", "Citrus", "Sweet", "Rose", "Clean", "Powdery"]
  },
  wave: {
    name: "WAVE",
    tagline: "Eau de Parfum • Aquatic",
    image: "/images/p6.jpeg",
    description: "One wave, endless impressions. A burst of oceanic freshness with sea salt and grapefruit, flowing into a floral heart of bay leaf and geranium, anchored by red amber and guaiac wood.",
    notes: {
      top: [
        { name: "Oceanic", icon: "🌊" },
        { name: "Sea Salt", icon: "🧂" },
        { name: "Grapefruit", icon: "🍊" }
      ],
      middle: [
        { name: "Bay Leaf", icon: "🍃" },
        { name: "Geranium", icon: "🌺" },
        { name: "Spices", icon: "🌶️" }
      ],
      base: [
        { name: "Red Amber", icon: "🟠" },
        { name: "Guaiac Wood", icon: "🪵" }
      ]
    },
    accords: ["Aquatic", "Fresh", "Marine", "Citrus", "Woody", "Floral", "Spicy", "Amber", "Clean", "Aromatic"]
  }
};

const noteColors = {
  top: { label: "Top Notes", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-500", badge: "bg-amber-100 text-amber-800" },
  middle: { label: "Heart Notes", bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", dot: "bg-rose-500", badge: "bg-rose-100 text-rose-800" },
  base: { label: "Base Notes", bg: "bg-stone-100", border: "border-stone-300", text: "text-stone-700", dot: "bg-stone-600", badge: "bg-stone-200 text-stone-800" },
};

const NoteSection = ({ type, items }) => {
  const c = noteColors[type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`rounded-3xl border p-6 mb-6 ${c.bg} ${c.border}`}
    >
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-5">
        <h3 className={`text-base font-playfair italic font-bold ${c.text}`}>
          {c.label}
        </h3>
      </div>

      {/* Note Pills */}
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.06, y: -2 }}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-sm border cursor-default transition-all duration-300 hover:shadow-md bg-white ${c.border}`}
          >
            <span className="text-2xl leading-none" role="img" aria-label={item.name}>
              {item.icon}
            </span>
            <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDetails[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return (
    <div className="h-screen flex flex-col items-center justify-center text-gray-800 gap-4">
      <span className="text-6xl">🔍</span>
      <p className="text-xl font-playfair font-bold">Product not found</p>
      <Link to="/" className="text-orange-600 text-sm font-bold uppercase tracking-widest hover:underline">← Back to Collection</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-black transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Sticky Image */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3.5rem] overflow-hidden bg-white border border-gray-100 p-4 shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-[2.8rem] shadow-sm"
              />
            </motion.div>

            {/* Accords below image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-black mb-5 text-gray-400">
                Main Accords
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.accords.map((accord, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#FAF9F6] border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-colors cursor-default"
                  >
                    {accord}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Details */}
          <div className="pt-4 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-600 font-black tracking-[0.6em] uppercase text-[10px] mb-4 block">
                Signature Breakdown
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-[#111] font-playfair mb-3 leading-none uppercase tracking-tighter">
                {product.name}
              </h1>
              <p className="text-xl text-orange-600 font-playfair italic mb-8">{product.tagline}</p>
              <p className="text-gray-600 text-base font-medium leading-loose mb-12 max-w-2xl border-l-2 border-orange-200 pl-6 italic">
                {product.description}
              </p>

              {/* Notes Sections */}
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-gray-400 border-b border-gray-100 pb-2">
                Fragrance Breakdown
              </h2>
              <NoteSection type="top" items={product.notes.top} />
              <NoteSection type="middle" items={product.notes.middle} />
              <NoteSection type="base" items={product.notes.base} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
