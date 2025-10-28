import { ScrollReveal } from '../../ScrollReveal';
import { CTAButton } from '../../CTAButton';
import type { Page } from '@/types/navigation';

interface CTASectionProps {
  onNavigate: (page: Page) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-white mb-6">Prêt à passer à l'étape suivante ?</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-xl text-purple-100 mb-8">
            Réservez votre appel découverte gratuit de 45 minutes. Aucun engagement, juste une conversation honnête sur vos objectifs.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <CTAButton onClick={() => handleNavigate('booking')} variant="secondary">
            Réserver mon appel gratuit
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
