/**
 * Container component for consistent max-width and padding
 * Provides consistent layout spacing across all pages
 */

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
} as const;

export function Container({
  children,
  className = "",
  size = "xl",
}: ContainerProps) {
  return (
    <div
      className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
