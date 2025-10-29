/**
 * Navigation Component types
 * Contains interfaces for navigation-related components
 */

import { Page } from "../../navigation";
import { WithNavigationAndPage } from "../../common/shared";

export interface NavigationButtonProps {
  page: Page;
  label: string;
  onClick: (page: Page) => void;
}

export interface NavigationItemProps extends WithNavigationAndPage {
  page: Page;
  label: string;
  variant?: "desktop" | "mobile";
}
