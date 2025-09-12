import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  fallback?: string;
}

export const LazyImage = ({ 
  src, 
  alt, 
  className, 
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E",
  fallback = "/placeholder.svg"
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          
          img.onload = () => {
            setImageSrc(src);
            setIsLoaded(true);
            observer.disconnect();
          };
          
          img.onerror = () => {
            setImageSrc(fallback);
            setIsError(true);
            observer.disconnect();
          };
          
          img.src = src;
        }
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, fallback]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn(
        "transition-opacity duration-500",
        isLoaded ? "opacity-100" : "opacity-80",
        isError && "opacity-60",
        className
      )}
      style={{
        aspectRatio: 'auto',
        backgroundColor: '#f3f4f6'
      }}
    />
  );
};