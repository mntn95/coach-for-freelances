"use client";

import Link from "next/link";
import { servicesPageData } from "@/data/services";
import { AnimatedSection, Section } from "../../ui";

export function CTASection() {
  return (
    <Section background="gradient" containerSize="lg">
      <AnimatedSection>
        <h2 className="text-white mb-6">{servicesPageData.cta.title}</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-xl text-purple-100 mb-8">
          {servicesPageData.cta.subtitle}
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Link
          href="/booking"
          className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {servicesPageData.cta.buttonText}
        </Link>
      </AnimatedSection>
    </Section>
  );
}
