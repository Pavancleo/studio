"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10 7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);


export default function LoadingIndicator() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Represents the time for "analysing"

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className={cn(
      "fixed bottom-4 left-4 z-50 transition-all duration-500 ease-out",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    )}>
      <div className="rounded-full border border-white/20 bg-background/30 px-4 py-2 text-sm text-foreground/80 shadow-lg backdrop-blur-lg">
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            analysing
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <EyeIcon className="h-4 w-4" />
            Observing...
          </span>
        )}
      </div>
    </div>
  );
}
