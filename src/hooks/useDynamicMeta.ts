
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useDynamicMeta = (meta: MetaProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    if (meta.title) {
      document.title = meta.title;
    }

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`) || 
                   document.querySelector(`meta[name="${property}"]`);
      
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    // Update Open Graph tags
    if (meta.title) {
      updateMetaTag('og:title', meta.title);
    }
    
    if (meta.description) {
      updateMetaTag('og:description', meta.description);
      updateMetaTag('description', meta.description);
    }
    
    if (meta.image) {
      const fullImageUrl = meta.image.startsWith('http') 
        ? meta.image 
        : `${window.location.origin}${meta.image}`;
      updateMetaTag('og:image', fullImageUrl);
      updateMetaTag('twitter:image', fullImageUrl);
    }

    if (meta.url) {
      updateMetaTag('og:url', meta.url);
    }

    // Set current URL
    updateMetaTag('og:url', window.location.href);

  }, [meta, location]);
};
