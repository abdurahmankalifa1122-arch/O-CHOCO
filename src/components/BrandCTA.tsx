import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../constants/config';

interface BrandCTAProps {
  onContactClick: () => void;
}

export const BrandCTA: React.FC<BrandCTAProps> = ({ onContactClick }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-[#250D0A] via-[#35140F] to-[#1F0B08] text-[#FFF5E8] overflow-hidden">
      
      {/* Concentric Golden Halo Lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-radial-gold opacity-80 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Biscuit Ring Outline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full border border-[#D99A32]/10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="w-[450px] sm:w-[620px] h-[450px] sm:h-[620px] m-auto mt-[50px] sm:mt-[65px] rounded-full border border-dashed border-[#D99A32]/15" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Quiet Subtitle */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D99A32]">
          <span>Everyday Ethiopian Biscuit Experience</span>
          <span aria-hidden="true" className="text-[#592318]">·</span>
          <span>PAPELÉE</span>
        </div>

        {/* Dramatic Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FFF5E8] tracking-tight leading-[1.15]">
          Ready for an{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0B24B] via-[#D99A32] to-[#FFF5E8]">
            O'CHOCO Moment?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-[#EBD8BD]/90 max-w-2xl mx-auto leading-relaxed">
          Discover O'CHOCO Rollay Biscuits and make your everyday moments more delightful. Available in stores and supermarkets across Ethiopia.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-base font-bold text-[#35140F] bg-gradient-to-r from-[#F0B24B] via-[#D99A32] to-[#C28322] hover:brightness-110 active:scale-95 transition-all shadow-2xl shadow-[#D99A32]/30 cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-5 h-5 text-[#35140F]" />
          </button>

          <a
            href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(BRAND_CONFIG.contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-[#FFF5E8] bg-[#592318]/50 hover:bg-[#592318] border border-[#D99A32]/40 hover:border-[#D99A32] active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Retail & Distributor Inquiries Tagline */}
        <p className="text-xs text-[#EBD8BD]/70 pt-4">
          Wholesale orders · Retail distribution · Supermarket inquiries throughout Ethiopia
        </p>

      </div>
    </section>
  );
};
