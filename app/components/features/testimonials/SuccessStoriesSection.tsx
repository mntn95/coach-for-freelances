import { testimonialsPageData } from "@/data/testimonials";
import { AnimatedSection, Section } from "../../ui";

export function SuccessStoriesSection() {
  return (
    <Section background="gray" containerSize="lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              {testimonialsPageData.successStories.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {testimonialsPageData.successStories.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {testimonialsPageData.successStories.stories.map((story, index) => (
            <AnimatedSection
              key={`story-${story.name}-${index}`}
              delay={index * 0.1}
            >
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                      {story.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="text-gray-900 mb-1">{story.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{story.role}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">Avant :</span>
                        <div className="text-red-600">{story.before}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Après :</span>
                        <div className="text-green-600">{story.after}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Durée :</span>
                        <div className="text-purple-600">{story.duration}</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-relaxed">
                      {story.story}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
