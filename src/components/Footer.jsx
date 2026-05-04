import React from 'react';
import { Mail, Phone, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/5 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
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
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            {/* Emails */}
            <div className="space-y-4">
              <h4 className="text-orange-500 font-playfair italic tracking-[0.2em] text-[10px] font-bold uppercase mb-4 opacity-70">Enquiries</h4>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg">
                  <Mail size={14} />
                </div>
                <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors">manuiype1972@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg">
                  <Mail size={14} />
                </div>
                <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors">mohdfarhaan7852@gmail.com</span>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-4">
              <h4 className="text-orange-500 font-playfair italic tracking-[0.2em] text-[10px] font-bold uppercase mb-4 opacity-70">Concierge</h4>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg">
                  <Phone size={14} />
                </div>
                <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors">8900947852</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg">
                  <Phone size={14} />
                </div>
                <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors">+91 95318 95889</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 md:pt-0 flex md:flex-col space-x-6 md:space-x-0 md:space-y-6">
              <a href="https://instagram.com/Frag_go" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-all transform hover:scale-110">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-all transform hover:scale-110">
                <Shield size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold">
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
