/**
 * Section component for consistent section styling
 * Handles common section patterns with background variants
 */

import { ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient" | "transparent";
  padding?: "sm" | "md" | "lg" | "xl";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

const backgroundClasses = {
  white: "bg-white",
  gray: "bg-gray-50",
  gradient: "bg-gradient-to-br from-purple-600 to-blue-600 text-white",
  transparent: "",
} as const;

const paddingClasses = {
  sm: "py-12",
  md: "py-16",
  lg: "py-20",
  xl: "py-24",
} as const;

export function Section({
  children,
  className = "",
  background = "white",
  padding = "lg",
  containerSize = "xl",
}: SectionProps) {
  const backgroundClass = backgroundClasses[background];
  const paddingClass = paddingClasses[padding];

  return (
    <section className={`${backgroundClass} ${paddingClass} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
