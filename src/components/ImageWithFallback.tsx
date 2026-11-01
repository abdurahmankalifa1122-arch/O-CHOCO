import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
  showSkeleton?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt = "O'CHOCO Rollay Biscuit",
  className = '',
  containerClassName = '',
  showSkeleton = true,
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Loading Shimmer Skeleton */}
      {showSkeleton && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A0F0B] via-[#4A1D14] to-[#2A0F0B] animate-pulse rounded-inherit" />
      )}

      {/* Fallback Display if both primary and secondary fail */}
      {hasError ? (
        <div className="flex flex-col items-center justify-center p-6 text-center h-full min-h-[200px] bg-[#2A0F0B] text-[#EBD8BD] border border-[#592318] rounded-xl">
          <div className="w-12 h-12 rounded-full bg-[#592318] flex items-center justify-center text-[#D99A32] mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-[#FFF5E8]">{alt}</p>
          <p className="text-xs text-[#D99A32] mt-1">O'CHOCO Rollay Biscuits · PAPELÉE</p>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={handleError}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          {...rest}
        />
      )}
    </div>
  );
};
