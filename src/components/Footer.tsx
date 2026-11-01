import React from 'react';
import { Instagram, Facebook, Linkedin, ArrowUp, Heart } from 'lucide-react';
import { BRAND_ASSETS } from '../constants/assets';
import { BRAND_CONFIG } from '../constants/config';
import { ImageWithFallback } from './ImageWithFallback';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About O\'CHOCO', href: '#about' },
    { name: 'Our Biscuits', href: '#showcase' },
    { name: 'Why You\'ll Love It', href: '#why-us' },
    { name: 'Lifestyle Experience', href: '#lifestyle' },
    { name: 'Brand Gallery', href: '#gallery' },
    { name: 'Distributor Inquiries', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#1A0906] text-[#FFF5E8] border-t border-[#592318] pt-16 pb-12 overflow-hidden">
      
      {/* Subtle Ambient Gold Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-20 bg-[#D99A32]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#592318]/50">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="h-10 sm:h-12 w-auto max-w-[200px]">
              <ImageWithFallback
                src={BRAND_ASSETS.logo.localSrc}
                fallbackSrc={BRAND_ASSETS.logo.remoteSrc}
                alt="O'CHOCO Logo"
                className="h-full w-auto object-contain brightness-105"
                showSkeleton={false}
              />
            </div>

            <p className="text-sm text-[#EBD8BD]/80 leading-relaxed max-w-sm">
              <strong className="text-[#FFF5E8]">O'CHOCO Rollay Biscuits</strong> by <strong className="text-[#D99A32]">PAPELÉE</strong>. Golden-brown chocolate-flavored spiral rollay biscuits created for everyday joy across Ethiopia.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#EBD8BD]/70">
              <span className="w-2 h-2 rounded-full bg-[#D99A32]" />
              <span>Available in retail stores & supermarkets nationwide</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#35140F] border border-[#592318] hover:border-[#D99A32] text-[#EBD8BD] hover:text-[#D99A32] flex items-center justify-center transition-colors"
                aria-label="Follow O'CHOCO on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#35140F] border border-[#592318] hover:border-[#D99A32] text-[#EBD8BD] hover:text-[#D99A32] flex items-center justify-center transition-colors"
                aria-label="Follow O'CHOCO on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#35140F] border border-[#592318] hover:border-[#D99A32] text-[#EBD8BD] hover:text-[#D99A32] flex items-center justify-center transition-colors"
                aria-label="Connect with O'CHOCO on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D99A32]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#EBD8BD]/80 hover:text-[#D99A32] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Placeholders */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D99A32]">
              Contact & Ethiopia Desk
            </h4>
            
            <div className="space-y-3 text-sm text-[#EBD8BD]/80">
              <p>
                <span className="text-[#D99A32] block text-xs font-semibold">Address</span>
                {BRAND_CONFIG.contact.address}
              </p>
              <p>
                <span className="text-[#D99A32] block text-xs font-semibold">Phone Inquiries</span>
                <a href={`tel:${BRAND_CONFIG.contact.phoneCallable}`} className="hover:text-[#FFF5E8] transition-colors">
                  {BRAND_CONFIG.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-[#D99A32] block text-xs font-semibold">Inquiries Email</span>
                <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="hover:text-[#FFF5E8] transition-colors">
                  {BRAND_CONFIG.contact.email}
                </a>
              </p>
              <p>
                <span className="text-[#D99A32] block text-xs font-semibold">WhatsApp Desk</span>
                <a
                  href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  Message us on WhatsApp
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EBD8BD]/60">
          <div>
            <p>
              © {new Date().getFullYear()} <strong className="text-[#FFF5E8]">O'CHOCO Rollay Biscuits</strong>. Brand identity by <strong className="text-[#D99A32]">PAPELÉE</strong>. All rights reserved. Ethiopia.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-[#D99A32] fill-[#D99A32]" />
              <span>for everyday biscuit moments</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-[#35140F] border border-[#592318] text-[#EBD8BD] hover:text-[#D99A32] hover:border-[#D99A32] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
