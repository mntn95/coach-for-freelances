/**
 * Animation Component types
 * Contains interfaces for animation-related components
 */

import { ReactNode } from "react";

// ============================================================================
// ANIMATED COMPONENTS
// ============================================================================

export interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}





