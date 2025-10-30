"use client";

import Link from "next/link";
import { workshopsPageData } from "@/data/workshops";
import { ScrollReveal } from "../../ui";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-white mb-6">{workshopsPageData.cta.title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-xl text-purple-100 mb-8">
            {workshopsPageData.cta.subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {workshopsPageData.cta.buttonText}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
