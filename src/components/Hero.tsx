import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { BRAND_ASSETS } from '../constants/assets';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-24 overflow-hidden bg-gradient-to-b from-[#1F0B08] via-[#35140F] to-[#2B0F0B]"
    >
      {/* Golden Ambient Lighting Behind Product */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[900px] h-[400px] sm:h-[600px] lg:h-[700px] rounded-full pointer-events-none blur-3xl opacity-50 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(217, 154, 50, 0.35) 0%, rgba(89, 35, 24, 0.4) 45%, transparent 75%)',
          transform: `translate(-50%, -50%) translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 30}px, 0)`,
        }}
        aria-hidden="true"
      />

      {/* Floating Decorative Biscuit Spirals & Gold Shimmer Particles */}
      {!reducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          {/* Floating Spiral 1 (Top Left) */}
          <div
            className="absolute top-20 left-[8%] w-16 h-16 rounded-full border border-[#D99A32]/25 opacity-40 transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(${mousePosition.x * -25}px, ${mousePosition.y * -25}px, 0) rotate(15deg)`,
            }}
          >
            <div className="w-10 h-10 m-auto mt-2.5 rounded-full border border-dashed border-[#D99A32]/30" />
          </div>

          {/* Floating Spiral 2 (Top Right) */}
          <div
            className="absolute top-28 right-[10%] w-20 h-20 rounded-full border border-[#D99A32]/20 opacity-30 transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${mousePosition.x * 40}px, ${mousePosition.y * 40}px, 0) rotate(45deg)`,
            }}
          >
            <div className="w-12 h-12 m-auto mt-3.5 rounded-full border-2 border-dotted border-[#D99A32]/20" />
          </div>

          {/* Floating Warm Particle (Bottom Left) */}
          <div
            className="absolute bottom-24 left-[15%] w-12 h-12 rounded-full bg-gradient-to-tr from-[#D99A32]/10 to-[#592318]/30 blur-sm transition-transform duration-600 ease-out"
            style={{
              transform: `translate3d(${mousePosition.x * -35}px, ${mousePosition.y * -35}px, 0)`,
            }}
          />

          {/* Floating Biscuit Ring (Bottom Right) */}
          <div
            className="absolute bottom-32 right-[12%] w-24 h-24 rounded-full border-2 border-[#D99A32]/15 opacity-35 transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 30}px, 0) rotate(-20deg)`,
            }}
          >
            <div className="w-16 h-16 m-auto mt-3 rounded-full border border-dashed border-[#D99A32]/25" />
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 text-center lg:text-left space-y-6">
            
            {/* Quiet Unboxed Metadata (Zero-Pill Discipline) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-wider uppercase text-[#D99A32]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PAPELÉE Brand Identity</span>
              <span aria-hidden="true" className="text-[#592318]">·</span>
              <span>Ethiopia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#FFF5E8] leading-[1.12] text-balance">
              Make Every Moment{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0B24B] via-[#D99A32] to-[#FFF5E8]">
                Delicious.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#EBD8BD]/90 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Discover the irresistible taste of <strong className="text-[#FFF5E8] font-semibold">O'CHOCO Rollay Biscuits</strong>. A delightful chocolate-inspired biscuit experience made for your everyday moments.
            </p>

            {/* Taste & Identity Highlights */}
            <div className="pt-2 pb-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-[#EBD8BD]/80">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
                <span>Chocolate-Flavored Spirals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
                <span>Golden-Brown Rollay</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A32]" />
                <span>Rich Dark Cocoa Pack</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('showcase')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-[#35140F] bg-gradient-to-r from-[#F0B24B] via-[#D99A32] to-[#C28322] hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#D99A32]/20 cursor-pointer"
              >
                <span>Discover Our Biscuits</span>
                <ArrowRight className="w-4 h-4 text-[#35140F]" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-[#FFF5E8] bg-[#592318]/50 hover:bg-[#592318] border border-[#D99A32]/40 hover:border-[#D99A32] active:scale-95 transition-all cursor-pointer"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Refined Trust Strip */}
            <div className="pt-4 border-t border-[#592318]/40 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#EBD8BD]/70">
              <div>
                <span className="text-[#D99A32] font-semibold">Product:</span> Rollay Biscuits
              </div>
              <div aria-hidden="true" className="text-[#592318]">·</div>
              <div>
                <span className="text-[#D99A32] font-semibold">Origin:</span> Available across Ethiopia
              </div>
            </div>

          </div>

          {/* Right Column: 3D Product Visual Focal Point (Image 1) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center items-center">
            <div
              className="relative w-full max-w-xl lg:max-w-2xl transition-transform duration-500 ease-out"
              style={{
                perspective: '1200px',
                transform: reducedMotion
                  ? 'none'
                  : `rotateY(${mousePosition.x * 12}deg) rotateX(${mousePosition.y * -10}deg) translateZ(10px)`,
              }}
            >
              {/* Product Glow Frame */}
              <div className="relative group rounded-3xl p-3 sm:p-5 bg-gradient-to-br from-[#592318]/40 via-[#35140F]/60 to-[#1F0B08]/90 border border-[#D99A32]/30 shadow-2xl shadow-[#1F0B08]/90 backdrop-blur-sm">
                
                {/* Product Image (Image 1: Hero Asset) */}
                <div className="relative overflow-hidden rounded-2xl bg-[#1F0B08]/60">
                  <ImageWithFallback
                    src={BRAND_ASSETS.heroProduct.localSrc}
                    fallbackSrc={BRAND_ASSETS.heroProduct.remoteSrc}
                    alt="O'CHOCO Rollay Biscuits Hero Packaging and Golden Spiral Biscuits"
                    className="w-full h-auto object-contain max-h-[460px] sm:max-h-[520px] transition-transform duration-700 group-hover:scale-102"
                  />
                  
                  {/* Subtle Shading Gradient for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B08]/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Product Badge Overlay (Clean, Minimalist) */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-[#1F0B08]/85 backdrop-blur-md border border-[#D99A32]/30 rounded-2xl p-4 flex items-center justify-between shadow-xl">
                  <div>
                    <p className="text-[11px] font-bold tracking-wider uppercase text-[#D99A32]">
                      Signature Recipe
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#FFF5E8]">
                      O'CHOCO Rollay Biscuits
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] uppercase tracking-wider text-[#EBD8BD]/70">
                      Brand
                    </p>
                    <p className="text-sm font-semibold text-[#D99A32]">
                      PAPELÉE
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="text-xs uppercase tracking-widest text-[#EBD8BD]/60 hover:text-[#D99A32] flex flex-col items-center gap-1 focus:outline-none cursor-pointer"
          aria-label="Scroll to discover section"
        >
          <span>Discover</span>
          <ChevronDown className="w-4 h-4 text-[#D99A32] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
