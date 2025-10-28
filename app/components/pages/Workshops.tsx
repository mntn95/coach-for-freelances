import { ScrollReveal } from '../ScrollReveal';
import { WorkshopCard } from '../WorkshopCard';
import type { Page } from '../../page';

interface WorkshopsProps {
  onNavigate: (page: Page) => void;
}

export function Workshops({ onNavigate }: WorkshopsProps) {
  const handleBooking = () => {
    onNavigate('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const workshops = [
    {
      title: 'Pricing Strategy : Doublez votre TJM en 90 jours',
      description: 'Apprenez à fixer vos tarifs en fonction de votre valeur réelle, pas de votre ancienneté ou de vos doutes.',
      date: 'Jeudi 15 février 2025',
      duration: '3 heures (9h-12h)',
      participants: 'Max 15 participants',
      level: 'Débutant',
      price: '197€'
    },
    {
      title: 'Personal Branding sur LinkedIn pour Devs',
      description: 'Construisez votre marque personnelle et attirez des clients premium sans être un influenceur.',
      date: 'Mardi 27 février 2025',
      duration: '2h30 (14h-16h30)',
      participants: 'Max 12 participants',
      level: 'Intermédiaire',
      price: '147€'
    },
    {
      title: 'Prospection Efficace : Trouvez 3 clients en 30 jours',
      description: 'Méthode éprouvée pour prospecter sans être commercial, même si vous détestez vendre.',
      date: 'Jeudi 6 mars 2025',
      duration: '3 heures (9h-12h)',
      participants: 'Max 15 participants',
      level: 'Débutant',
      price: '197€'
    },
    {
      title: 'Négociation : Gérez les objections et closing',
      description: 'Techniques de négociation adaptées aux profils techniques pour closer vos deals sans stress.',
      date: 'Mardi 18 mars 2025',
      duration: '2 heures (10h-12h)',
      participants: 'Max 10 participants',
      level: 'Intermédiaire',
      price: '147€'
    },
    {
      title: 'Transition Salariat → Freelance : Le Guide Complet',
      description: 'Toutes les étapes pour quitter votre CDI et lancer votre activité freelance sereinement.',
      date: 'Jeudi 27 mars 2025',
      duration: '4 heures (9h-13h)',
      participants: 'Max 20 participants',
      level: 'Débutant',
      price: '247€'
    },
    {
      title: 'Productivité & Time Management pour Freelances',
      description: 'Travaillez moins, gagnez plus : méthodes pour doubler votre productivité sans burnout.',
      date: 'Mardi 8 avril 2025',
      duration: '2h30 (14h-16h30)',
      participants: 'Max 15 participants',
      level: 'Intermédiaire',
      price: '147€'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-white mb-6">Ateliers Collectifs</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-purple-100">
              Des workshops pratiques en petits groupes pour développer vos compétences business
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Apprentissage ciblé',
                description: 'Chaque atelier se concentre sur une compétence spécifique et actionnable'
              },
              {
                icon: '👥',
                title: 'Petits groupes',
                description: 'Maximum 15-20 participants pour des échanges de qualité'
              },
              {
                icon: '💡',
                title: 'Networking',
                description: 'Connectez-vous avec d\'autres freelances IT ambitieux'
              }
            ].map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Prochains ateliers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des sessions pratiques pour progresser rapidement sur un sujet précis
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <WorkshopCard
                key={index}
                {...workshop}
                onBook={handleBooking}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-gray-900 mb-12">Ce qui est inclus dans chaque atelier</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Session live en visio avec Laura',
              'Replay disponible pendant 30 jours',
              'Workbook et templates à télécharger',
              'Groupe WhatsApp dédié pendant 7 jours',
              'Certificat de participation',
              'Accès aux ressources et bonus'
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="flex items-start bg-white p-4 rounded-lg">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center text-gray-900 mb-12">Ce que disent les participants</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                name: 'Marc Lefebvre',
                role: 'Développeur React',
                text: 'L\'atelier sur le pricing m\'a ouvert les yeux. J\'ai augmenté mon TJM de 350€ à 600€ deux semaines après. Meilleur ROI de ma vie.'
              },
              {
                name: 'Julie Moreau',
                role: 'Consultante DevOps',
                text: 'Super format : concret, actionnable, avec d\'autres freelances qui vivent les mêmes challenges. Les templates fournis sont gold.'
              },
              {
                name: 'Kevin Dufour',
                role: 'Développeur Fullstack',
                text: 'Je suis très introverti et l\'idée de prospecter me terrorisait. L\'atelier prospection m\'a donné une méthode simple qui fonctionne. J\'ai signé 2 clients le mois suivant.'
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-white mb-6">Rejoignez le prochain atelier</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-purple-100 mb-8">
              Les places sont limitées pour garantir la qualité des échanges. Réservez votre place maintenant.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <button
              onClick={handleBooking}
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Réserver ma place
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
