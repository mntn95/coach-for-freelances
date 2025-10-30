/**
 * Core UI Component types
 * Contains interfaces for basic UI components
 */

import { ReactNode } from "react";

// ============================================================================
// BUTTON COMPONENTS
// ============================================================================

export interface LinkButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  icon?: boolean;
  className?: string;
}

// ============================================================================
// IMAGE COMPONENTS
// ============================================================================

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  style?: React.CSSProperties;
  onError?: () => void;
  context?: "hero" | "logo" | "card" | "below-fold";
}

// ============================================================================
// BADGE COMPONENTS
// ============================================================================

export interface BadgeProps {
  children: ReactNode;
  variant?:
    | "default"
    | "gradient"
    | "outline"
    | "success"
    | "warning"
    | "error";
  size?: "sm" | "md" | "lg";
  className?: string;
}

// ============================================================================
// CONTAINER COMPONENTS
// ============================================================================

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

export interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient" | "transparent";
  padding?: "sm" | "md" | "lg" | "xl";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}


