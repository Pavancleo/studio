"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";
import AnimatedBackground from "@/components/effects/animated-background";

export default function SkillsSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section 
      id="skills" 
      ref={ref}
      className={`relative overflow-hidden transition-all duration-1000 ${inView ? 'opacity-100 animate-bounce-in' : 'opacity-0'}`}
    >
      <AnimatedBackground />
      <div className="relative z-10 bg-primary/10 backdrop-blur-sm py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
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
                className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_20px_4px_hsl(var(--primary)/20%)] hover:-translate-y-1"
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
      </div>
    </section>
  );
}
