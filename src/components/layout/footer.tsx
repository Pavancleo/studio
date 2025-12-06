import Link from "next/link";
import { Waves } from "lucide-react";
import { contactInfo } from "@/lib/data";
import AnimatedBackground from "@/components/effects/animated-background";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-black/10 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 bg-background/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center space-x-2">
              <Waves className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">P | Portfolio</span>
            </div>
            <div className="flex flex-col items-center gap-4 text-center md:items-end">
              <p className="text-muted-foreground">Get in touch:</p>
              <a href={`mailto:${contactInfo.email}`} className="font-semibold text-primary hover:underline">
                {contactInfo.email}
              </a>
              <div className="flex space-x-2">
                {contactInfo.socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-background/50 p-2 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur-xl transition-all hover:bg-background/70 hover:text-foreground hover:shadow-[0_0_15px_2px_hsl(var(--chart-3)/70%)]"
                  >
                    <social.Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Pavan. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
