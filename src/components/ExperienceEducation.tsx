/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Crown,
  Terminal,
  Sparkles,
  Snowflake,
  Lightbulb,
  Code,
  Share2,
  BookOpen
} from 'lucide-react';
import { timeline } from '../data';
import CardTilt from './CardTilt';

// Helper to render Lucide Icons dynamically
function TimelineIcon({ iconName, size = 12 }: { iconName?: string; size?: number }) {
  switch (iconName) {
    case 'Crown': return <Crown size={size} />;
    case 'Terminal': return <Terminal size={size} />;
    case 'Sparkles': return <Sparkles size={size} />;
    case 'Snowflake': return <Snowflake size={size} />;
    case 'Lightbulb': return <Lightbulb size={size} />;
    case 'Code': return <Code size={size} />;
    case 'Share2': return <Share2 size={size} />;
    case 'BookOpen': return <BookOpen size={size} />;
    case 'GraduationCap': return <GraduationCap size={size} />;
    default: return <Briefcase size={size} />;
  }
}

export default function ExperienceEducation() {
  // Symmetrical splitting for a premium balanced layout
  const leftColumnItems = timeline.filter((item) => 
    item.id === 'exp-1' || item.id === 'exp-2' || item.id === 'exp-3' || item.id === 'exp-4'
  );
  const rightColumnItems = timeline.filter((item) => 
    item.id === 'exp-5' || item.id === 'exp-6' || item.id === 'exp-7' || item.id === 'exp-8' || item.type === 'education'
  );

  return (
    <section id="experience-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Decorative Blur Ambient Orbs */}
      <div className="absolute top-1/4 right-0 h-[250px] w-[250px] rounded-full bg-indigo-600/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-[250px] w-[250px] rounded-full bg-cyan-600/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Work & Leadership Experience - 6 Columns */}
          <div className="lg:col-span-6 space-y-10">
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                06 / LEADERSHIP & DESIGN
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight leading-none">
                Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Experience</span>
              </h2>
            </div>

            {/* Vertical timeline stack */}
            <div className="relative pl-6 sm:pl-8 border-l border-white/5 space-y-8 text-left">
              {leftColumnItems.map((item) => (
                <div key={item.id} className="relative">
                  {/* Glowing Node Indicator */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#09090B] shadow-md transition-all ${
                    item.isLeadership
                      ? 'border border-amber-500 text-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.3)]'
                      : 'border border-violet-500/30 text-violet-400 shadow-[0_0_8px_rgba(124,58,237,0.2)]'
                  }`}>
                    <TimelineIcon iconName={item.iconName} />
                  </div>

                  <CardTilt className={`p-6 sm:p-8 space-y-4 bg-white/[0.01] transition-all group ${
                    item.isLeadership
                      ? 'border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)] hover:border-amber-500/40'
                      : 'border-white/5 hover:border-violet-500/30'
                  }`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-start">
                      <div className="space-y-0.5">
                        <h3 className={`text-base sm:text-lg font-sans font-extrabold text-white transition-colors leading-tight ${
                          item.isLeadership ? 'group-hover:text-amber-400' : 'group-hover:text-cyan-400'
                        }`}>
                          {item.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-sans font-semibold text-zinc-400">
                          {item.organization}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} className="text-cyan-400" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} className="text-pink-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </CardTilt>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Community & Education - 6 Columns */}
          <div className="lg:col-span-6 space-y-10">
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                07 / COMMUNITY & ACADEMICS
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight leading-none">
                Community & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Background</span>
              </h2>
            </div>

            {/* Vertical timeline stack */}
            <div className="relative pl-6 sm:pl-8 border-l border-white/5 space-y-8 text-left">
              {rightColumnItems.map((item) => (
                <div key={item.id} className="relative">
                  {/* Glowing Node Indicator */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#09090B] shadow-md transition-all ${
                    item.type === 'education'
                      ? 'border border-cyan-500/30 text-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.2)]'
                      : 'border border-violet-500/30 text-violet-400 shadow-[0_0_8px_rgba(124,58,237,0.2)]'
                  }`}>
                    <TimelineIcon iconName={item.type === 'education' ? 'GraduationCap' : item.iconName} />
                  </div>

                  <CardTilt className={`p-6 sm:p-8 space-y-4 bg-white/[0.01] transition-all group ${
                    item.type === 'education'
                      ? 'border-white/5 hover:border-cyan-500/30'
                      : 'border-white/5 hover:border-violet-500/30'
                  }`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-start">
                      <div className="space-y-0.5">
                        <h3 className="text-base sm:text-lg font-sans font-extrabold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                          {item.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-sans font-semibold text-zinc-400">
                          {item.organization}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} className="text-cyan-400" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} className="text-pink-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Coursework list tags */}
                    {item.coursework && item.coursework.length > 0 && (
                      <div className="space-y-2 pt-3 border-t border-white/5">
                        <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                          <Award size={11} className="text-pink-400" />
                          Core Coursework
                        </span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-zinc-300 border border-white/5 font-sans"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardTilt>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
