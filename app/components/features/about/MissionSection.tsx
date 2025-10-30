import { aboutData } from '@/data/about';
import { ScrollReveal } from '../../ui';

const MissionSection = () => (
  <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="text-white text-center mb-8">{aboutData.mission.title}</h2>
      </ScrollReveal>
      {aboutData.mission.paragraphs.map((paragraph, index) => (
        <ScrollReveal key={index} delay={0.1 + index * 0.1}>
          <p
            className={`text-center ${
              index === 0 ? 'text-xl text-purple-100 mb-8' : 'text-lg text-purple-100'
            }`}
          >
            {paragraph}
          </p>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export { MissionSection };
