/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { processSteps } from '../data';
import CardTilt from './CardTilt';

export default function Process() {
  // Dynamic Lucide icon lookup helper
  const renderIcon = (iconName: string, className: string = '') => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.HelpCircle size={20} className={className} />;
    return <IconComponent size={20} className={className} />;
  };

  return (
    <section id="process-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Glow Backings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-indigo-600/5 blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Headline */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            05 / STRATEGIC WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Process</span>
          </h2>
        </div>

        {/* Workflow steps connected with styling arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Custom SVG line connectors for widescreen layouts */}
          <div className="absolute inset-0 top-1/2 h-0.5 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-emerald-500/10 hidden lg:block pointer-events-none" />

          {processSteps.map((step, idx) => (
            <CardTilt
              key={step.step}
              className="p-8 sm:p-10 h-full flex flex-col justify-between overflow-hidden relative group border-white/5 bg-white/[0.01]"
            >
              <div className="space-y-6 text-left relative z-20">
                {/* Step numbering & icon */}
                <div className="flex justify-between items-center">
                  <span className="text-4xl font-mono font-black text-white/5 group-hover:text-cyan-400/10 transition-colors leading-none select-none">
                    {step.step}
                  </span>
                  <div className={`p-3 rounded-2xl border border-white/10 bg-[#09090B]/60 ${step.colorClass}`}>
                    {renderIcon(step.iconName)}
                  </div>
                </div>

                {/* Info Text */}
                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-sans font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-normal">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Progress arrow indicators pointing to the next step */}
              {idx < processSteps.length - 1 && (
                <div className="absolute bottom-6 right-6 hidden lg:block z-10 text-white/10 group-hover:text-cyan-400/40 transition-colors transform group-hover:translate-x-1 duration-300">
                  <LucideIcons.ArrowRight size={18} />
                </div>
              )}
            </CardTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
