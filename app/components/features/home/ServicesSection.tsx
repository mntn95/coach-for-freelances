import { ScrollReveal } from '../../ScrollReveal';
import { ServiceCard } from '../../ServiceCard';
import { featuredServices } from '@/data/services';
import { homeData } from '@/data/home';
import type { Page } from '@/types/navigation';

interface ServicesSectionProps {
  onNavigate: (page: Page) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">{homeData.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {homeData.services.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              features={service.features}
              onBook={() => handleNavigate('booking')}
              delay={index * 0.1}
            />
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigate('services')}
              className="text-purple-600 hover:text-purple-700 underline"
            >
              {homeData.services.linkText}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
