import { aboutData } from "@/data/about";
import { AnimatedSection } from "../../ui/animated";
import { Image } from "../../ui/image";

export function StorySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl transform -rotate-3"></div>
              <Image
                src="https://images.unsplash.com/photo-1610387785204-6daf4e50e2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzYxNTY1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laura Bianchi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover", height: "600px" }}
                className="relative rounded-2xl shadow-xl"
                context="below-fold"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.2}>
              <h2 className="text-gray-900">{aboutData.story.title}</h2>
            </AnimatedSection>

            {aboutData.story.paragraphs.map((paragraph, index) => (
              <AnimatedSection key={index} delay={0.3 + index * 0.1}>
                <p className="text-gray-600">{paragraph}</p>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.6}>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "{aboutData.story.quote}"
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
