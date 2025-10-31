import type { Metadata } from 'next';

import { legalData } from '@/data/legal';
import {
  LegalContentSection,
  LegalHeroSection,
  PrivacyContentSection,
} from '../components/features/legal';
import { ScrollReveal, Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui';

const LegalPage = () => (
  <div>
    <LegalHeroSection />

    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animatesInView={false}>
          <Tabs defaultValue="legal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="legal">{legalData.tabs.legal}</TabsTrigger>
              <TabsTrigger value="privacy">{legalData.tabs.privacy}</TabsTrigger>
            </TabsList>

            <TabsContent value="legal">
              <LegalContentSection />
            </TabsContent>

            <TabsContent value="privacy">
              <PrivacyContentSection />
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default LegalPage;

export const metadata: Metadata = {
  title: 'Mentions légales & Confidentialité',
  description: 'Mentions légales, politique de confidentialité et informations réglementaires.',
  alternates: { canonical: '/legal' },
};
