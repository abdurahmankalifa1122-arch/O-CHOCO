import React from 'react';
import { Sparkles, Cookie, Coffee, PackageCheck, Layers } from 'lucide-react';
import { BRAND_CONFIG } from '../constants/config';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Layers className="w-6 h-6 text-[#D99A32]" />,
    <Cookie className="w-6 h-6 text-[#D99A32]" />,
    <Coffee className="w-6 h-6 text-[#D99A32]" />,
    <PackageCheck className="w-6 h-6 text-[#D99A32]" />,
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 bg-[#1F0B08] text-[#FFF5E8] overflow-hidden"
    >
      {/* Background Ambience */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[#592318]/30 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#D99A32]/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D99A32] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The O'CHOCO Distinction</span>
            <span aria-hidden="true" className="text-[#592318]">·</span>
            <span>Ethiopian Snack Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF5E8] tracking-tight">
            Why You'll Love O'CHOCO
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EBD8BD]/85 leading-relaxed">
            Crafted with thoughtful attention to form, flavor, and packaging presentation, ensuring an elevated biscuit moment with every pack.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BRAND_CONFIG.features.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#35140F]/90 to-[#2A0F0B]/90 p-8 border border-[#592318] hover:border-[#D99A32]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#D99A32]/10 flex flex-col justify-between"
            >
              {/* Subtle Corner Glow on Hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D99A32]/15 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Top Row: Icon and Editorial Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#592318] border border-[#D99A32]/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D99A32] group-hover:text-[#35140F]">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#D99A32]/70 group-hover:text-[#D99A32] transition-colors">
                    {feature.number}
                  </span>
                </div>

                {/* Quiet Unboxed Category Tag */}
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#D99A32] mb-2">
                  {feature.tag}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#FFF5E8] mb-3 group-hover:text-[#FFF5E8] transition-colors leading-snug">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-[#EBD8BD]/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Hairline Accents */}
              <div className="mt-8 pt-4 border-t border-[#592318]/50 flex items-center justify-between text-xs text-[#EBD8BD]/60">
                <span>PAPELÉE Standard</span>
                <span className="text-[#D99A32] opacity-0 group-hover:opacity-100 transition-opacity">
                  ★ Authentic
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sensory & Tasting Notes Bar */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#2A0F0B] via-[#35140F] to-[#2A0F0B] border border-[#D99A32]/25 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#592318]">
            {BRAND_CONFIG.tastingNotes.map((note) => (
              <div key={note.label} className="pt-4 md:pt-0 px-2 first:pt-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D99A32]">
                  {note.label}
                </p>
                <p className="text-sm sm:text-base font-bold text-[#FFF5E8] mt-1">
                  {note.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
