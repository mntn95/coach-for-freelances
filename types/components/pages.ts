/**
 * Page Component types
 * Contains interfaces for page components
 */

// Re-export base types for convenience
export type { WithNavigation } from "../common/shared";

// Note: All page components use WithNavigation directly
// No need for empty interface wrappers - use the base type instead:
// - ServicesProps -> WithNavigation
// - WorkshopsProps -> WithNavigation
