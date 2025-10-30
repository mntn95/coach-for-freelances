"use client";

import { ScrollReveal } from "./scrollReveal";
import { AnimatedSectionProps } from "@/types";

export function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  return (
    <ScrollReveal delay={delay} className={className}>
      {children}
    </ScrollReveal>
  );
}
