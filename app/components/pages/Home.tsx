import { CTAButton } from '../CTAButton';
import { ScrollReveal } from '../ScrollReveal';
import { ServiceCard } from '../ServiceCard';
import { TestimonialCard } from '../TestimonialCard';
import { Image } from '../ui/image';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';
import type { Page } from '@/types/navigation';
import { useNavigation } from '@/hooks/useNavigation';
import { featuredServices } from '@/data/services';
import { testimonials } from '@/data/testimonials';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { navigate } = useNavigation();

  const handleBooking = () => {
    onNavigate('booking');
    navigate('booking');
  };

  return (
    <div>
      {/* Hero Section */}
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
                  <CTAButton onClick={handleBooking} variant="secondary">
                    Réserver un appel gratuit
                  </CTAButton>
                  <CTAButton onClick={() => onNavigate('about')} variant="outline" icon={false}>
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
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="text-purple-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Freelances accompagnés</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="text-purple-600 mb-2">+120%</div>
                <div className="text-sm text-gray-600">Augmentation moyenne TJM</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="text-purple-600 mb-2">3 mois</div>
                <div className="text-sm text-gray-600">Durée moyenne résultats</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <div className="text-purple-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Taux de satisfaction</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Vous vous reconnaissez ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La plupart des freelances IT sont techniquement excellents, mais bloqués sur le business
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '😰',
                title: 'Syndrome de l\'imposteur',
                description: 'Vous avez peur d\'augmenter vos tarifs de peur de perdre vos clients'
              },
              {
                icon: '⏰',
                title: 'Surcharge de travail',
                description: 'Vous travaillez 50h/semaine mais vos revenus stagnent'
              },
              {
                icon: '🎯',
                title: 'Mauvais positionnement',
                description: 'Vous prenez tous les projets sans stratégie claire'
              },
              {
                icon: '💰',
                title: 'TJM trop bas',
                description: 'Vous facturez moins que votre vraie valeur sur le marché'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Comment je peux vous aider</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des accompagnements adaptés à votre situation et vos objectifs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                features={service.features}
                onBook={handleBooking}
                delay={index * 0.1}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <button
                onClick={() => onNavigate('services')}
                className="text-purple-600 hover:text-purple-700 underline"
              >
                Voir tous les services →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Ils ont doublé leurs revenus</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des freelances comme vous qui ont franchi le cap
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <button
                onClick={() => onNavigate('testimonials')}
                className="text-purple-600 hover:text-purple-700 underline"
              >
                Lire tous les témoignages →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
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
            <CTAButton onClick={handleBooking} variant="secondary">
              Réserver mon appel gratuit
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
