"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { certifications } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Certifications & Accolades
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Validations of my expertise and continuous learning.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const certImage = PlaceHolderImages.find(p => p.id === cert.imageId);
            return (
              <Dialog key={cert.name}>
                <DialogTrigger asChild>
                  <Card 
                    className="flex items-start p-6 bg-card rounded-xl shadow-md transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-2xl hover:border-primary hover:shadow-[0_0_15px_2px_hsl(var(--primary)/50%)] hover:-translate-y-1 cursor-pointer"
                  >
                    <cert.Icon className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <CardHeader className="p-0">
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <CardDescription className="pt-1">{cert.issuer}</CardDescription>
                      </CardHeader>
                      <p className="mt-2 text-sm font-medium text-primary">{cert.date}</p>
                    </div>
                  </Card>
                </DialogTrigger>
                {certImage && (
                   <DialogContent className="max-w-3xl bg-background/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg">
                    <DialogHeader>
                      <DialogTitle>{cert.name}</DialogTitle>
                    </DialogHeader>
                    <div className="relative aspect-video mt-4">
                      <Image
                        src={certImage.imageUrl}
                        alt={cert.name}
                        fill
                        className="object-contain"
                        data-ai-hint={certImage.imageHint}
                      />
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
