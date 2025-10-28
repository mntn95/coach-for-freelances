import { ScrollReveal } from '../ScrollReveal';
import { TestimonialCard } from '../TestimonialCard';
import { Section } from '../ui/section';
import { Image } from '../ui/image';
import { extendedTestimonials } from '@/data/testimonials';

export function Testimonials() {
  const stats = [
    { value: '200+', label: 'Freelances accompagnés' },
    { value: '+120%', label: 'Augmentation moyenne revenus' },
    { value: '3 mois', label: 'Durée moyenne résultats' },
    { value: '98%', label: 'Taux de satisfaction' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="gradient" containerSize="lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-white mb-6">Témoignages</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-purple-100">
              Des freelances IT comme vous qui ont doublé leurs revenus et retrouvé leur liberté
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="gray" containerSize="md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Grid */}
      <Section containerSize="lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Ce qu'ils disent de leur transformation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des résultats concrets, des parcours inspirants
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extendedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Success Stories */}
      <Section background="gray" containerSize="lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Histoires de réussite</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez en détail comment certains de mes clients ont transformé leur activité
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {[
              {
                name: 'Thomas Dubois',
                role: 'Développeur Full-Stack',
                before: '4k€/mois, 50h/semaine',
                after: '8k€/mois, 35h/semaine',
                duration: '3 mois',
                story: 'Thomas était un excellent développeur mais il ne savait pas vendre ses compétences. Il acceptait tous les projets par peur de dire non. Ensemble, on a travaillé sur son positionnement, son pricing et sa confiance. En 3 mois, il a doublé son TJM et appris à sélectionner ses clients. Aujourd\'hui, il travaille moins et gagne plus.'
              },
              {
                name: 'Marie Leclerc',
                role: 'Développeuse React',
                before: 'CDI à 42k€/an',
                after: 'Freelance à 7k€/mois (84k€/an)',
                duration: '6 mois de préparation',
                story: 'Marie voulait devenir freelance mais avait peur de sauter le pas. On a préparé sa transition pendant 6 mois : positionnement, création de son offre, prospection, premiers clients en side project. Quand elle a quitté son CDI, elle avait déjà 3 clients signés. 6 mois plus tard, elle gagne 2x plus et a retrouvé sa liberté.'
              },
              {
                name: 'Alexandre Rousseau',
                role: 'Consultant Cloud AWS',
                before: '5k€/mois stagnant depuis 2 ans',
                after: '12k€/mois, 30h/semaine',
                duration: '4 mois',
                story: 'Alexandre avait un énorme syndrome de l\'imposteur. Pourtant, c\'est un expert AWS reconnu. Le blocage était 100% mental. On a travaillé sur sa confiance, son personal branding LinkedIn, et sa stratégie de prospection. En 4 mois, il a triplé son TJM et travaille maintenant avec des scale-ups qui valorisent son expertise.'
              }
            ].map((story, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                        {story.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="text-gray-900 mb-1">{story.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{story.role}</p>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-500">Avant :</span>
                          <div className="text-red-600">{story.before}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Après :</span>
                          <div className="text-green-600">{story.after}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Durée :</span>
                          <div className="text-purple-600">{story.duration}</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-600 leading-relaxed">{story.story}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Video Testimonials Placeholder */}
      <Section containerSize="lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Témoignages vidéo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ils racontent leur parcours en vidéo
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYxNTM1ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Témoignage vidéo"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    context="card"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white text-sm">Témoignage #{index + 1}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-center text-gray-500 mt-8 text-sm">
              * Vidéos disponibles prochainement
            </p>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
