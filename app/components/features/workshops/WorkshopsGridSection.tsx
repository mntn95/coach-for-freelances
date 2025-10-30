'use client';

import { workshops, workshopsPageData } from '@/data/workshops';
import { ScrollReveal } from '../../ui';
import { WorkshopCard } from '../cards/WorkshopCard';

export const WorkshopsGridSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal animatesInView={false}>
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">{workshopsPageData.workshops.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {workshopsPageData.workshops.subtitle}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshops.map((workshop, index) => (
          <WorkshopCard
            key={`workshop-${workshop.title}-${index}`}
            {...workshop}
            delay={index * 0.1}
            isAnimatedOnLoad={index <= 2}
          />
        ))}
      </div>
    </div>
  </section>
);
