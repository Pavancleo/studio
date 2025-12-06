import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import EducationSection from "@/components/sections/education";
import CertificationsSection from "@/components/sections/certifications";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
}
