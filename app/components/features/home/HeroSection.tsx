import { homeData } from "@/data/home";
import type { Page } from "@/types/navigation";
import { CTAButton } from "../../CTAButton";
import { ScrollReveal } from "../../ScrollReveal";
import { Image } from "../../ui/image";

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal delay={0.1}>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-sm">{homeData.hero.badge}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-white mb-6">{homeData.hero.title}</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-xl text-purple-100 mb-8">
                {homeData.hero.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  onClick={() => handleNavigate("booking")}
                  variant="secondary"
                >
                  {homeData.hero.primaryButton}
                </CTAButton>
                <CTAButton
                  onClick={() => handleNavigate("about")}
                  variant="outline"
                  icon={false}
                >
                  {homeData.hero.secondaryButton}
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5} className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl transform rotate-3"></div>
              <Image
                src={homeData.hero.image.src}
                alt={homeData.hero.image.alt}
                fill
                className="relative rounded-2xl shadow-2xl"
                sizes="(max-width: 1024px) 0vw, 50vw"
                style={{ objectFit: "cover", height: "500px" }}
                context="hero"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
