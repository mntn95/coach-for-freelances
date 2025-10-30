import { workshopsPageData } from "@/data/workshops";
import { AnimatedSection } from "../../ui";

export function WorkshopsHeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h1 className="text-white mb-6">{workshopsPageData.hero.title}</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-xl text-purple-100">
            {workshopsPageData.hero.subtitle}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
