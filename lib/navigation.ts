import { Page } from "@/types/navigation";

/**
 * Convert a Page type to Next.js path
 */
export const getPagePath = (page: Page): string => {
  if (page === "home") return "/";
  return `/${page}`;
};

/**
 * Check if current pathname matches a page
 */
export const isActivePage = (pathname: string, page: Page): boolean => {
  if (page === "home") return pathname === "/";
  return pathname === `/${page}`;
};

