import { Code, Bot, Database, Cloudy, GitBranch, Briefcase, Award, GraduationCap, Github, Linkedin, Mail, KeyRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navigationLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certs', href: '#certifications' },
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
    title: 'AI-Powered Portfolio Analyzer',
    description: 'A web app that uses machine learning to analyze investment portfolios and provide risk assessment.',
    imageId: 'project-1',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with features like product management, user authentication, and a payment gateway.',
    imageId: 'project-2',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Creative Design Agency Site',
    description: 'A visually-driven website for a design agency, showcasing their work with interactive animations.',
    imageId: 'project-3',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets, built with D3.js and React for a seamless user experience.',
    imageId: 'project-4',
    liveUrl: '#',
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
    name: 'Google Certified Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: 'Issued Jun 2023',
    Icon: Award,
    imageId: 'cert-1',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    date: 'Issued Dec 2022',
    Icon: Award,
    imageId: 'cert-2',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Issued Mar 2022',
    Icon: Award,
    imageId: 'cert-3',
  },
];

export const contactInfo = {
  email: 'hello@liquidfolio.dev',
  socials: [
    { name: 'GitHub', url: '#', Icon: Github },
    { name: 'LinkedIn', url: '#', Icon: Linkedin },
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
