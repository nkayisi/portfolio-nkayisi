import EducationSection from "@/components/education-section";
import Footer from "@/components/footer";
import FurtherTraining from "@/components/futher-training";
import HeroSection from "@/components/hero-section";
import Recommendations from "@/components/recommendations";
import ProjectsGrid from "@/components/projects-grid";
import SkillsWheel from "@/components/skills-wheel";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-mono)]">
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <Spotlight />
      </div>

      {/* Main container */}
      <main className="max-w-screen-md min-w-screen-md flex flex-col gap-10 flex-1 bg-card dark:bg-card border-x border-border">
        {/* Hero Section */}
        <HeroSection />

        <div className="w-full sm:px-10 px-4 relative flex flex-col flex-1 gap-10 sm:gap-14 justify-center items-center">
          {/* Skills */}
          <SkillsWheel />

          {/* Projects */}
          <ProjectsGrid />

          {/* Education */}
          <EducationSection />

          {/* Further Training */}
          <FurtherTraining />

          {/* Experience */}
          <Experience />

          {/* Recommendations */}
          <Recommendations />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
