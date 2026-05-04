import React from 'react';
import { Mail, Phone, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/5 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          
          {/* Brand & Text */}
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#4a0411] p-2 rounded shadow-2xl">
                <img src="/images/logo1.jpeg" alt="FRAGGO" className="h-6 object-contain mix-blend-lighten" />
              </div>
              <span className="text-white font-playfair font-bold tracking-[0.4em] text-lg uppercase">FRAGGO</span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed text-base italic opacity-80">
              India’s premier destination for authentic luxury fragrances. <br/>
              Defining the art of scent for the modern connoisseur.
            </p>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center">
            {/* Minimal Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-lg">
                  <Mail size={16} />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white uppercase tracking-widest font-bold transition-colors">Support@fraggo.com</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-lg">
                  <Phone size={16} />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white uppercase tracking-widest font-bold transition-colors">Call Concierge</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="https://instagram.com/Frag_go" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-all transform hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-all transform hover:scale-110">
                <Shield size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-gray-600 uppercase tracking-[0.4em] font-bold">
            &copy; {new Date().getFullYear()} FRAGGO LUXURY. ALL RIGHTS RESERVED.
          </p>
          <a 
            href="https://prolync.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] text-orange-500/60 hover:text-orange-500 uppercase tracking-[0.3em] font-bold transition-colors"
          >
            Designed & Developed by Prolync
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
