/**
 * Image optimization configuration
 * Provides optimized image settings and utilities
 */

const IMAGE_CONFIG = {
  // Quality settings
  QUALITY: {
    HIGH: 90,
    MEDIUM: 75,
    LOW: 60,
  },

  // Priority settings for above-the-fold images
  PRIORITY: {
    HERO: true,
    LOGO: true,
    ABOVE_FOLD: true,
    BELOW_FOLD: false,
  },

  // Loading settings
  LOADING: {
    EAGER: 'eager' as const,
    LAZY: 'lazy' as const,
  },

  // Common sizes for responsive images
  SIZES: {
    LOGO: '40px',
    HERO_DESKTOP: '(max-width: 1024px) 0vw, 50vw',
    HERO_MOBILE: '(max-width: 1024px) 100vw, 50vw',
    CARD_GRID: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    FULL_WIDTH: '100vw',
  },

  // Placeholder settings
  PLACEHOLDER: {
    BLUR_DATA_URL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  },
} as const;

/**
 * Get optimized image props based on usage context
 */
export const getImageProps = (context: 'hero' | 'logo' | 'card' | 'below-fold') => {
  const baseProps = {
    quality: IMAGE_CONFIG.QUALITY.MEDIUM,
    placeholder: 'blur' as const,
    blurDataURL: IMAGE_CONFIG.PLACEHOLDER.BLUR_DATA_URL,
    priority: false,
    loading: 'lazy' as const,
  };

  switch (context) {
    case 'hero':
      return {
        ...baseProps,
        priority: IMAGE_CONFIG.PRIORITY.HERO,
        quality: IMAGE_CONFIG.QUALITY.HIGH,
        loading: IMAGE_CONFIG.LOADING.EAGER,
      };

    case 'logo':
      return {
        ...baseProps,
        priority: IMAGE_CONFIG.PRIORITY.LOGO,
        quality: IMAGE_CONFIG.QUALITY.HIGH,
        loading: IMAGE_CONFIG.LOADING.EAGER,
      };

    case 'card':
      return {
        ...baseProps,
        priority: IMAGE_CONFIG.PRIORITY.BELOW_FOLD,
        loading: IMAGE_CONFIG.LOADING.LAZY,
      };

    case 'below-fold':
      return {
        ...baseProps,
        priority: IMAGE_CONFIG.PRIORITY.BELOW_FOLD,
        loading: IMAGE_CONFIG.LOADING.LAZY,
      };

    default:
      return baseProps;
  }
};
