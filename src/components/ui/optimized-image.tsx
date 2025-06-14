
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  priority?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  skeletonClassName,
  priority = false,
  ...props 
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate WebP version path if possible
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('/lovable-uploads/')) {
      // For Lovable uploads, try WebP version first
      const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return { webp: webpSrc, fallback: originalSrc };
    }
    return { webp: null, fallback: originalSrc };
  };

  const { webp, fallback } = getOptimizedSrc(src);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div className={cn("bg-gray-100 flex items-center justify-center", className)}>
        <span className="text-gray-400 text-sm">Изображението не може да се зареди</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton className={cn("absolute inset-0", skeletonClassName || className)} />
      )}
      <picture>
        {webp && <source srcSet={webp} type="image/webp" />}
        <img
          src={fallback}
          alt={alt}
          className={cn(className, isLoading ? "opacity-0" : "opacity-100")}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
