"use client";

import Link from "next/link";
import { homeData } from "@/data/home";
import { LinkButton, ScrollReveal } from "../../ui";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-white mb-6">{homeData.cta.title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-xl text-purple-100 mb-8">
            {homeData.cta.subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link href="/booking" className="inline-block">
            <LinkButton variant="secondary" onClick={() => {}}>
              {homeData.cta.buttonText}
            </LinkButton>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
