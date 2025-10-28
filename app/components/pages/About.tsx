import { AboutHeroSection } from "../features/about/AboutHeroSection";
import { StorySection } from "../features/about/StorySection";
import { ValuesSection } from "../features/about/ValuesSection";
import { ExpertiseSection } from "../features/about/ExpertiseSection";
import { MissionSection } from "../features/about/MissionSection";

export function About() {
  return (
    <div>
      <AboutHeroSection />
      <StorySection />
      <ValuesSection />
      <ExpertiseSection />
      <MissionSection />
    </div>
  );
}
