/**
 * Central export file for all types and interfaces
 * This file provides a single entry point for importing types across the project
 */

// Navigation types
export type { Page } from "./navigation";

// Data types
export type {
  HomeData,
  HeroData,
  ProblemItem,
  ServiceItem,
  TestimonialItem,
} from "./data/home";

export type { ServicesPageData, Service, ProcessStep } from "./data/services";

export type {
  WorkshopsPageData,
  Workshop,
  BenefitItem,
  IncludedItem,
  WorkshopTestimonial,
} from "./data/workshops";

export type { AboutData, ValueItem, CertificationItem } from "./data/about";

export type { BookingData, InfoItem, ExpectationItem } from "./data/booking";

export type { LegalData, LegalSection, PrivacySection } from "./data/legal";

export type {
  TestimonialsPageData,
  Testimonial,
  SuccessStory,
  VideoTestimonial,
} from "./data/testimonials";

export type { ContactInfo } from "./data/contact";
export type { BrandInfo } from "./data/brand";

// Component types - Note: Most component props use WithNavigation or WithNavigationAndPage directly
export type { MobileMenuProps } from "./components/features";

export type {
  TestimonialCardProps,
  ServiceCardProps,
  WorkshopCardProps,
} from "./components/features/cards";

export type {
  CTAButtonProps,
  ImageProps,
  BadgeProps,
  ContainerProps,
  SectionProps,
  AnimatedSectionProps,
  ScrollRevealProps,
  NavigationButtonProps,
  NavigationItemProps,
} from "./components/ui";

// Common types
export type {
  StatItem as CommonStatItem,
  FAQItem as CommonFAQItem,
  TestimonialBase,
  ServiceBase,
  IconItem,
  StepItem,
  SectionHeader,
  CTAData as CommonCTAData,
  IconType,
  StringIconType,
  // Component prop utility types
  WithNavigation,
  WithCurrentPage,
  WithNavigationAndPage,
  WithOnBook,
  WithOptionalDelay,
} from "./common/shared";

export type {
  Optional,
  RequiredFields,
  FormFieldProps,
  ApiResponse,
} from "./common/utils";
