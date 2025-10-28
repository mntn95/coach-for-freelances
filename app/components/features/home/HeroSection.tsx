import { CTAButton } from '../../CTAButton';
import { ScrollReveal } from '../../ScrollReveal';
import { Image } from '../../ui/image';
import type { Page } from '@/types/navigation';

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
                <span className="text-sm">🚀 Coach pour freelances IT ambitieux</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h1 className="text-white mb-6">
                Passez de 5k€ à 10k€+/mois en tant que freelance IT
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-purple-100 mb-8">
                Vous êtes développeur, DevOps ou consultant IT ? Vous tournez autour de 5k€/mois mais vous savez que vous valez plus ? Je vous aide à débloquer votre potentiel et à doubler vos revenus.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton onClick={() => handleNavigate('booking')} variant="secondary">
                  Réserver un appel gratuit
                </CTAButton>
                <CTAButton onClick={() => handleNavigate('about')} variant="outline" icon={false}>
                  Découvrir mon parcours
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5} className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl transform rotate-3"></div>
              <Image
                src="https://images.unsplash.com/photo-1610387785204-6daf4e50e2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzYxNTY1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laura Bianchi - Coach professionnelle"
                fill
                className="relative rounded-2xl shadow-2xl"
                sizes="(max-width: 1024px) 0vw, 50vw"
                style={{ objectFit: 'cover', height: '500px' }}
                context="hero"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
