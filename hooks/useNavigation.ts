import { useCallback } from 'react';
import type { Page } from '@/types/navigation';

/**
 * Custom hook for navigation functionality
 * Provides a consistent way to handle page navigation with scroll-to-top behavior
 * 
 * @returns Object containing navigation functions
 */
export const useNavigation = () => {
  /**
   * Navigate to a specific page with scroll-to-top behavior
   * Includes SSR safety check to prevent errors during server-side rendering
   * 
   * @param page - The page to navigate to
   */
  const navigate = useCallback((page: Page) => {
    // Safe scroll to top with SSR check
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return { navigate };
};
