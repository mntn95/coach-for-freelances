"use client";

import { legalData } from "@/data/legal";
import {
  LegalContentSection,
  LegalHeroSection,
  PrivacyContentSection,
} from "../components/features/legal";
import {
  AnimatedSection,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui";

export default function LegalPage() {
  return (
    <div>
      <LegalHeroSection />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Tabs defaultValue="legal" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="legal">{legalData.tabs.legal}</TabsTrigger>
                <TabsTrigger value="privacy">
                  {legalData.tabs.privacy}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="legal">
                <LegalContentSection />
              </TabsContent>

              <TabsContent value="privacy">
                <PrivacyContentSection />
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
