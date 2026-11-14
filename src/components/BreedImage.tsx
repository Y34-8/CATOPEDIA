import { useState } from 'react';
import { CatLogo } from './CatLogo';

interface BreedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function BreedImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle,
  priority = false,
}: BreedImageProps) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EBE5D8] to-[#DCE3DA] dark:from-[#1F231E] dark:to-[#232B24] text-[#4A6B57] dark:text-[#7BA38A] p-6 text-center">
        <CatLogo className="w-10 h-10 opacity-75" />
        {fallbackTitle && (
          <span className="font-editorial text-lg font-medium text-[#161715] dark:text-[#F0EDE5]">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onLoad={() => setLoaded(true)}
      onError={() => setHasError(true)}
      className={`${className} transition-opacity duration-500 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}
