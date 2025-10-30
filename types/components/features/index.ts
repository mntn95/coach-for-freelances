/**
 * Feature Component types
 * Contains interfaces for feature-specific components
 */

import { Page } from '../../navigation';

export interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage: Page | null;
}
