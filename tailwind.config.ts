import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        headline: ['Nunito', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px hsl(var(--primary))' },
          '50%': { boxShadow: '0 0 25px 3px hsl(var(--primary))' },
        },
        'neon-glow': {
          '0%, 100%': {
            textShadow:
              '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff',
          },
          '50%': {
            textShadow:
              '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 50px #f0f, 0 0 90px #f0f, 0 0 100px #f0f, 0 0 120px #f0f, 0 0 180px #f0f',
          },
        },
        'text-shake': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(1px, -1px) rotate(0.5deg)' },
          '50%': { transform: 'translate(-1px, 1px) rotate(-0.5deg)' },
          '75%': { transform: 'translate(1px, 1px) rotate(0.5deg)' },
          '100%': { transform: 'translate(-1px, -1px) rotate(-0.5deg)' },
        },
        animate: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '1',
            borderRadius: '0',
          },
          '100%': {
            transform: 'translateY(-1000px) rotate(720deg)',
            opacity: '0',
            borderRadius: '50%',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg)' },
          '50%': { transform: 'translateY(-6px) rotate(5deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        glow: 'glow 2.5s ease-in-out infinite',
        'neon-glow': 'neon-glow 4s ease-in-out infinite',
        'text-shake': 'text-shake 0.5s linear infinite',
        animate: 'animate 25s linear infinite',
        bounce: 'bounce 1s infinite',
        wave: 'wave 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
