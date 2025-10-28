/**
 * SSR (Server-Side Rendering) utility functions
 * Provides safe access to browser APIs that may not be available during SSR
 */

/**
 * Check if code is running on the client side
 * @returns true if running in browser, false if running on server
 */
export const isClient = typeof window !== 'undefined';

/**
 * Safely scroll to the top of the page
 * Only executes on the client side to prevent SSR errors
 * @param behavior - The scroll behavior (default: 'smooth')
 */
export const safeScrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  if (isClient) {
    window.scrollTo({ top: 0, behavior });
  }
};

/**
 * Safe getter for window object
 * Returns undefined if not on client side
 * @returns Window object or undefined
 */
export const safeWindow = (): Window | undefined => {
  return typeof window !== 'undefined' ? window : undefined;
};

/**
 * Safe getter for document object
 * Returns undefined if not on client side
 * @returns Document object or undefined
 */
export const safeDocument = (): Document | undefined => {
  return typeof document !== 'undefined' ? document : undefined;
};
