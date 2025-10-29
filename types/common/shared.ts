/**
 * Shared types used across multiple domains
 * These types eliminate duplications and provide consistent interfaces
 */

// ============================================================================
// COMPONENT PROP UTILITY TYPES
// ============================================================================

/**
 * Base type for components that have a booking callback
 * Eliminates duplication of onBook: () => void
 */
export interface WithOnBook {
  onBook: () => void;
}

/**
 * Base type for components that have an optional delay prop
 * Used for animation/staggering effects
 */
export interface WithOptionalDelay {
  delay?: number;
}

// ============================================================================
// COMMON DATA STRUCTURES
// ============================================================================

/**
 * Statistic item used in multiple pages (home, testimonials)
 * Replaces duplicated StatItem interfaces
 */
export interface StatItem {
  value: string;
  label: string;
}

/**
 * FAQ item used in multiple pages (services, booking)
 * Replaces duplicated FAQItem interfaces
 */
export interface FAQItem {
  q: string;
  a: string;
}

// ============================================================================
// BASE INTERFACES FOR CONSISTENCY
// ============================================================================

/**
 * Base testimonial interface
 * Provides common structure for all testimonial types
 */
export interface TestimonialBase {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

/**
 * Base service interface
 * Provides common structure for all service types
 */
export interface ServiceBase {
  title: string;
  description: string;
  price: string;
  features: string[];
}

// ============================================================================
// ICON TYPE DEFINITIONS
// ============================================================================

/**
 * Icon type definition for consistent icon usage
 * Supports both Lucide React icons and string emojis
 */
export type IconType = string | React.ComponentType<Record<string, unknown>>;

/**
 * String icon type for emoji or simple string icons
 */
export type StringIconType = string;

// ============================================================================
// COMMON UTILITY TYPES
// ============================================================================

/**
 * Generic item with icon, title and description
 * Used for various list items across the application
 */
export interface IconItem {
  icon: IconType;
  title: string;
  description: string;
}

/**
 * Generic step item for process flows
 * Used in booking expectations, service processes, etc.
 */
export interface StepItem {
  step: string;
  title: string;
  description: string;
}

/**
 * Generic section with title and subtitle
 * Used for consistent section headers
 */
export interface SectionHeader {
  title: string;
  subtitle: string;
}

/**
 * Generic CTA (Call To Action) data
 * Used for consistent CTA sections
 */
export interface CTAData {
  title: string;
  subtitle: string;
  buttonText: string;
}
