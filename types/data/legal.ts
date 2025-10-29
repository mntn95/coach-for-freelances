/**
 * Legal data types
 * Contains legal page interfaces
 */

export interface LegalSection {
  title: string;
  content: string;
  items?: { label: string; value: string }[];
}

export interface PrivacySection {
  title: string;
  content: string;
  listItems?: string[];
  contactInfo?: { email: string; phone: string };
  additionalInfo?: string;
  contactText?: string;
  serviceLinks?: {
    calendly?: { text: string; url: string };
    vercel?: { text: string; url: string };
  };
}

export interface LegalData {
  hero: {
    title: string;
    subtitle: string;
  };
  tabs: {
    legal: string;
    privacy: string;
  };
  legal: LegalSection[];
  privacy: PrivacySection[];
  contact: {
    email: string;
    phone: string;
  };
  lastUpdated: string;
}
