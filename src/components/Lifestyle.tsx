import React from 'react';
import { Sparkles, Sun, Users, Coffee } from 'lucide-react';
import { BRAND_ASSETS } from '../constants/assets';
import { ImageWithFallback } from './ImageWithFallback';

interface LifestyleProps {
  onOpenLightbox?: (assetId: string) => void;
}

export const Lifestyle: React.FC<LifestyleProps> = ({ onOpenLightbox }) => {
  const moments = [
    {
      icon: <Coffee className="w-5 h-5 text-[#D99A32]" />,
      title: "The Coffee Table Companion",
      desc: "In Ethiopia, the coffee ceremony is sacred. O'CHOCO Rollay's chocolate notes harmonize exquisitely with aromatic roasted coffee beans.",
    },
    {
      icon: <Sun className="w-5 h-5 text-[#D99A32]" />,
      title: "Afternoon Sweet Pause",
      desc: "Take five minutes out of a busy day to unwrap a rollay biscuit. Light, crispy layers offer the perfect chocolate indulgence.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#D99A32]" />,
      title: "Shared Smiles & Hospitality",
      desc: "Whether welcoming guests to your living room or sharing with colleagues, O'CHOCO biscuits show thoughtful hospitality.",
    },
  ];

  return (
    <section
      id="lifestyle"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#1F0B08] via-[#2B0F0B] to-[#35140F] text-[#FFF5E8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D99A32] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Editorial Photography</span>
            <span aria-hidden="true" className="text-[#592318]">·</span>
            <span>Everyday Warmth</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF5E8] tracking-tight leading-tight">
            Make Your Moments Sweeter.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EBD8BD]/85 leading-relaxed">
            Good food brings people together. O'CHOCO Rollay Biscuits are made to elevate everyday pauses into moments worth savoring.
          </p>
        </div>

        {/* Large Editorial Showcase */}
        <div className="relative rounded-3xl overflow-hidden bg-[#1F0B08] border border-[#D99A32]/30 shadow-2xl group">
          
          {/* Main Visual */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.2/1] overflow-hidden">
            <ImageWithFallback
              src={BRAND_ASSETS.lifestyle.localSrc}
              fallbackSrc={BRAND_ASSETS.lifestyle.remoteSrc}
              alt="O'CHOCO Rollay Biscuits Warm Everyday Table Setting"
              className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-103"
            />
            {/* Cinematic Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B08] via-[#1F0B08]/40 to-transparent" />
          </div>

          {/* Floating Editorial Badge */}
          <div className="absolute top-6 left-6 hidden sm:block bg-[#1F0B08]/85 backdrop-blur-md px-4 py-2 rounded-xl border border-[#D99A32]/30">
            <p className="text-[11px] font-bold text-[#D99A32] uppercase tracking-wider">
              Food Photography
            </p>
            <p className="text-sm font-semibold text-[#FFF5E8]">
              Natural Light & Warm Tones
            </p>
          </div>

          {onOpenLightbox && (
            <button
              type="button"
              onClick={() => onOpenLightbox(BRAND_ASSETS.lifestyle.id)}
              className="absolute top-6 right-6 px-4 py-2 rounded-full bg-[#1F0B08]/80 text-[#D99A32] hover:text-[#FFF5E8] hover:bg-[#592318] border border-[#D99A32]/30 transition-all text-xs font-semibold cursor-pointer"
            >
              Expand View ↗
            </button>
          )}

          {/* Bottom Editorial Caption Bar */}
          <div className="p-6 sm:p-10 bg-[#1F0B08] border-t border-[#592318]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {moments.map((item) => (
                <div key={item.title} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#592318] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#FFF5E8]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#EBD8BD]/80 leading-relaxed pl-12">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
