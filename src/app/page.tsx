import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import EducationSection from "@/components/sections/education";
import CertificationsSection from "@/components/sections/certifications";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'skills-background-light');
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-white/60 z-0"></div>

      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <div className="bg-white/30 backdrop-blur-2xl">
            <SkillsSection />
            <ProjectsSection />
          </div>
          <EducationSection />
          <CertificationsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
