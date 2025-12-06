import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="hero" className="relative h-[calc(100vh-3.5rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Crafting Digital Experiences
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          A passionate developer transforming ideas into elegant,
          performant, and user-friendly web solutions.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
