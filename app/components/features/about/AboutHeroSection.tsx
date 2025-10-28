import { aboutData } from "@/data/about";
import { AnimatedSection } from "../../ui/animated";

export function AboutHeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h1 className="text-white mb-6">{aboutData.hero.title}</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-xl text-purple-100">{aboutData.hero.subtitle}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
