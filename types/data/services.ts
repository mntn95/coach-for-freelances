/**
 * Services page data types
 * Contains service-related interfaces using shared types
 */

import { FAQItem, ServiceBase, StepItem, CTAData } from "../common/shared";
import { LucideIcon } from "lucide-react";

export interface Service extends ServiceBase {
  icon: LucideIcon; // Lucide icon for services page
  // Inherits title, description, price, features from ServiceBase
}

export type ProcessStep = StepItem;

export interface ServicesPageData {
  hero: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  cta: CTAData;
}
