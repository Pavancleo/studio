"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Typewriter({
  text,
  className,
  cursorClassName,
  typingSpeed = 100,
}: {
  text: string;
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, typingSpeed]);

  return (
    <span className={cn(className)}>
      {displayedText}
      {isTyping && (
        <span
          className={cn(
            'animate-pulse',
            cursorClassName
          )}
        >
          |
        </span>
      )}
    </span>
  );
}
