import type { Page } from '@/types/navigation';

export const NAV_ITEMS = [
  { label: 'Accueil', page: 'home' as Page },
  { label: 'À propos', page: 'about' as Page },
  { label: 'Services', page: 'services' as Page },
  { label: 'Ateliers', page: 'workshops' as Page },
  { label: 'Témoignages', page: 'testimonials' as Page },
] as const;

export const BOOKING_PAGE: Page = 'booking';
export const LEGAL_PAGE: Page = 'legal';

// Navigation labels for consistency
export const NAV_LABELS = {
  HOME: 'Accueil',
  ABOUT: 'À propos',
  SERVICES: 'Services',
  WORKSHOPS: 'Ateliers',
  TESTIMONIALS: 'Témoignages',
  BOOKING: 'Réserver un appel',
  LEGAL: 'Mentions légales & Confidentialité',
} as const;
