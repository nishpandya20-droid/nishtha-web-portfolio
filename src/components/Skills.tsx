/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { skills } from '../data';
import CardTilt from './CardTilt';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Core Tools' | 'Design Principles' | 'Specializations'>('All');

  const categories = ['All', 'Core Tools', 'Design Principles', 'Specializations'] as const;

  const filteredSkills = skills.filter((sk) => {
    if (activeCategory === 'All') return true;
    return sk.category === activeCategory;
  });

  // Dynamic Lucide icon lookup helper
  const renderIcon = (iconName: string, className: string = '') => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.HelpCircle size={20} className={className} />;
    return <IconComponent size={20} className={className} />;
  };

  return (
    <section id="skills-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 h-[250px] w-[250px] rounded-full bg-cyan-600/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[250px] w-[250px] rounded-full bg-violet-600/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              02 / SKILL SET & TOOLKITS
            </div>
            <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
              Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400">Competence</span>
            </h2>
          </div>

          {/* Filtering Categories */}
          <div className="flex flex-wrap gap-2 bg-white/[0.02] border border-white/5 p-1.5 rounded-2xl backdrop-blur-md self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((sk) => (
              <motion.div
                key={sk.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <CardTilt className="p-6 h-full flex flex-col justify-between group overflow-hidden relative">
                  {/* Glowing light spot on card top corner */}
                  <div className="absolute top-0 right-0 h-12 w-12 rounded-full bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4">
                    {/* Header: Icon & rating percentage */}
                    <div className="flex justify-between items-start">
                      <div className={`p-3 rounded-xl bg-gradient-to-tr ${sk.color} text-white shadow-lg shadow-indigo-500/10`}>
                        {renderIcon(sk.iconName)}
                      </div>
                      <span className="text-sm font-mono font-bold text-zinc-400">
                        {sk.rating}%
                      </span>
                    </div>

                    {/* Skill Info */}
                    <div className="space-y-2 text-left">
                      <h3 className="text-base font-sans font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                        {sk.name}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px]">
                        {sk.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated Progress Gauge */}
                  <div className="space-y-2 pt-4 border-t border-white/5 mt-4">
                    <div className="h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden relative">
                      <motion.div
                        className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r ${sk.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.rating}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-mono font-bold tracking-wider text-zinc-500">
                      <span>STABILITY</span>
                      <span>{sk.rating >= 95 ? 'EXPERT' : 'ADVANCED'}</span>
                    </div>
                  </div>
                </CardTilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
