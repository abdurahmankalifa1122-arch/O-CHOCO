import React from 'react';
import { Sparkles, Cookie, Heart, Layers } from 'lucide-react';
import { BRAND_ASSETS } from '../constants/assets';
import { ImageWithFallback } from './ImageWithFallback';

export const Discover: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#2B0F0B] via-[#35140F] to-[#250D0A] overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 bg-[#D99A32]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#592318]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D99A32] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Identity</span>
            <span aria-hidden="true" className="text-[#592318]">·</span>
            <span>PAPELÉE Ethiopia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF5E8] tracking-tight leading-tight">
            A Little Chocolate.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99A32] via-[#F0B24B] to-[#FFF5E8]">
              A Lot of Happiness.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EBD8BD]/85 leading-relaxed">
            Crafted to bring warm smiles and pure indulgence to tea breaks, morning routines, and Ethiopian family gatherings.
          </p>
        </div>

        {/* Premium Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side: Dark Premium Advertising Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative group rounded-3xl overflow-hidden p-2 sm:p-3 bg-gradient-to-tr from-[#592318] via-[#35140F] to-[#D99A32]/30 border border-[#D99A32]/30 shadow-2xl">
              
              <div className="relative rounded-2xl overflow-hidden bg-[#1F0B08]">
                <ImageWithFallback
                  src={BRAND_ASSETS.darkAdvertising.localSrc}
                  fallbackSrc={BRAND_ASSETS.darkAdvertising.remoteSrc}
                  alt="O'CHOCO Rollay Biscuits Dark Premium Presentation"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B08]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Corner Label */}
              <div className="absolute top-6 left-6 bg-[#1F0B08]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D99A32]/40">
                <span className="text-xs font-semibold tracking-wider text-[#D99A32] uppercase">
                  Chocolate-Flavored Rollay
                </span>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#35140F]/95 backdrop-blur-md border border-[#D99A32]/30 p-5 rounded-2xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#592318] flex items-center justify-center text-[#D99A32] shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#D99A32] uppercase tracking-wider">
                    Crisp Spiral
                  </p>
                  <p className="text-sm font-bold text-[#FFF5E8]">
                    Golden-Brown Crunch
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Side: Key Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#FFF5E8] tracking-tight">
                An Iconic Biscuit Built on Everyday Delight
              </h3>
              <p className="text-base text-[#EBD8BD]/90 leading-relaxed">
                <strong className="text-[#FFF5E8]">O'CHOCO Rollay Biscuits</strong> unite a rich chocolate-inspired flavor profile with a delicately baked, golden-brown spiral design. Created for consumers across Ethiopia seeking quality, flavor, and visual charm in their everyday snack.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              
              {/* Highlight 1 */}
              <div className="p-5 rounded-2xl bg-[#592318]/30 border border-[#D99A32]/20 hover:border-[#D99A32]/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#592318] flex items-center justify-center text-[#D99A32] mb-3 group-hover:bg-[#D99A32] group-hover:text-[#35140F] transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#FFF5E8] mb-1">
                  Distinctive Rollay Rings
                </h4>
                <p className="text-xs text-[#EBD8BD]/80 leading-relaxed">
                  Carefully formed concentric spirals produce a layered, brittle crunch that feels lighter and crisper.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="p-5 rounded-2xl bg-[#592318]/30 border border-[#D99A32]/20 hover:border-[#D99A32]/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#592318] flex items-center justify-center text-[#D99A32] mb-3 group-hover:bg-[#D99A32] group-hover:text-[#35140F] transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#FFF5E8] mb-1">
                  Chocolate-Inspired Taste
                </h4>
                <p className="text-xs text-[#EBD8BD]/80 leading-relaxed">
                  A balanced cocoa sweetness that satisfies the palate without being overpowering or cloying.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="p-5 rounded-2xl bg-[#592318]/30 border border-[#D99A32]/20 hover:border-[#D99A32]/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#592318] flex items-center justify-center text-[#D99A32] mb-3 group-hover:bg-[#D99A32] group-hover:text-[#35140F] transition-colors">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#FFF5E8] mb-1">
                  Everyday Snack Companion
                </h4>
                <p className="text-xs text-[#EBD8BD]/80 leading-relaxed">
                  Ideal alongside fresh Ethiopian coffee (buna), afternoon tea, or as a tasty anytime snack.
                </p>
              </div>

              {/* Highlight 4 */}
              <div className="p-5 rounded-2xl bg-[#592318]/30 border border-[#D99A32]/20 hover:border-[#D99A32]/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#592318] flex items-center justify-center text-[#D99A32] mb-3 group-hover:bg-[#D99A32] group-hover:text-[#35140F] transition-colors">
                  <Cookie className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#FFF5E8] mb-1">
                  Dark Chocolate Packaging
                </h4>
                <p className="text-xs text-[#EBD8BD]/80 leading-relaxed">
                  The striking PAPELÉE packaging identity stands out clearly on retailer and supermarket shelves.
                </p>
              </div>

            </div>

            {/* Quick Action Link */}
            <div className="pt-2">
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D99A32] hover:text-[#FFF5E8] transition-colors"
              >
                <span>Explore the Product Showcase</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
