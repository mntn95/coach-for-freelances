import { ScrollReveal } from '../ScrollReveal';
import { Image } from '../ui/image';
import { CheckCircle2, Heart, Target, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-white mb-6">À propos de Laura</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-purple-100">
              De développeuse bloquée à 4k€/mois à coach pour freelances IT qui veulent leur liberté
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl transform -rotate-3"></div>
                <Image
                  src="https://images.unsplash.com/photo-1610387785204-6daf4e50e2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzYxNTY1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Laura Bianchi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover', height: '600px' }}
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.2}>
                <h2 className="text-gray-900">Mon histoire</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-gray-600">
                  En 2018, j'étais développeuse full-stack freelance. Techniquement au top. Mais financièrement ? Coincée à 4 000€/mois depuis 3 ans. Je travaillais 50h par semaine, je disais oui à tous les projets, et j'avais l'impression de courir dans une roue de hamster.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="text-gray-600">
                  Le déclic est venu quand un client m'a dit : "Tu es la meilleure dev avec qui j'ai travaillé, mais tes tarifs sont ridiculement bas." J'ai réalisé que mon problème n'était pas technique, mais mental.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <p className="text-gray-600">
                  J'ai investi dans ma première formation business. En 6 mois, j'ai triplé mes tarifs et doublé mes revenus. Aujourd'hui, je facture 15k€/mois en travaillant 25h par semaine. Et je consacre le reste de mon temps à aider d'autres freelances IT à faire la même transformation.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <p className="text-gray-700 italic">
                    "Votre valeur n'est pas déterminée par vos compétences techniques, mais par l'impact que vous créez pour vos clients."
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-gray-900 mb-4">Mes valeurs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ce qui guide mon accompagnement au quotidien
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Authenticité',
                description: 'Pas de fausses promesses. Je vous dis la vérité, même si elle dérange.'
              },
              {
                icon: Target,
                title: 'Résultats concrets',
                description: 'Moins de théorie, plus d\'action. Chaque séance débouche sur des résultats mesurables.'
              },
              {
                icon: TrendingUp,
                title: 'Ambition',
                description: 'Je crois que vous pouvez aller plus loin que vous ne le pensez. Et je vais vous y pousser.'
              },
              {
                icon: CheckCircle2,
                title: 'Pragmatisme',
                description: 'Des stratégies testées et éprouvées, pas des théories à la mode.'
              }
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ScrollReveal>
                <h2 className="text-gray-900 mb-6">Mon expertise</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-gray-600 mb-8">
                  Je ne suis pas coach généraliste. Je me spécialise uniquement dans l'accompagnement de freelances IT (développeurs, DevOps, consultants cloud, data engineers...) qui veulent passer un cap financier et retrouver leur liberté.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                {[
                  'Stratégie de pricing et négociation',
                  'Positionnement de marché et personal branding',
                  'Prospection et acquisition clients',
                  'Productivité et gestion du temps',
                  'Mindset entrepreneurial',
                  'Transition salariat → freelance'
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={0.2 + index * 0.05}>
                    <div className="flex items-start">
                      <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <ScrollReveal delay={0.3}>
                <h2 className="text-gray-900 mb-6">Formations & Certifications</h2>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  {
                    title: 'Certifiée Coach Professionnelle',
                    org: 'ICF (International Coach Federation)',
                    year: '2021'
                  },
                  {
                    title: 'Master en Informatique',
                    org: 'Université Paris-Saclay',
                    year: '2015'
                  },
                  {
                    title: 'Formation Business pour Freelances',
                    org: 'LiveMentor',
                    year: '2019'
                  },
                  {
                    title: '8 ans d\'expérience en développement',
                    org: 'Full-stack JavaScript, Python, DevOps',
                    year: '2015-2023'
                  }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                    <div className="border-l-4 border-purple-600 pl-4 py-2">
                      <h3 className="text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.org}</p>
                      <p className="text-sm text-purple-600">{item.year}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-white text-center mb-8">Ma mission</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-purple-100 text-center mb-8">
              Aider 1 000 freelances IT francophones à dépasser les 10k€/mois d'ici 2027. Non pas pour devenir riches, mais pour retrouver leur liberté : liberté de choisir leurs projets, leurs clients, et de vivre la vie qu'ils veulent vraiment.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-purple-100 text-center">
              Le freelancing, c'est la plus belle opportunité de notre génération. Mais seulement si on sait comment en tirer parti.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
