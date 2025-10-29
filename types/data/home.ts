/**
 * Home page data types
 * Contains home page interfaces using shared types
 */

import {
  StatItem,
  CTAData,
  IconItem,
  ServiceBase,
  TestimonialBase,
} from "../common/shared";

export interface HeroData {
  badge: string;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  image: {
    src: string;
    alt: string;
  };
}

export type ProblemItem = IconItem;

export interface ServiceItem extends ServiceBase {
  icon: string; // String icon for home page
  // Inherits title, description, price, features from ServiceBase
}

export type TestimonialItem = TestimonialBase;

export interface HomeData {
  hero: HeroData;
  stats: {
    title: string;
    subtitle: string;
    items: StatItem[];
  };
  problems: {
    title: string;
    subtitle: string;
    items: ProblemItem[];
  };
  services: {
    title: string;
    subtitle: string;
    linkText: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    linkText: string;
  };
  cta: CTAData;
}
