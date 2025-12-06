import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 md:py-24 bg-sky-100/50 backdrop-blur-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="glitch text-3xl font-extrabold tracking-tight sm:text-4xl" data-text="Technical Proficiency">
            Technical Proficiency
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A snapshot of my core competencies and tools I love to work with.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card 
              key={skill.name} 
              className="flex flex-col bg-background/30 backdrop-blur-2xl border border-black/10 rounded-xl shadow-lg transition-all duration-300 hover:bg-background/50 hover:border-primary hover:shadow-[0_0_25px_5px_hsl(var(--primary)/20%)] hover:-translate-y-1"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium text-foreground">{skill.name}</CardTitle>
                <skill.Icon className="h-6 w-6 text-primary" />
              </CardHeader>
              <CardContent className="flex flex-col justify-end flex-1 pt-4">
                <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                <p className="text-xs text-muted-foreground mt-2">{skill.level}% Mastery</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
