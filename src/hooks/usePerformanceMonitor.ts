import { useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        };

        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          metrics.firstContentfulPaint = fcp.startTime;
        }

        // Log performance metrics (can be sent to analytics service)
        console.log('Performance Metrics:', metrics);

        // Monitor Core Web Vitals
        if ('web-vitals' in window) {
          // This would require web-vitals library for full implementation
          // For now, we'll log basic metrics
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Monitor memory usage if available
  useEffect(() => {
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
          console.warn('High memory usage detected');
        }
      }
    };

    const interval = setInterval(monitorMemory, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);
};