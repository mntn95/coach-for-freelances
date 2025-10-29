/**
 * Feature Component types
 * Contains interfaces for feature-specific components
 */

import { WithNavigation, WithNavigationAndPage } from "../../common/shared";

// Re-export base types for convenience
export type {
  WithNavigation,
  WithNavigationAndPage,
} from "../../common/shared";

// ============================================================================
// FEATURE COMPONENT TYPES WITH ADDITIONAL PROPERTIES
// ============================================================================

/**
 * Mobile menu component props
 * Extends WithNavigationAndPage and adds menu state properties
 */
export interface MobileMenuProps extends WithNavigationAndPage {
  isOpen: boolean;
  onToggle: () => void;
}

// Note: All other feature components use WithNavigation or WithNavigationAndPage directly
// No need for empty interface wrappers - use the base types instead
