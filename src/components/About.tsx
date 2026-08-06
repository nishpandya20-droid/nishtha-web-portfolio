/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Smile, Sparkles, Clock, CheckCircle } from 'lucide-react';
import AchievementsCounter from './AchievementsCounter';
import CardTilt from './CardTilt';

export default function About() {
  const stats = [
    {
      id: 'stat-1',
      label: 'Designs',
      value: 250,
      suffix: '+',
      icon: CheckCircle,
      color: 'text-violet-400',
      bgGlow: 'rgba(124, 58, 237, 0.1)'
    },
    {
      id: 'stat-3',
      label: 'Hours',
      value: 4500,
      suffix: '+',
      icon: Clock,
      color: 'text-cyan-400',
      bgGlow: 'rgba(6, 182, 212, 0.1)'
    },
    {
      id: 'stat-4',
      label: 'Happy Clients',
      value: 40,
      suffix: '+',
      icon: Smile,
      color: 'text-emerald-400',
      bgGlow: 'rgba(16, 185, 129, 0.1)'
    }
  ];

  const journeySteps = [
    {
      year: 'Dec 2025 - Present',
      title: 'Open Source Contributor',
      desc: 'Contributing to content, branding, and promotional initiatives for Elite Coders Winter of Code, Elite HER, and ECSOC.',
      icon: Sparkles,
      color: 'border-violet-500 text-violet-400 bg-violet-950/40'
    },
    {
      year: 'May 2026 - June 2026',
      title: 'Python Programming Intern',
      desc: 'Developed modules for an Internship Management Portal and assisted in testing at Ind-Velloni (OPC) Private Limited.',
      icon: Briefcase,
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40'
    },
    {
      year: 'July 2025 - Aug 2025',
      title: 'IT & Telecommunication Intern',
      desc: 'Gained exposure to enterprise IT infrastructure, networking, and telecommunication systems at GAIL (India) Limited.',
      icon: Award,
      color: 'border-pink-500 text-pink-400 bg-pink-950/40'
    },
    {
      year: '2023 - 2027',
      title: 'B.Tech CSE Student',
      desc: 'Combining core Computer Science & Engineering studies with a strong passion for UI/UX and graphic design at Govt Women Engineering College Ajmer.',
      icon: Award,
      color: 'border-indigo-500 text-indigo-400 bg-indigo-950/40'
    }
  ];

  return (
    <section id="about-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 right-0 h-[250px] w-[250px] rounded-full bg-violet-600/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 h-[250px] w-[250px] rounded-full bg-cyan-600/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Headline */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            01 / STORY & TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">Me</span>
          </h2>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Text/Bio Block - 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
                I am a passionate Graphic Designer who enjoys creating clean, creative, and visually appealing designs. I specialize in social media graphics, posters, presentations, branding, and UI design. I focus on creating designs that are both attractive and easy to understand.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
                My goal is to turn ideas into impactful visuals that communicate clearly. I pay close attention to color, typography, layout, and user experience to create professional designs that leave a lasting impression.
              </p>
            </div>

            {/* Custom interactive journey timeline cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {journeySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 flex gap-4 items-start text-left"
                >
                  <div className={`rounded-xl border p-2.5 flex items-center justify-center shrink-0 ${step.color}`}>
                    <step.icon size={16} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">{step.year}</div>
                    <h4 className="text-sm font-sans font-extrabold text-white">{step.title}</h4>
                    <p className="text-xs text-zinc-400 leading-normal">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Tilt visual stats card block - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <CardTilt className="h-full w-full p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
              {/* Backlit glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-violet-600/5 to-cyan-500/5 blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-500/10 p-2 text-violet-400 border border-violet-500/25">
                    <Award size={18} />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-400 tracking-widest uppercase">STATISTICS BENCHMARKS</span>
                </div>
                <h4 className="text-2xl font-sans font-black text-white leading-tight">
                  Design Competence in Real Numbers
                </h4>
                <p className="text-xs text-zinc-500 font-mono tracking-wider uppercase leading-relaxed">
                  TRACKING VISUAL ENGAGEMENT PERFORMANCE METRICS
                </p>
              </div>

              {/* Grid of counter elements */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 pt-8 mt-6 border-t border-white/5">
                {stats.map((st) => (
                  <div key={st.id} className="text-left space-y-1 relative">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`p-1.5 rounded-lg border border-white/5 bg-white/[0.02] ${st.color}`}>
                        <st.icon size={13} />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight leading-none">
                      <AchievementsCounter target={st.value} suffix={st.suffix} />
                    </div>
                    <div className="text-[10px] font-mono font-bold text-zinc-500 tracking-widest uppercase">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
