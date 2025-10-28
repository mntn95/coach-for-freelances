import { ScrollReveal } from '../ScrollReveal';
import { Calendar, Clock, Video, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { isClient, safeDocument } from '@/utils/ssr';

export function Booking() {
  useEffect(() => {
    // Skip if not on client side
    if (!isClient) return;
    
    const doc = safeDocument();
    if (!doc) return;

    // Check if Calendly script already exists
    const existingScript = doc.querySelector('script[src*="calendly"]');
    if (existingScript) return;

    // Load Calendly widget script
    const script = doc.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    doc.body.appendChild(script);

    return () => {
      const scriptToRemove = doc.querySelector('script[src*="calendly"]');
      if (scriptToRemove && doc.body.contains(scriptToRemove)) {
        doc.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-white mb-6">Réservez votre appel</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-purple-100">
              Choisissez un créneau qui vous convient pour notre premier échange
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: '45 minutes',
                description: 'Durée de l\'appel découverte'
              },
              {
                icon: Video,
                title: 'En visio',
                description: 'Via Zoom ou Google Meet'
              },
              {
                icon: Calendar,
                title: '100% gratuit',
                description: 'Aucun engagement'
              },
              {
                icon: CheckCircle2,
                title: 'Actionnable',
                description: 'Vous repartez avec un plan'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-gray-900 mb-4">À quoi s'attendre pendant l'appel ?</h2>
              <p className="text-xl text-gray-600">
                Un échange honnête et structuré pour comprendre vos enjeux
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Analyse de votre situation',
                description: 'On fait le point sur votre activité actuelle, vos revenus, votre organisation, et vos frustrations.'
              },
              {
                step: '2',
                title: 'Identification des blocages',
                description: 'On identifie ce qui vous empêche de passer au niveau supérieur : prix, positionnement, mindset, prospection...'
              },
              {
                step: '3',
                title: 'Définition d\'objectifs clairs',
                description: 'On fixe ensemble des objectifs concrets et mesurables pour les 3-6 prochains mois.'
              },
              {
                step: '4',
                title: 'Plan d\'action personnalisé',
                description: 'Je vous donne des premiers quick wins actionnables immédiatement, même si on ne travaille pas ensemble.'
              },
              {
                step: '5',
                title: 'Discussion sur l\'accompagnement',
                description: 'Si ça fait sens, on discute de comment je peux vous aider à atteindre vos objectifs. Sinon, pas de souci !'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex gap-6 bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center">
                      <span className="text-xl">{item.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-gray-900 mb-4">Choisissez votre créneau</h2>
              <p className="text-xl text-gray-600">
                Sélectionnez le jour et l'heure qui vous conviennent le mieux
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Calendly Widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/YOUR_CALENDLY_USERNAME/45min?hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              
              {/* Placeholder when Calendly is not configured */}
              <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-lg">
                <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-gray-900 mb-2">Widget Calendly</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Remplacez "YOUR_CALENDLY_USERNAME" dans le code par votre nom d'utilisateur Calendly pour activer le widget de réservation.
                </p>
                <div className="bg-gray-100 rounded-lg p-4 max-w-2xl mx-auto text-left">
                  <code className="text-sm text-gray-800">
                    data-url="https://calendly.com/<span className="text-purple-600">votre-nom-utilisateur</span>/45min"
                  </code>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-gray-900 mb-12">Questions fréquentes</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                q: 'L\'appel découverte est-il vraiment gratuit ?',
                a: 'Oui, 100% gratuit et sans engagement. C\'est un moment d\'échange pour voir si on peut travailler ensemble.'
              },
              {
                q: 'Dois-je préparer quelque chose ?',
                a: 'Après votre réservation, vous recevrez un questionnaire à remplir. Ça me permet de mieux comprendre votre situation avant notre échange.'
              },
              {
                q: 'Que se passe-t-il si je ne peux pas honorer mon créneau ?',
                a: 'Aucun problème ! Vous pouvez annuler ou reporter jusqu\'à 24h avant via le lien dans votre email de confirmation.'
              },
              {
                q: 'Vais-je être poussé à acheter quelque chose ?',
                a: 'Non. Si je pense pouvoir vous aider, je vous le dirai. Sinon, vous repartirez avec des conseils gratuits et actionnable. Sans pression.'
              },
              {
                q: 'L\'appel se fait par téléphone ou visio ?',
                a: 'En visio (Zoom ou Google Meet). C\'est plus pratique pour partager des ressources et créer une vraie connexion.'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
