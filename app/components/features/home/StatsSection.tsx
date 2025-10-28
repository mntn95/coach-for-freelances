import { ScrollReveal } from '../../ScrollReveal';
import { homeData } from '@/data/home';

export function StatsSection() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {homeData.stats.items.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-purple-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
