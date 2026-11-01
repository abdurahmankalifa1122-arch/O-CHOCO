import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, RefreshCw, CircleDot } from 'lucide-react';
import { BRAND_ASSETS } from '../constants/assets';
import { ImageWithFallback } from './ImageWithFallback';

export const InteractiveRollay: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isCrunching, setIsCrunching] = useState<boolean>(false);

  // Play satisfying biscuit crunch using Web Audio API (no external mp3 dependency)
  const playCrunchSound = () => {
    if (!soundEnabled) return;
    setIsCrunching(true);
    setTimeout(() => setIsCrunching(false), 300);

    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      
      // Crackle noise buffer
      const bufferSize = audioCtx.sampleRate * 0.18;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.04));
      }

      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;

      // Bandpass filter to simulate crispy biscuit snap
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2200, audioCtx.currentTime);
      filter.Q.setValueAtTime(1.8, audioCtx.currentTime);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      noise.start();
    } catch {
      // AudioContext not allowed or not supported in environment
    }
  };

  const hotspots = [
    {
      id: 0,
      title: "Concentric Rollay Spiral",
      subtitle: "Geometric Precision Baking",
      description: "Baked into delicate spiral swirls that trap pockets of air, creating a distinctive crispy shatter with zero chewiness.",
      highlight: "Crisp Spiral Structure",
    },
    {
      id: 1,
      title: "Velvety Cocoa Infusion",
      subtitle: "Chocolate-Inspired Character",
      description: "Infused with rich, dark chocolate notes that linger smoothly on the palate, perfectly complementing hot beverages.",
      highlight: "Rich Cocoa Depth",
    },
    {
      id: 2,
      title: "Golden-Brown Crust",
      subtitle: "Oven-Roasted Sweetness",
      description: "Toasted to a warm amber gold, delivering caramelized biscuit sweetness that balances the bittersweet chocolate.",
      highlight: "Caramelized Finish",
    },
    {
      id: 3,
      title: "PAPELÉE Freshness Seal",
      subtitle: "Protective Packaging Identity",
      description: "Sealed in dark chocolate packaging engineered to preserve humidity resistance and signature biscuit snap.",
      highlight: "Freshness Preserved",
    },
  ];

  return (
    <section className="relative py-24 bg-[#1F0B08] text-[#FFF5E8] border-y border-[#592318]/50 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D99A32]/10 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D99A32] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Explorer</span>
            <span aria-hidden="true" className="text-[#592318]">·</span>
            <span>The Rollay Anatomy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFF5E8] tracking-tight">
            Anatomy of the Perfect Bite
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#EBD8BD]/85">
            Select each characteristic to explore what makes O'CHOCO Rollay Biscuits unique.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Product Visual with Hotspots */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#35140F] to-[#250D0A] border border-[#D99A32]/30 shadow-2xl">
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#180806] flex items-center justify-center min-h-[320px] sm:min-h-[400px]">
                <ImageWithFallback
                  src={BRAND_ASSETS.heroProduct.localSrc}
                  fallbackSrc={BRAND_ASSETS.heroProduct.remoteSrc}
                  alt="O'CHOCO Rollay Biscuit Structure"
                  className={`w-full h-auto max-h-[380px] object-contain transition-transform duration-300 ${isCrunching ? 'scale-98 brightness-110' : 'scale-100'}`}
                />

                {/* Hotspot 1: Spiral Biscuit */}
                <button
                  type="button"
                  onClick={() => { setSelectedHotspot(0); playCrunchSound(); }}
                  className={`absolute top-[48%] left-[68%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all cursor-pointer ${
                    selectedHotspot === 0
                      ? 'bg-[#D99A32] text-[#35140F] ring-4 ring-[#D99A32]/40 scale-125'
                      : 'bg-[#592318]/90 text-[#FFF5E8] hover:bg-[#D99A32] hover:text-[#35140F]'
                  }`}
                  aria-label="Inspect Concentric Rollay Spiral"
                >
                  <CircleDot className="w-4 h-4 animate-pulse" />
                </button>

                {/* Hotspot 2: Cocoa Taste */}
                <button
                  type="button"
                  onClick={() => { setSelectedHotspot(1); playCrunchSound(); }}
                  className={`absolute top-[68%] left-[78%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all cursor-pointer ${
                    selectedHotspot === 1
                      ? 'bg-[#D99A32] text-[#35140F] ring-4 ring-[#D99A32]/40 scale-125'
                      : 'bg-[#592318]/90 text-[#FFF5E8] hover:bg-[#D99A32] hover:text-[#35140F]'
                  }`}
                  aria-label="Inspect Velvety Cocoa Infusion"
                >
                  <CircleDot className="w-4 h-4 animate-pulse" />
                </button>

                {/* Hotspot 3: Golden-Brown Finish */}
                <button
                  type="button"
                  onClick={() => { setSelectedHotspot(2); playCrunchSound(); }}
                  className={`absolute top-[32%] left-[60%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all cursor-pointer ${
                    selectedHotspot === 2
                      ? 'bg-[#D99A32] text-[#35140F] ring-4 ring-[#D99A32]/40 scale-125'
                      : 'bg-[#592318]/90 text-[#FFF5E8] hover:bg-[#D99A32] hover:text-[#35140F]'
                  }`}
                  aria-label="Inspect Golden-Brown Crust"
                >
                  <CircleDot className="w-4 h-4 animate-pulse" />
                </button>

                {/* Hotspot 4: Packaging Seal */}
                <button
                  type="button"
                  onClick={() => { setSelectedHotspot(3); playCrunchSound(); }}
                  className={`absolute top-[42%] left-[28%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all cursor-pointer ${
                    selectedHotspot === 3
                      ? 'bg-[#D99A32] text-[#35140F] ring-4 ring-[#D99A32]/40 scale-125'
                      : 'bg-[#592318]/90 text-[#FFF5E8] hover:bg-[#D99A32] hover:text-[#35140F]'
                  }`}
                  aria-label="Inspect PAPELÉE Freshness Seal"
                >
                  <CircleDot className="w-4 h-4 animate-pulse" />
                </button>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="mt-4 pt-4 border-t border-[#592318] flex items-center justify-between text-xs text-[#EBD8BD]/80">
                <button
                  type="button"
                  onClick={playCrunchSound}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#592318]/60 hover:bg-[#D99A32] hover:text-[#35140F] text-[#FFF5E8] transition-all font-semibold cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D99A32]" />
                  <span>Experience the Crunch</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="flex items-center gap-1.5 text-xs text-[#EBD8BD]/70 hover:text-[#D99A32] cursor-pointer"
                  title="Toggle Crunch Audio"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span>{soundEnabled ? 'Audio On' : 'Muted'}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Hotspot Details Selector */}
          <div className="lg:col-span-5 space-y-4">
            {hotspots.map((h, i) => {
              const isSelected = selectedHotspot === i;
              return (
                <div
                  key={h.id}
                  onClick={() => { setSelectedHotspot(i); playCrunchSound(); }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#35140F] border-[#D99A32] shadow-xl shadow-[#D99A32]/10 translate-x-2'
                      : 'bg-[#2A0F0B]/60 border-[#592318] hover:border-[#D99A32]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D99A32]">
                      0{i + 1} · {h.subtitle}
                    </span>
                    {isSelected && (
                      <span className="text-[11px] font-mono text-[#D99A32] flex items-center gap-1">
                        <RefreshCw className="w-3 h-3 animate-spin" /> Active
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#FFF5E8] mb-1">
                    {h.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#EBD8BD]/80 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
