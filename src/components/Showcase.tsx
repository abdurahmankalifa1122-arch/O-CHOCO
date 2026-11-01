import React, { useState } from 'react';
import { Eye, Coffee, Award, Sparkles, Check } from 'lucide-react';
import { BRAND_ASSETS } from '../constants/assets';
import { ImageWithFallback } from './ImageWithFallback';

interface ShowcaseProps {
  onOpenLightbox?: (assetId: string) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'lifestyle' | 'advertising'>('both');

  return (
    <section
      id="showcase"
      className="relative py-24 sm:py-32 bg-[#250D0A] text-[#FFF5E8] overflow-hidden"
    >
      {/* Decorative Golden Gradient Wash */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D99A32]/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D99A32] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Showcase</span>
            <span aria-hidden="true" className="text-[#592318]">·</span>
            <span>Two Iconic Perspectives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF5E8] tracking-tight">
            Meet Your Favorite Biscuit.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EBD8BD]/85 leading-relaxed">
            Experience O'CHOCO through two distinct visual expressions: the warmth of everyday lifestyle moments, and the dramatic elegance of premium chocolate artistry.
          </p>

          {/* Tab Filter Control (Allowed functional buttons) */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#35140F] border border-[#592318] shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'both'
                  ? 'bg-gradient-to-r from-[#F0B24B] to-[#D99A32] text-[#35140F] shadow-md'
                  : 'text-[#EBD8BD]/70 hover:text-[#FFF5E8]'
              }`}
            >
              All Presentations
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('lifestyle')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'lifestyle'
                  ? 'bg-gradient-to-r from-[#F0B24B] to-[#D99A32] text-[#35140F] shadow-md'
                  : 'text-[#EBD8BD]/70 hover:text-[#FFF5E8]'
              }`}
            >
              Lifestyle Presentation
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('advertising')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'advertising'
                  ? 'bg-gradient-to-r from-[#F0B24B] to-[#D99A32] text-[#35140F] shadow-md'
                  : 'text-[#EBD8BD]/70 hover:text-[#FFF5E8]'
              }`}
            >
              Dark Studio Ad
            </button>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="space-y-16">
          
          {/* Showcase Layout 1: Lifestyle Product Presentation */}
          {(activeTab === 'both' || activeTab === 'lifestyle') && (
            <div className="group rounded-3xl bg-gradient-to-br from-[#35140F] to-[#2B0F0B] border border-[#D99A32]/25 p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300 hover:border-[#D99A32]/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Image Container with 3D Hover & Subtle Zoom */}
                <div className="lg:col-span-7 relative overflow-hidden rounded-2xl bg-[#1F0B08] border border-[#592318] shadow-2xl">
                  <ImageWithFallback
                    src={BRAND_ASSETS.lifestyle.localSrc}
                    fallbackSrc={BRAND_ASSETS.lifestyle.remoteSrc}
                    alt="O'CHOCO Rollay Biscuits Lifestyle Food Photography"
                    className="w-full h-auto object-cover max-h-[500px] transform transition-transform duration-700 ease-out group-hover:scale-103"
                  />

                  {/* High-res Inspection Button */}
                  {onOpenLightbox && (
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(BRAND_ASSETS.lifestyle.id)}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-[#1F0B08]/80 text-[#D99A32] hover:text-[#FFF5E8] hover:bg-[#592318] border border-[#D99A32]/30 transition-all opacity-90 hover:opacity-100 cursor-pointer"
                      title="Inspect full resolution"
                      aria-label="View full resolution lifestyle image"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}

                  {/* Subtle Scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1F0B08]/90 to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-[#EBD8BD]/80">
                    <span className="font-semibold text-[#D99A32]">Presentation 01</span>
                    <span>Lifestyle & Hospitality Scene</span>
                  </div>
                </div>

                {/* Text Content for Lifestyle */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#D99A32] uppercase">
                      <Coffee className="w-4 h-4" />
                      <span>Everyday Ritual</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFF5E8]">
                      Lifestyle & Tea Table Presentation
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#EBD8BD]/85 leading-relaxed">
                    Designed for real tables, warm conversations, and family teatime. The golden-brown hue of the biscuit spiral reflects artisanal baking, harmonizing with coffee, milk, or pure tea.
                  </p>

                  <ul className="space-y-3 text-sm text-[#EBD8BD]/90">
                    <li className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#D99A32]/20 text-[#D99A32] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Crisp texture maintains crunch even when served at room temperature</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#D99A32]/20 text-[#D99A32] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Balanced chocolate notes complement traditional Ethiopian coffee (buna)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#D99A32]/20 text-[#D99A32] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Aesthetically pleasing round rollay spirals on any serving dish</span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <a
                      href="#gallery"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D99A32] hover:text-[#FFF5E8] transition-colors"
                    >
                      <span>View in Gallery</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Showcase Layout 2: Dark Premium Studio Advertisement */}
          {(activeTab === 'both' || activeTab === 'advertising') && (
            <div className="group rounded-3xl bg-gradient-to-bl from-[#1F0B08] via-[#2A0F0B] to-[#35140F] border border-[#D99A32]/35 p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300 hover:border-[#D99A32]/60">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Text Content for Dark Studio Ad (Left on desktop) */}
                <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#D99A32] uppercase">
                      <Award className="w-4 h-4" />
                      <span>Studio Noir</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFF5E8]">
                      Dark Premium Studio Advertisement
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#EBD8BD]/85 leading-relaxed">
                    A cinematic study in chocolate luxury. Highlighting the deep chocolate-brown packaging with the recognizable PAPELÉE identity, surrounded by intense cocoa tones and golden biscuit highlights.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-[#1F0B08]/80 border border-[#592318]">
                      <p className="text-xs uppercase tracking-wider text-[#D99A32] font-semibold">
                        Packaging Tone
                      </p>
                      <p className="text-sm font-bold text-[#FFF5E8] mt-1">
                        Deep Chocolate Brown
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#1F0B08]/80 border border-[#592318]">
                      <p className="text-xs uppercase tracking-wider text-[#D99A32] font-semibold">
                        Signature Detail
                      </p>
                      <p className="text-sm font-bold text-[#FFF5E8] mt-1">
                        Golden Rollay Swirl
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#EBD8BD]/70 italic">
                    Crafted to stand out on grocery and supermarket shelves throughout Ethiopia.
                  </p>
                </div>

                {/* Image Container with 3D Hover & Subtle Zoom */}
                <div className="lg:col-span-7 order-1 lg:order-2 relative overflow-hidden rounded-2xl bg-[#1F0B08] border border-[#592318] shadow-2xl">
                  <ImageWithFallback
                    src={BRAND_ASSETS.darkAdvertising.localSrc}
                    fallbackSrc={BRAND_ASSETS.darkAdvertising.remoteSrc}
                    alt="O'CHOCO Rollay Biscuits Dark Advertising Studio Visual"
                    className="w-full h-auto object-cover max-h-[500px] transform transition-transform duration-700 ease-out group-hover:scale-103"
                  />

                  {/* High-res Inspection Button */}
                  {onOpenLightbox && (
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(BRAND_ASSETS.darkAdvertising.id)}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-[#1F0B08]/80 text-[#D99A32] hover:text-[#FFF5E8] hover:bg-[#592318] border border-[#D99A32]/30 transition-all opacity-90 hover:opacity-100 cursor-pointer"
                      title="Inspect full resolution"
                      aria-label="View full resolution advertising image"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1F0B08]/90 to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-[#EBD8BD]/80">
                    <span className="font-semibold text-[#D99A32]">Presentation 02</span>
                    <span>Commercial Studio Campaign</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
