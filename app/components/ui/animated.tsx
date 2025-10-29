import { ScrollReveal } from "./ScrollReveal";
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
