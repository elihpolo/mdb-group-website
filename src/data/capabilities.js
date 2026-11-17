import { Target, Layers, ClipboardCheck, ChartGantt, Landmark, Users, ShieldCheck, Radar } from 'lucide-react';

// Descriptions are paraphrased from the service areas published on mdbgrp.com.
export const capabilities = [
  {
    slug: 'strategic-planning',
    code: 'SP',
    title: 'Strategic Planning',
    icon: Target,
    summary: 'Analysis of future warfighting concepts aligned with the National Military Strategy, turned into executable plans.',
  },
  {
    slug: 'ppbs',
    code: 'PPB',
    title: 'Planning, Programming, Budgeting Systems',
    icon: Layers,
    summary: 'Support across the PPBE cycle — program analysis for budget execution, resourcing decisions and milestone reviews.',
  },
  {
    slug: 'acquisition-management',
    code: 'ACQ',
    title: 'Acquisition Management',
    icon: ClipboardCheck,
    summary: 'Defense Acquisition System support that connects JCIDS requirements, PPBE resourcing and acquisition milestones.',
  },
  {
    slug: 'program-management',
    code: 'PM',
    title: 'Program Management & Support',
    icon: ChartGantt,
    summary: 'Administration and program management across the full life cycle for DoD, federal and state agencies.',
  },
  {
    slug: 'financial-management',
    code: 'FM',
    title: 'Financial Planning & Management',
    icon: Landmark,
    summary: 'Budget execution analysis plus manpower costing and affordability assessments built on DoD data systems.',
  },
  {
    slug: 'force-development',
    code: 'FD',
    title: 'Force Development',
    icon: Users,
    summary: 'Requirements analysis and materiel development support — prime support to Army G-8 Force Development since 2015.',
  },
  {
    slug: 'organizational-security',
    code: 'SEC',
    title: 'Organizational Security',
    icon: ShieldCheck,
    summary: 'A cleared workforce holding Secret, TS and TS/SCI clearances, backed by a dedicated facility security program.',
  },
  {
    slug: 'operational-support',
    code: 'OPS',
    title: 'Defense Operational Support',
    icon: Radar,
    summary: 'Operational planning, workforce and manpower analysis, and force management training for senior leaders.',
  },
];
