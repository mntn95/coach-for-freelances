/**
 * Layout Component types
 * Contains interfaces for layout components
 */

// Re-export base types for convenience
export type {
  WithNavigation,
  WithNavigationAndPage,
} from "../../common/shared";

// Note: All layout components use WithNavigation or WithNavigationAndPage directly
// No need for empty interface wrappers - use the base types instead:
// - HeaderProps -> WithNavigationAndPage
// - FooterProps -> WithNavigation
// - HomeProps -> WithNavigation
// - CTASectionProps -> WithNavigation
