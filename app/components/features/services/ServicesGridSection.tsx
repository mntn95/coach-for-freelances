"use client";

import Link from "next/link";
import { allServices, servicesPageData } from "@/data/services";
import { ServiceCard } from "../cards/ServiceCard";
import { AnimatedSection, Section } from "../../ui";

export function ServicesGridSection() {
  return (
    <Section containerSize="lg">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            {servicesPageData.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {servicesPageData.services.subtitle}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <ServiceCard
            key={`service-${service.title}-${index}`}
            {...service}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Section>
  );
}
