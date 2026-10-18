/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp, Menu, X, Layers, Sparkles, MessageSquare, Award, FileText } from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import ExperienceEducation from './components/ExperienceEducation';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import ResumePreview from './components/ResumePreview';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';

import { Project } from './types';

const NAV_ITEMS = [
  { label: 'Story', id: 'about-section' },
  { label: 'Skills', id: 'skills-section' },
  { label: 'Services', id: 'services-section' },
  { label: 'Works', id: 'portfolio-section' },
  { label: 'Process', id: 'process-section' },
  { label: 'Timeline', id: 'experience-section' },
  { label: 'Credentials', id: 'certifications-section' },
  { label: 'Reviews', id: 'testimonials-section' },
  { label: 'Contact', id: 'contact-section' },
  { label: 'Resume', id: 'resume-section' }
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Framer Motion Page Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Prevent body scroll when modal or mobile drawer is open
  useEffect(() => {
    const shouldLock = selectedProject !== null || mobileMenuOpen;
    const original = document.body.style.overflow;
    if (shouldLock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [selectedProject, mobileMenuOpen]);

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Show/Hide back-to-top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Calculate scroll percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollPercent(Math.round((window.scrollY / totalScroll) * 100));
      }

      // Find current visible section
      const scrollPosition = window.scrollY + 200;
      let currentSection = 'hero';

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = item.id;
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        currentSection = 'hero';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#09090B] min-h-screen text-white relative font-sans selection:bg-violet-500/30 selection:text-white overflow-x-hidden antialiased">
      {/* Award-winning style Loader */}
      <Loader onComplete={() => setLoading(false)} />

      {!loading && (
        <>
          {/* Custom Cursor System */}
          <CustomCursor />

          {/* Top Sticky Visual Page Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 z-110 origin-left"
            style={{ scaleX }}
          />

          {/* Glass Sticky Navigation Bar */}
          <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-4 left-4 right-4 sm:left-6 sm:right-6 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-full lg:max-w-6xl h-16 rounded-2xl border border-white/5 bg-[#09090B]/60 backdrop-blur-xl z-90 flex items-center justify-between px-6 shadow-lg shadow-black/10"
          >
            {/* Logo Brandmark */}
            <button
              onClick={() => handleNavigate('hero')}
              className="flex items-center gap-2 cursor-pointer font-sans font-black tracking-tighter text-lg group text-white hover:text-cyan-400 transition-colors"
            >
              <Award size={18} className="text-violet-500 group-hover:rotate-12 transition-transform duration-300" />
              <span>NISHTHA.</span>
            </button>

            {/* Desktop Navigation Link rails */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-extrabold tracking-tight transition-colors duration-300 cursor-pointer ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute bottom-[-16px] left-0 right-0 h-[2px] bg-cyan-400"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Consult Call CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                onClick={() => handleNavigate('resume-section')}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-bold text-cyan-300 hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all cursor-pointer shadow-md"
              >
                <FileText size={13} className="text-cyan-400" />
                View Resume
              </button>
              <button
                onClick={() => handleNavigate('contact-section')}
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/25 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
              >
                <MessageSquare size={13} />
                Consult Design
              </button>
            </div>

            {/* Mobile Menu toggles */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-xl border border-white/10 bg-white/[0.02] p-2.5 text-zinc-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.header>

          {/* Mobile Overlay Sidebar Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="fixed inset-y-0 right-0 w-full max-w-[300px] z-100 bg-[#0A0A0F]/95 backdrop-blur-2xl border-l border-white/5 flex flex-col justify-between p-8 text-left"
              >
                <div className="space-y-8">
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-black tracking-tighter text-base text-white">NISHTHA.</span>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl border border-white/5 bg-white/[0.03] p-2 text-zinc-400 cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Nav Links Stack */}
                  <div className="flex flex-col gap-4">
                    {NAV_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`text-left py-1 text-sm font-bold tracking-tight transition-all cursor-pointer ${
                          activeSection === item.id ? 'text-cyan-400 pl-2 border-l border-cyan-400' : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Drawer Footer Call */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleNavigate('resume-section')}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-cyan-300 shadow-md cursor-pointer"
                  >
                    <FileText size={14} className="text-cyan-400" />
                    View Resume
                  </button>
                  <button
                    onClick={() => handleNavigate('contact-section')}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/10 cursor-pointer"
                  >
                    <MessageSquare size={14} />
                    Consult Design
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core Visual Workspace */}
          <main className="space-y-0">
            {/* Hero */}
            <Hero onNavigate={handleNavigate} />

            {/* About & Timeline Statistics */}
            <About />

            {/* Skills */}
            <Skills />

            {/* Services Grid */}
            <Services />

            {/* Selected Works Portfolio Grid */}
            <Portfolio onSelectProject={setSelectedProject} />

            {/* Strategic Design Process */}
            <Process />

            {/* Experience & Education timelines */}
            <ExperienceEducation />

            {/* Professional Verified Certifications */}
            <Certifications />

            {/* Client Testimonials slider */}
            <Testimonials />

            {/* Dynamic Contact Gateway form */}
            <Contact />

            {/* Modern Interactive Resume Sheet section - FINAL SECTION */}
            <section id="resume-section" className="relative py-20 sm:py-28 bg-[#09090B] border-t border-white/5">
              <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
                <div className="flex flex-col gap-2 mb-12 sm:mb-16 items-center">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                    10 / OFFICIAL RESUME
                  </div>
                  <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Resume</span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-lg text-center mt-1">
                    Click to explore in full-page form or download the official curriculum vitae.
                  </p>
                </div>

                <ResumePreview />
              </div>
            </section>
          </main>

          {/* Minimal Premium Footer */}
          <footer className="bg-[#07070A] border-t border-white/5 py-12 text-zinc-500 relative z-30">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="font-sans font-black tracking-tighter text-white text-base">NISHTHA.</div>
                <p className="text-[11px] font-mono tracking-wider">PREMIUM LUXURY PORTFOLIO PLATFORM v2.6</p>
              </div>

              {/* Quick helper navigation */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-400">
                <button onClick={() => handleNavigate('about-section')} className="hover:text-cyan-400 transition-colors cursor-pointer">Story</button>
                <button onClick={() => handleNavigate('portfolio-section')} className="hover:text-cyan-400 transition-colors cursor-pointer">Works</button>
                <button onClick={() => handleNavigate('skills-section')} className="hover:text-cyan-400 transition-colors cursor-pointer">Skills</button>
                <button onClick={() => handleNavigate('contact-section')} className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</button>
              </div>

              <div className="text-[10px] font-mono tracking-widest uppercase">
                © {new Date().getFullYear()} NISHTHA. ALL RIGHTS PRESERVED.
              </div>
            </div>
          </footer>

          {/* Floating Back to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onClick={() => handleNavigate('hero')}
                className="fixed bottom-6 right-6 z-90 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0E0E14] text-zinc-400 shadow-xl backdrop-blur-md transition-all hover:border-violet-500 hover:text-white hover:scale-105 active:scale-95 cursor-pointer group"
              >
                {/* Scroll progress ring overlay */}
                <svg className="absolute inset-0 h-full w-full -rotate-90">
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    fill="transparent"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    fill="transparent"
                    stroke="url(#svg-gradient)"
                    strokeWidth="1.5"
                    strokeDasharray={`${2 * Math.PI * 20}`}
                    strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollPercent / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  <defs>
                    <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>

                <ArrowUp size={14} className="relative z-10 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Project Lightbox Detail Modal */}
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </>
      )}
    </div>
  );
}
