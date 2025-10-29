import { homeData } from "@/data/home";
import { ScrollReveal } from "../../ui/ScrollReveal";

export function ProblemSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">{homeData.problems.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {homeData.problems.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeData.problems.items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">
                  {typeof item.icon === "string" ? item.icon : <item.icon />}
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
