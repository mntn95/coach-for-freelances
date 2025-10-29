/**
 * Booking page data types
 * Contains booking-related interfaces using shared types
 */

import { FAQItem, IconItem, StepItem } from "../common/shared";
import { LucideIcon } from "lucide-react";

export interface InfoItem extends IconItem {
  icon: LucideIcon; // Lucide icon for booking page
}

export type ExpectationItem = StepItem;

export interface BookingData {
  hero: {
    title: string;
    subtitle: string;
  };
  info: {
    items: InfoItem[];
  };
  expectations: {
    title: string;
    subtitle: string;
    items: ExpectationItem[];
  };
  calendly: {
    title: string;
    subtitle: string;
    url: string;
    placeholder: {
      title: string;
      description: string;
      code: string;
    };
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
}
