import React from 'react';
import { Mail } from 'lucide-react';

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
              <a href="mailto:manuiype1972@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg">
                  <Mail size={14} />
                </div>
                <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors">manuiype1972@gmail.com</span>
              </a>
              <a href="mailto:mohdfarhaan7852@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg">
                  <Mail size={14} />
                </div>
                <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors">mohdfarhaan7852@gmail.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-8 md:pt-0 flex flex-col gap-5">
              <h4 className="text-orange-500 font-playfair italic tracking-[0.2em] text-[10px] font-bold uppercase opacity-70">Connect</h4>
              {/* Instagram */}
              <a
                href="https://instagram.com/Frag_go"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
                title="Follow on Instagram"
              >
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors">@Frag_go</span>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/918900947852"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
                title="Chat on WhatsApp"
              >
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all shadow-lg flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors">+91 89009 47852</span>
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
