import { ContactSection } from "@/components/contact";
import EducationSection from "@/components/education-section";
import { Experience } from "@/components/experience";
import Footer from "@/components/footer";
import FurtherTraining from "@/components/futher-training";
import HeroSection from "@/components/hero-section";
import { LanguageToggle } from "@/components/language-toggle";
import ProjectsGrid from "@/components/projects-grid";
import SkillsWheel from "@/components/skills-wheel";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ThemeToggle } from "@/components/theme-toggle";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { AnimatedGradientBg } from "@/components/ui/animated-gradient-bg";
import QuickLinks from "@/components/quick-links";
import StatsSection from "@/components/stats-section";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-mono)]">
      <AnimatedGradientBg />
      <FloatingParticles />
      <CursorGlow />
      <ScrollProgress />
      <QuickLinks />
      <BackToTop />

      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <Spotlight />
      </div>

      {/* Main container */}
      <main className="w-full max-w-screen-md flex flex-col gap-10 flex-1 bg-card/95 dark:bg-card/95 backdrop-blur-sm sm:border-x border-border shadow-2xl shadow-primary/5 relative">

        <div className="sticky z-50 sm:top-7 top-4 right-4 flex justify-end sm:pe-7 pe-4 gap-2 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex gap-2 backdrop-blur-md bg-background/80 rounded-full p-1 border border-border/50 shadow-lg">
            {/* <LanguageToggle /> */}
            <ThemeToggle />
          </div>
        </div>

        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        <div className="w-full sm:px-10 px-4 pb-20 lg:pb-0 relative flex flex-col flex-1 gap-16 sm:gap-20 justify-center items-center">
          {/* Stats Section */}
          <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <StatsSection />
          </div>

          {/* Skills */}
          <div id="skills" className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <SkillsWheel />
          </div>

          {/* Projects */}
          <div id="projects" className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <ProjectsGrid />
          </div>

          {/* Education */}
          <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <EducationSection />
          </div>

          {/* Further Training */}
          <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-900">
            <FurtherTraining />
          </div>

          {/* Experience */}
          <div id="experience" className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-1000">
            <Experience />
          </div>

          {/* Recommendations */}
          {/* <Recommendations /> */}

          {/* Contact */}
          <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-1100">
            <ContactSection />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
