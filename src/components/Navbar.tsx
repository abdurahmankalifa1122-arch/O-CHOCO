import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND_ASSETS } from '../constants/assets';
import { BRAND_CONFIG } from '../constants/config';
import { ImageWithFallback } from './ImageWithFallback';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Biscuits', href: '#showcase' },
    { name: 'Why O\'CHOCO', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2A0F0B]/90 backdrop-blur-md border-b border-[#D99A32]/20 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#1F0B08]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand Wordmark / Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A32]"
              aria-label="O'CHOCO Rollay Biscuits Home"
            >
              <div className="relative w-[100px] h-[40px] overflow-hidden flex items-center">
                <ImageWithFallback
                  src={BRAND_ASSETS.logo.localSrc}
                  fallbackSrc={BRAND_ASSETS.logo.remoteSrc}
                  alt="O'CHOCO Logo"
                  style={{ width: '100px', height: '40px' }}
                  className="w-[100px] h-[40px] object-contain brightness-105 transition-transform duration-300 group-hover:scale-105"
                  showSkeleton={false}
                />
              </div>
              <span className="hidden xl:inline-block text-[11px] font-medium tracking-widest uppercase text-[#D99A32]/80 border-l border-[#D99A32]/30 pl-3">
                Ethiopia
              </span>
            </a>

            {/* Zone 2: Navigation Links (single-line, clean typography) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[#EBD8BD] hover:text-[#D99A32] transition-colors relative py-1 group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D99A32] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(BRAND_CONFIG.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#EBD8BD] bg-[#592318]/60 hover:bg-[#592318] border border-[#D99A32]/30 hover:border-[#D99A32] rounded-lg transition-all"
                title="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#35140F] bg-gradient-to-r from-[#F0B24B] via-[#D99A32] to-[#C28322] hover:brightness-110 active:scale-95 transition-all shadow-md hover:shadow-[#D99A32]/25 cursor-pointer whitespace-nowrap"
              >
                <span>Inquire Now</span>
                <ArrowUpRight className="w-4 h-4 text-[#35140F]" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#EBD8BD] hover:text-[#D99A32] bg-[#592318]/50 border border-[#D99A32]/20 focus:outline-none focus:ring-2 focus:ring-[#D99A32]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-[#1F0B08]/85 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#35140F] border-l border-[#D99A32]/30 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6 pt-16">
            <div className="h-10 w-auto max-w-[170px]">
              <ImageWithFallback
                src={BRAND_ASSETS.logo.localSrc}
                fallbackSrc={BRAND_ASSETS.logo.remoteSrc}
                alt="O'CHOCO Logo"
                className="h-full w-auto object-contain"
                showSkeleton={false}
              />
            </div>

            <nav className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-[#FFF5E8] hover:text-[#D99A32] hover:bg-[#592318]/40 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#592318] space-y-3">
            <a
              href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(BRAND_CONFIG.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-bold text-[#35140F] bg-gradient-to-r from-[#F0B24B] to-[#D99A32] hover:brightness-110 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <p className="text-center text-xs text-[#EBD8BD]/60 pt-2">
              PAPELÉE · Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
