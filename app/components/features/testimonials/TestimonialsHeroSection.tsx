import { testimonialsPageData } from "@/data/testimonials";
import { AnimatedSection } from "../../ui/animated";
import { Section } from "../../ui/section";

export function TestimonialsHeroSection() {
  return (
    <Section background="gradient" containerSize="lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h1 className="text-white mb-6">{testimonialsPageData.hero.title}</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-xl text-purple-100">
            {testimonialsPageData.hero.subtitle}
          </p>
        </AnimatedSection>
      </div>
    </Section>
  );
}
