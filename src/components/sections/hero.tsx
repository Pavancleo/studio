import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroBg = PlaceHolderImages.find(p => p.id === "hero-background");

  return (
    <section id="hero" className="relative h-[calc(100vh-3.5rem)] w-full">
      {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          fill
          className="object-cover z-0"
          data-ai-hint={heroBg.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
          Pavan K
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
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
