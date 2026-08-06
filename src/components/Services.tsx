/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { services } from '../data';
import CardTilt from './CardTilt';

export default function Services() {
  // Dynamic Lucide icon lookup helper
  const renderIcon = (iconName: string, className: string = '') => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.HelpCircle size={24} className={className} />;
    return <IconComponent size={24} className={className} />;
  };

  return (
    <section id="services-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-violet-600/5 blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-600/5 blur-[90px] pointer-events-none animate-pulse" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Headline */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-pink-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            03 / PROFESSIONAL SERVICES
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">Offer</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <CardTilt
              key={srv.id}
              className="p-8 sm:p-10 h-full flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Animated glowing gradient border on hover */}
              <div className="absolute -inset-px bg-gradient-to-tr from-transparent via-white/5 to-transparent group-hover:via-violet-500/20 rounded-2xl transition-all duration-500 pointer-events-none" />

              <div className="space-y-6 text-left">
                {/* Icon wrapper with glow backlighting */}
                <div className="relative inline-flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${srv.gradientClass} opacity-15 blur-md group-hover:opacity-30 transition-opacity`} />
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white group-hover:scale-105 transition-transform duration-300">
                    {renderIcon(srv.iconName, 'text-zinc-100 group-hover:text-cyan-400 transition-colors')}
                  </div>
                </div>

                {/* Service Metadata */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-sans font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-normal">
                    {srv.description}
                  </p>
                </div>

                {/* Core features list bullet checkmarks */}
                <ul className="space-y-2.5 pt-5 border-t border-white/5 mt-5">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-zinc-400">
                      <LucideIcons.CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                      <span className="font-sans font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Prompt */}
              <div className="pt-6 mt-6 flex justify-end">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-widest text-zinc-500 group-hover:text-cyan-400 uppercase transition-colors">
                  REQUEST SERVICE
                  <LucideIcons.ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </CardTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
