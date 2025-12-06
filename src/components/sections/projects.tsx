"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useInView } from "@/hooks/use-in-view";

export default function ProjectsSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-16 md:py-24 bg-pink-100/50 backdrop-blur-2xl border-t border-b border-black/10 transition-all duration-1000 ${inView ? 'opacity-100 animate-bounce-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <Card 
                key={project.title} 
                className="overflow-hidden bg-background/30 backdrop-blur-2xl border border-black/10 rounded-xl shadow-lg transition-all duration-300 hover:bg-background/50 hover:border-primary hover:shadow-[0_0_35px_8px_hsl(var(--primary)/40%)] hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {projectImage && (
                    <div className="aspect-video relative">
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}
                  <p className="p-6 text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="bg-transparent">
                  <div className="flex w-full justify-end space-x-2">
                    <Link
                      href={project.repoUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-transparent bg-background/30 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur-xl transition-all hover:border-white/20 hover:bg-background/50 hover:text-foreground hover:shadow-[0_0_15px_2px_hsl(var(--chart-3)/70%)]"
                    >
                      <Github className="h-4 w-4" /> Code
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
