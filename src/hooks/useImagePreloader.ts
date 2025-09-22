import { useEffect } from 'react';

interface PreloadImageOptions {
  priority?: boolean;
  crossOrigin?: string;
}

export const useImagePreloader = (images: string[], options: PreloadImageOptions = {}) => {
  useEffect(() => {
    const preloadImages = images.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        
        if (options.crossOrigin) {
          img.crossOrigin = options.crossOrigin;
        }
        
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
        
        // For priority images, add to document head for better caching
        if (options.priority) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          document.head.appendChild(link);
        }
      });
    });

    Promise.all(preloadImages).catch(console.error);
  }, [images, options.priority, options.crossOrigin]);
};

export default useImagePreloader;