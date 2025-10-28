import { HeroSection } from '../features/home/HeroSection';
import { StatsSection } from '../features/home/StatsSection';
import { ProblemSection } from '../features/home/ProblemSection';
import { ServicesSection } from '../features/home/ServicesSection';
import { TestimonialsSection } from '../features/home/TestimonialsSection';
import { CTASection } from '../features/home/CTASection';
import type { Page } from '@/types/navigation';
import { useNavigation } from '@/hooks/useNavigation';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { navigate } = useNavigation();

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    navigate(page);
  };

  return (
    <div>
      <HeroSection onNavigate={handleNavigate} />
      <StatsSection />
      <ProblemSection />
      <ServicesSection onNavigate={handleNavigate} />
      <TestimonialsSection onNavigate={handleNavigate} />
      <CTASection onNavigate={handleNavigate} />
    </div>
  );
}
