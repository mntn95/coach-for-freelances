import { servicesPageData } from "@/data/services";
import { AnimatedSection, Section } from "../../ui";

export function ServicesHeroSection() {
  return (
    <Section background="gradient" containerSize="lg">
      <AnimatedSection>
        <h1 className="text-white mb-6">{servicesPageData.hero.title}</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-xl text-purple-100">
          {servicesPageData.hero.subtitle}
        </p>
      </AnimatedSection>
    </Section>
  );
}
