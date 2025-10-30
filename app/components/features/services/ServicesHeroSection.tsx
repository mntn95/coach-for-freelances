import { servicesPageData } from "@/data/services";
import { ScrollReveal, Section } from "../../ui";

export function ServicesHeroSection() {
  return (
    <Section background="gradient" containerSize="lg">
      <ScrollReveal animatesInView={false}>
        <h1 className="text-white mb-6">{servicesPageData.hero.title}</h1>
      </ScrollReveal>
      <ScrollReveal animatesInView={false} delay={0.1}>
        <p className="text-xl text-purple-100">
          {servicesPageData.hero.subtitle}
        </p>
      </ScrollReveal>
    </Section>
  );
}
