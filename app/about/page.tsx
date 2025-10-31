import type { Metadata } from 'next';

import {
  AboutHeroSection,
  StorySection,
  ValuesSection,
  ExpertiseSection,
  MissionSection,
} from '../components/features/about';

const AboutPage = () => (
  <div>
    <AboutHeroSection />
    <StorySection />
    <ValuesSection />
    <ExpertiseSection />
    <MissionSection />
  </div>
);

export default AboutPage;

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Découvrez le parcours, la mission et les valeurs de Laura Bianchi, coach pour freelances IT.',
  alternates: { canonical: '/about' },
};
