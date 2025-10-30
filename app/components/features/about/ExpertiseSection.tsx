import { aboutData } from '@/data/about';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../../ui';

const ExpertiseSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <ScrollReveal>
            <h2 className="text-gray-900 mb-6">{aboutData.expertise.title}</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gray-600 mb-8">{aboutData.expertise.description}</p>
          </ScrollReveal>

          <div className="space-y-4">
            {aboutData.expertise.skills.map((skill, index) => (
              <ScrollReveal key={index} delay={0.2 + index * 0.05}>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">{skill}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
          <ScrollReveal delay={0.3}>
            <h2 className="text-gray-900 mb-6">{aboutData.expertise.certifications.title}</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {aboutData.expertise.certifications.items.map((item, index) => (
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
);

export { ExpertiseSection };
