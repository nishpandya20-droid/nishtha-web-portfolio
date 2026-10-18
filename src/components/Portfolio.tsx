/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Layers, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';
import CardTilt from './CardTilt';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = [
  'All',
  'Brand Identity',
  'Poster Design',
  'Open Source',
  'Logo Design',
  'Presentation'
] as const;

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredProjects = projects.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="portfolio-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Background radial soft light blobs */}
      <div className="absolute top-1/3 left-1/4 h-[350px] w-[350px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Headline */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end justify-between mb-12 sm:mb-16 text-left">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              04 / VISUAL ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-[#A855F7] to-cyan-400">Works</span>
            </h2>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-white/[0.01] border border-white/5 p-1 rounded-2xl backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/15'
                    : 'text-zinc-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-like grid with Framer Motion Layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-16 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3">
                  <Layers size={22} />
                </div>
                <h4 className="text-white font-semibold text-base">No projects in this category yet</h4>
                <p className="text-zinc-500 text-xs mt-1">Check back soon or explore other categories above.</p>
              </motion.div>
            ) : (
              filteredProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject(proj)}
                  className="cursor-pointer group"
                >
                <CardTilt className="h-full overflow-hidden flex flex-col justify-between border border-white/5 bg-white/[0.015] hover:border-violet-500/30">
                  {/* Image Display */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40 border-b border-white/5">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />

                    {/* Glassy hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-xs">
                      <div className="flex gap-3">
                        <div className="rounded-full bg-violet-600/30 border border-violet-500 p-3 text-white transition-all duration-300 transform scale-90 group-hover:scale-100 group-hover:rotate-12 hover:bg-violet-600">
                          <Eye size={18} />
                        </div>
                        <div className="rounded-full bg-cyan-600/30 border border-cyan-500 p-3 text-white transition-all duration-300 transform scale-90 group-hover:scale-100 group-hover:-rotate-12 hover:bg-cyan-600">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>

                    {/* Quick Tag */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-[10px] font-mono tracking-widest text-zinc-300 border border-white/10 backdrop-blur-sm">
                      <Layers size={10} className="text-cyan-400" />
                      {proj.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Card Metadata Details */}
                  <div className="p-6 text-left space-y-2">
                    <h3 className="text-base sm:text-lg font-sans font-black text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans font-normal line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.software.slice(0, 2).map((sw, index) => (
                        <span
                          key={index}
                          className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400 border border-white/5"
                        >
                          {sw}
                        </span>
                      ))}
                      {proj.software.length > 2 && (
                        <span className="text-[10px] text-zinc-500 font-mono flex items-center pl-1">
                          +{proj.software.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </CardTilt>
              </motion.div>
            )))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
