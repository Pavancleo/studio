import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <Card 
                key={project.title} 
                className="overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-pink-500 hover:shadow-[0_0_15px_2px_rgb(236_72_153_/_50%)] hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
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
                  <p className="p-6 text-slate-300">{project.description}</p>
                </CardContent>
                <CardFooter className="bg-transparent">
                  <div className="flex w-full justify-end space-x-2">
                    <Button variant="ghost" asChild>
                      <Link href={project.repoUrl}>
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
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
