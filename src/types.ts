/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: 'Brand Identity' | 'Poster Design' | 'Open Source' | 'Logo Design' | 'Presentation';
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  software: string[];
  client: string;
  date: string;
  documentUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Core Tools' | 'Design Principles' | 'Specializations';
  rating: number; // 0-100
  iconName: string; // Lucide icon
  color: string; // gradient CSS class
  description: string;
}

export interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  organization: string; // Company or University
  role: string; // Job title or Degree
  duration: string; // E.g., "2023 - Present"
  description: string;
  coursework?: string[]; // Education specific
  location: string;
  isLeadership?: boolean;
  iconName?: string;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  verifyUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatar: string;
  topWords?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  gradientClass: string;
  features: string[];
}

export interface ProcessStep {
  step: string; // "01", "02", etc.
  title: string;
  description: string;
  iconName: string;
  colorClass: string;
}
