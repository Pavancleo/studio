import Link from "next/link";
import { Waves } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-background/50 backdrop-blur-2xl">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center space-x-2">
            <Waves className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Liquidfolio</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-center md:items-end">
            <p className="text-muted-foreground">Get in touch:</p>
            <a href={`mailto:${contactInfo.email}`} className="font-semibold text-primary hover:underline">
              {contactInfo.email}
            </a>
            <div className="flex space-x-2">
              {contactInfo.socials.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Liquidfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
