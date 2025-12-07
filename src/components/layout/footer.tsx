"use client";

import * as React from "react";
import Link from "next/link";
import { Waves } from "lucide-react";
import { contactInfo } from "@/lib/data";
import AnimatedBackground from "@/components/effects/animated-background";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const WordBounce = ({ text, parentInView, className, stagger = 50 }: { text: string, parentInView: boolean, className?: string, stagger?: number }) => {
  return (
    <div className={cn("flex flex-wrap", className)}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className={`transition-all duration-500 ease-out ${parentInView ? 'opacity-100 animate-bounce-in' : 'opacity-0'}`}
          style={{ animationDelay: `${i * stagger}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};


export default function Footer() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <footer 
      id="contact" 
      ref={ref}
      className={`relative border-t border-black/10 overflow-hidden transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <AnimatedBackground />
      <div className={`relative z-10 bg-background/80 backdrop-blur-sm transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center space-x-2">
              <Waves className={`h-6 w-6 text-primary transition-all duration-500 ${inView ? 'opacity-100 animate-bounce-in' : 'opacity-0'}`} />
              <WordBounce text="P | Portfolio" parentInView={inView} className="font-bold font-headline" />
            </div>
            <div className="flex flex-col items-center gap-4 text-center md:items-end">
              <WordBounce text="Get in touch:" parentInView={inView} className="text-muted-foreground" stagger={100} />
              <a href={`mailto:${contactInfo.email}`} className={`font-semibold text-primary hover:underline transition-all duration-500 ease-out ${inView ? 'opacity-100 animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                {contactInfo.email}
              </a>
              <div className="flex space-x-2">
                {contactInfo.socials.map((social, index) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-background/50 p-2 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:bg-background/70 hover:text-foreground hover:shadow-[0_0_15px_2px_hsl(var(--chart-3)/70%)] ${inView ? 'opacity-100 animate-bounce-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${500 + index * 150}ms` }}
                  >
                    <social.Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
             <WordBounce text={`© ${new Date().getFullYear()} Pavan. All Rights Reserved.`} parentInView={inView} className="justify-center" />
          </div>
        </div>
      </div>
    </footer>
  );
}
