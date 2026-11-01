import React, { useState } from 'react';
import { Sparkles, Maximize2, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS, BrandAsset } from '../constants/assets';
import { ImageWithFallback } from './ImageWithFallback';

interface GalleryProps {
  onSelectImage: (asset: BrandAsset) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const [filter, setFilter] = useState<'all' | 'packaging' | 'hero' | 'lifestyle' | 'advertising'>('all');

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 bg-[#250D0A] text-[#FFF5E8] overflow-hidden"
    >
      {/* Decorative Gold Radial Glow */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 bg-[#D99A32]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D99A32] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Assets</span>
            <span aria-hidden="true" className="text-[#592318]">·</span>
            <span>Visual Registry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF5E8] tracking-tight">
            Brand & Product Gallery
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EBD8BD]/85 leading-relaxed">
            High-resolution visual presentations of O'CHOCO Rollay Biscuits, preserving authentic packaging proportions, logo clarity, and chocolate palette.
          </p>

          {/* Interactive Filter Tabs (functional segmented control) */}
          <div className="mt-8 inline-flex items-center flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-[#35140F] border border-[#592318]">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#F0B24B] to-[#D99A32] text-[#35140F] shadow-md'
                  : 'text-[#EBD8BD]/70 hover:text-[#FFF5E8]'
              }`}
            >
              All Assets ({GALLERY_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('hero')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'hero'
                  ? 'bg-gradient-to-r from-[#F0B24B] to-[#D99A32] text-[#35140F] shadow-md'
                  : 'text-[#EBD8BD]/70 hover:text-[#FFF5E8]'
              }`}
            >
              Hero
            </button>
            <button
              type="button"
              onClick={() => setFilter('lifestyle')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'lifestyle'
                  ? 'bg-gradient-to-r from-[#F0B24B] to-[#D99A32] text-[#35140F] shadow-md'
                  : 'text-[#EBD8BD]/70 hover:text-[#FFF5E8]'
              }`}
            >
              Lifestyle
            </button>
            <button
              type="button"
              onClick={() => setFilter('advertising')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'advertising'
                  ? 'bg-gradient-to-r from-[#F0B24B] to-[#D99A32] text-[#35140F] shadow-md'
                  : 'text-[#EBD8BD]/70 hover:text-[#FFF5E8]'
              }`}
            >
              Studio Noir
            </button>
            <button
              type="button"
              onClick={() => setFilter('packaging')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'packaging'
                  ? 'bg-gradient-to-r from-[#F0B24B] to-[#D99A32] text-[#35140F] shadow-md'
                  : 'text-[#EBD8BD]/70 hover:text-[#FFF5E8]'
              }`}
            >
              Identity Seal
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-gradient-to-b from-[#35140F] to-[#1F0B08] border border-[#592318] hover:border-[#D99A32]/60 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Container */}
              <div
                className="relative overflow-hidden cursor-pointer bg-[#1A0906] flex items-center justify-center p-4 sm:p-6"
                onClick={() => onSelectImage(item)}
              >
                <ImageWithFallback
                  src={item.localSrc}
                  fallbackSrc={item.remoteSrc}
                  alt={item.title}
                  className="w-full h-auto max-h-[360px] object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Scrim with Inspection Icon */}
                <div className="absolute inset-0 bg-[#1F0B08]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#D99A32] text-[#35140F] shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#1F0B08]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#D99A32]/30 text-[11px] font-semibold tracking-wider uppercase text-[#D99A32]">
                  {item.category}
                </div>
              </div>

              {/* Asset Information Footer */}
              <div className="p-6 bg-[#2B0F0B] border-t border-[#592318] flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-[#FFF5E8] group-hover:text-[#D99A32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EBD8BD]/80 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => onSelectImage(item)}
                    className="p-2 rounded-lg bg-[#592318]/60 hover:bg-[#D99A32] hover:text-[#35140F] text-[#EBD8BD] transition-all cursor-pointer"
                    title="Inspect Fullscreen"
                    aria-label={`Inspect ${item.title}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <a
                    href={item.originalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#592318]/60 hover:bg-[#592318] text-[#EBD8BD]/70 hover:text-[#FFF5E8] transition-all"
                    title="View Original ImgBB Host"
                    aria-label={`View ${item.title} on original host`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
