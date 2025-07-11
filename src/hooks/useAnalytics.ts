
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-C62RLXQB1B', {
        page_path: location.pathname + location.search,
      });
      console.log('GA: Page view tracked:', location.pathname);
    }
  }, [location]);
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: eventName,
      ...parameters,
    });
    console.log('GA: Event tracked:', eventName, parameters);
  }
};

export const trackPurchaseIntent = (section: string) => {
  trackEvent('purchase_intent', {
    event_category: 'conversion',
    section: section,
    value: 47,
    currency: 'BRL',
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    scroll_depth: depth,
  });
};
