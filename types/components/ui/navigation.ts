/**
 * Navigation Component types
 * Contains interfaces for navigation-related components
 */

import { Page } from '../../navigation';

export interface NavigationButtonProps {
  page: Page;
  label: string;
}

export interface NavigationItemProps {
  page: Page;
  label: string;
  currentPage: Page | null;
  variant?: 'desktop' | 'mobile';
}
