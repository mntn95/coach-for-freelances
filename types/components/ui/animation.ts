/**
 * Animation Component types
 * Contains interfaces for animation-related components
 */

import { ReactNode } from 'react';

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
  animatesInView?: boolean;
  className?: string;
}
