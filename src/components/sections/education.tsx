"use client";
import * as React from "react";
import { education } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import AnimatedBackground from "@/components/effects/animated-background";

export default function EducationSection() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: titleRef, inView: titleInView } = useInView<HTMLDivElement>({ threshold: 0.9 });
  const { ref: timelineRef, inView: timelineInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section 
      id="education" 
      ref={ref}
      className={`relative overflow-hidden transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <AnimatedBackground />
      <div className="relative z-10 bg-primary/10 backdrop-blur-sm py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={titleRef}
            className={`text-center transition-all duration-1000 ${titleInView ? 'opacity-100 animate-bounce-in' : 'opacity-0'}`}
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-shake">
              Education
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              My academic journey and qualifications.
            </p>
          </div>
          <div 
            ref={timelineRef}
            className="relative mt-12"
          >
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-black/10"></div>
            {education.map((item, index) => (
              <div
                key={item.institution}
                className={`relative mb-8 flex w-full items-center transition-all duration-1000 ${timelineInView ? 'opacity-100 animate-bounce-in' : 'opacity-0'} ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={cn(
                    "relative w-1/2 p-4",
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-1/2 -translate-y-1/2 bg-slate-100 p-1 rounded-full border-2 border-primary",
                      index % 2 === 0 ? "right-[-18px]" : "left-[-18px]"
                    )}
                  >
                    <item.Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                  <p className="mt-1 text-muted-foreground">{item.institution}</p>
                  <p className="text-sm text-primary">{item.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
