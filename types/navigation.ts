const PAGE_VALUES = ['home', 'about', 'services', 'workshops', 'testimonials', 'booking', 'legal'] as const;
export type Page = typeof PAGE_VALUES[number];

export const isValidPage = (page: string): page is Page => {
  return PAGE_VALUES.includes(page as Page);
};

export const DEFAULT_PAGE: Page = 'home';
