import { aboutData } from "@/data/about";
import { AnimatedSection } from "../../ui/animated";

export function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-white text-center mb-8">
            {aboutData.mission.title}
          </h2>
        </AnimatedSection>
        {aboutData.mission.paragraphs.map((paragraph, index) => (
          <AnimatedSection key={index} delay={0.1 + index * 0.1}>
            <p
              className={`text-center ${
                index === 0
                  ? "text-xl text-purple-100 mb-8"
                  : "text-lg text-purple-100"
              }`}
            >
              {paragraph}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
