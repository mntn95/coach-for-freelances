import { aboutData } from "@/data/about";
import { ScrollReveal } from "../../ui";

export function AboutHeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal animatesInView={false}>
          <h1 className="text-white mb-6">{aboutData.hero.title}</h1>
        </ScrollReveal>
        <ScrollReveal animatesInView={false} delay={0.1}>
          <p className="text-xl text-purple-100">{aboutData.hero.subtitle}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
