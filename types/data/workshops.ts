/**
 * Workshops page data types
 * Contains workshop-related interfaces using shared types
 */

import { IconItem, CTAData, TestimonialBase } from "../common/shared";

export interface Workshop {
  title: string;
  description: string;
  date: string;
  duration: string;
  participants: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  price: string;
}

export type BenefitItem = IconItem;

export interface IncludedItem {
  text: string;
}

export interface WorkshopTestimonial extends TestimonialBase {
  // Inherits name, role, content, rating from TestimonialBase
  // Override content with text for workshop testimonials
  text: string;
}

export interface WorkshopsPageData {
  hero: {
    title: string;
    subtitle: string;
  };
  benefits: BenefitItem[];
  workshops: {
    title: string;
    subtitle: string;
  };
  included: {
    title: string;
    items: IncludedItem[];
  };
  testimonials: {
    title: string;
  };
  cta: CTAData;
}
