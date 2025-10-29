/**
 * About page data types
 * Contains about page interfaces using shared types
 */

import { IconItem } from "../common/shared";
import { LucideIcon } from "lucide-react";

export interface ValueItem extends IconItem {
  icon: LucideIcon; // Lucide icon for about page
}

export interface CertificationItem {
  title: string;
  org: string;
  year: string;
}

export interface AboutData {
  hero: {
    title: string;
    subtitle: string;
  };
  story: {
    title: string;
    paragraphs: string[];
    quote: string;
  };
  values: {
    title: string;
    subtitle: string;
    items: ValueItem[];
  };
  expertise: {
    title: string;
    description: string;
    skills: string[];
    certifications: {
      title: string;
      subtitle: string;
      items: CertificationItem[];
    };
  };
  mission: {
    title: string;
    paragraphs: string[];
  };
}
