/**
 * Card Component types
 * Contains interfaces for card-based components
 */

import { LucideIcon } from "lucide-react";
import { WithOnBook, WithOptionalDelay } from "../../common/shared";

export interface TestimonialCardProps extends WithOptionalDelay {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface ServiceCardProps extends WithOnBook, WithOptionalDelay {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export interface WorkshopCardProps extends WithOnBook, WithOptionalDelay {
  title: string;
  description: string;
  date: string;
  duration: string;
  participants: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  price: string;
}
