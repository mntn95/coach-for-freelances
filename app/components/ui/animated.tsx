import { ScrollReveal } from '../ScrollReveal';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSection({ children, delay = 0, className = "" }: AnimatedSectionProps) {
  return (
    <ScrollReveal delay={delay} className={className}>
      {children}
    </ScrollReveal>
  );
}
