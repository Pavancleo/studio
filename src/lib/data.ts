
import { Code, Bot, Database, Cloudy, GitBranch, Briefcase, Award, GraduationCap, Github, Linkedin, Mail, KeyRound, Instagram } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navigationLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const skills: { name: string; level: number; Icon: LucideIcon }[] = [
  { name: 'Frontend Development', level: 90, Icon: Code },
  { name: 'AI/ML Integration', level: 80, Icon: Bot },
  { name: 'Backend Services', level: 85, Icon: Database },
  { name: 'Cloud & DevOps', level: 75, Icon: Cloudy },
  { name: 'Version Control', level: 95, Icon: GitBranch },
  { name: 'Project Management', level: 80, Icon: Briefcase },
];

export const projects = [
  {
    title: 'AI-ChatBot',
    description: 'A conversational AI chatbot built with modern NLP techniques to assist users.',
    imageId: 'project-1',
    repoUrl: 'https://github.com/Pavancleo/AI-chatbot',
  },
  {
    title: 'Phishing Attack Simulation & Detection',
    description: 'A project that simulates phishing attacks and detects malicious emails to improve security.',
    imageId: 'project-2',
    repoUrl: 'https://github.com/Pavancleo/PHISHING-DETECTION',
  },
  {
    title: 'Password Cracking & Hashing Algorithms',
    description: 'An exploration of password security, demonstrating cracking techniques and analyzing hashing algorithms.',
    imageId: 'project-3',
    repoUrl: 'https://github.com/Pavancleo/password-cracking',
  },
  {
    title: 'Project In Development',
    description: 'This project is currently in development. Stay tuned for updates!',
    imageId: 'project-4',
    repoUrl: '#',
  },
];

export const education = [
  {
    degree: 'Computer Science and Business Systems',
    institution: 'Panimalar Engineering College',
    years: '2024-2028',
    Icon: GraduationCap,
  },
  {
    degree: 'High School',
    institution: 'Velammal Mat Hig Sec School',
    years: '2022 - 2024',
    Icon: GraduationCap,
  },
  {
    degree: 'Middle School',
    institution: 'D.A.V Mat Hig Sec School',
    years: '2010 - 2022',
    Icon: GraduationCap,
  },
];

export const certifications = [
  {
    name: 'Wadhwani Foundations-Employabilty skills',
    issuer: 'SWAYAM',
    date: 'Issued Jun 2025',
    Icon: Award,
    imageId: 'cert-1',
  },
  {
    name: 'Internship completion in Artificial intelligence',
    issuer: 'Teachnook',
    date: 'Issued Dec 2024',
    Icon: Award,
    imageId: 'cert-2',
  },
  {
    name: 'Git it Right: Commit with Confidence',
    issuer: 'Codesapiens',
    date: 'Issued Jul 2024',
    Icon: Award,
    imageId: 'cert-3',
  },
];

export const contactInfo = {
  email: 'pavan2006007@gmail.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com/Pavancleo', Icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pavan-k-4bb2ba308/', Icon: Linkedin },
    { name: 'Instagram', url: 'https://www.instagram.com/pavxn.__.cleo/', Icon: Instagram },
  ],
};

export const contacts = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', message: 'Interested in your AI projects!', received: '2 hours ago' },
  { id: '2', name: 'Bob Williams', email: 'bob@example.com', message: 'Can we connect to discuss a potential role?', received: '1 day ago' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', message: 'Love the design of your portfolio.', received: '3 days ago' },
  { id: '4', name: 'Diana Miller', email: 'diana@example.com', message: 'Great skills, impressive background.', received: '1 week ago' },
]

export const adminNav = [
  { name: 'Dashboard', href: '/admin', Icon: KeyRound },
  { name: 'Contacts', href: '/admin', Icon: Mail },
]
