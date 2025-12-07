import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import AnimatedBackground from "@/components/effects/animated-background";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Typewriter from "@/components/effects/typewriter";

export default function HeroSection() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'skills-background-light');
  const descriptionText = "A passionate developer transforming ideas into elegant, performant, and user-friendly web solutions.";

  return (
    <section id="hero" className="relative h-[calc(100vh-3.5rem)] w-full">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover opacity-20"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/60 z-0"></div>
      <AnimatedBackground />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
          Pavan K
        </h1>
        <div className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl h-20 md:h-16">
          <Typewriter text={descriptionText} typingSpeed={50} />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="animate-glow">
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
