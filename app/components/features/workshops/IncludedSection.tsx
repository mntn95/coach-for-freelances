import { workshopsPageData } from '@/data/workshops';
import { ScrollReveal } from '../../ui';

export const IncludedSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal animatesInView={false}>
        <h2 className="text-center text-gray-900 mb-12">{workshopsPageData.included.title}</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workshopsPageData.included.items.map((item, index) => (
          <ScrollReveal
            animatesInView={false}
            delay={index * 0.05}
            key={`included-${item.text}-${index}`}
          >
            <div className="flex items-start bg-white p-4 rounded-lg">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{item.text}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
