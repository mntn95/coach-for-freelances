const PAGE_VALUES = [
  "home",
  "about",
  "services",
  "workshops",
  "testimonials",
  "booking",
  "legal",
] as const;

export type Page = (typeof PAGE_VALUES)[number];
export const DEFAULT_PAGE: Page = "home";

// Export PAGE_VALUES for external use if needed
export { PAGE_VALUES };
