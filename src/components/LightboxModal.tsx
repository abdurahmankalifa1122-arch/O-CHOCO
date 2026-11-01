import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink, Download } from 'lucide-react';
import { BrandAsset } from '../constants/assets';
import { ImageWithFallback } from './ImageWithFallback';

interface LightboxModalProps {
  asset: BrandAsset | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ asset, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!asset) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.7));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F0B08]/90 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#2A0F0B] border border-[#D99A32]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#592318] bg-[#35140F]">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#D99A32] block">
              Asset Inspection · {asset.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#FFF5E8]">
              {asset.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#1F0B08] p-1 rounded-xl border border-[#592318] mr-2">
              <button
                type="button"
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg text-[#EBD8BD] hover:text-[#D99A32] hover:bg-[#35140F] transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[#D99A32] px-2">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg text-[#EBD8BD] hover:text-[#D99A32] hover:bg-[#35140F] transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              {zoomLevel !== 1 && (
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-lg text-[#EBD8BD] hover:text-[#D99A32] hover:bg-[#35140F] transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            <a
              href={asset.originalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#1F0B08] text-[#EBD8BD] hover:text-[#D99A32] border border-[#592318] transition-colors"
              title="Open ImgBB Source"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#592318] text-[#FFF5E8] hover:bg-[#D99A32] hover:text-[#35140F] transition-all cursor-pointer"
              title="Close modal"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Image Viewport */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-[#180806] min-h-[300px]">
          <div
            className="transition-transform duration-200 ease-out origin-center max-w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <ImageWithFallback
              src={asset.localSrc}
              fallbackSrc={asset.remoteSrc}
              alt={asset.title}
              className="max-h-[65vh] w-auto object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#35140F] border-t border-[#592318] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EBD8BD]/80">
          <p className="max-w-xl text-center sm:text-left">
            {asset.description}
          </p>

          <div className="flex items-center gap-3">
            <a
              href={asset.remoteSrc}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#592318] hover:bg-[#D99A32] hover:text-[#35140F] text-[#FFF5E8] font-semibold transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Full PNG File</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
