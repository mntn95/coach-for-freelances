import { ScrollReveal } from '../ScrollReveal';
import { ServiceCard } from '../ServiceCard';
import { Section } from '../ui/section';
import { 
  Target, 
  TrendingUp, 
  Zap, 
  Users, 
  Calendar,
  MessageCircle 
} from 'lucide-react';
import type { Page } from '@/types/navigation';
import { useNavigation } from '@/hooks/useNavigation';
import { allServices } from '@/data/services';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const { navigate } = useNavigation();

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    navigate(page);
  };

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" containerSize="lg">
          <ScrollReveal>
            <h1 className="text-white mb-6">Mes Services</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-purple-100">
              Des accompagnements sur mesure pour chaque étape de votre parcours freelance
            </p>
          </ScrollReveal>
      </Section>

      {/* Services Grid */}
      <Section containerSize="lg">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Choisissez votre formule</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Que vous ayez besoin d'un coup de boost ou d'un accompagnement long terme, il y a une solution adaptée
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onBook={() => handleNavigate('booking')}
                delay={index * 0.1}
              />
            ))}
          </div>
      </Section>

      {/* How It Works */}
      <Section containerSize="lg" background="gray">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Comment ça marche ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Le processus en 4 étapes simples
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Réservez',
                description: 'Choisissez un créneau qui vous convient via Calendly'
              },
              {
                step: '02',
                title: 'Préparation',
                description: 'Remplissez un questionnaire pour que je comprenne vos enjeux'
              },
              {
                step: '03',
                title: 'Session',
                description: 'On se retrouve en visio pour travailler sur vos objectifs'
              },
              {
                step: '04',
                title: 'Suivi',
                description: 'Vous recevez un plan d\'action et les ressources nécessaires'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
      </Section>

      {/* FAQ Section */}
      <Section containerSize="lg">
          <ScrollReveal>
            <h2 className="text-center text-gray-900 mb-12">Questions fréquentes</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                q: 'Comment choisir la bonne formule ?',
                a: 'Commencez toujours par la séance découverte gratuite. On analysera ensemble votre situation et je vous recommanderai la formule la plus adaptée.'
              },
              {
                q: 'Les résultats sont-ils garantis ?',
                a: 'Sur les programmes 3 et 6 mois, oui. Si vous appliquez ce qu\'on met en place et que vous n\'obtenez pas de résultats, je prolonge l\'accompagnement gratuitement jusqu\'à ce que vous les atteigniez.'
              },
              {
                q: 'Puis-je payer en plusieurs fois ?',
                a: 'Oui, tous les programmes peuvent être payés en 2 à 3 fois sans frais. On en discute lors de la séance découverte.'
              },
              {
                q: 'Combien de temps avant de voir des résultats ?',
                a: 'La plupart de mes clients voient leurs premiers résultats (augmentation de tarifs, meilleure prospection) dans les 30 premiers jours. Les résultats durables (doublement des revenus) prennent généralement 3 à 6 mois.'
              },
              {
                q: 'Je suis encore salarié, est-ce adapté pour moi ?',
                a: 'Absolument ! Beaucoup de mes clients sont en transition salariat → freelance. Je les aide à préparer leur lancement pour partir sur de bonnes bases.'
              },
              {
                q: 'Les séances se passent comment ?',
                a: 'Tout se fait en visio (Zoom ou Google Meet). C\'est plus flexible et tout aussi efficace qu\'en présentiel. Chaque séance est enregistrée pour que vous puissiez la revoir.'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                  <h3 className="text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" containerSize="lg">
          <ScrollReveal>
            <h2 className="text-white mb-6">Prêt à passer à l'action ?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-purple-100 mb-8">
              Réservez votre séance découverte gratuite et découvrons ensemble comment doubler vos revenus freelance
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <button
              onClick={() => handleNavigate('booking')}
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Réserver ma séance gratuite
            </button>
          </ScrollReveal>
      </Section>
    </div>
  );
}
