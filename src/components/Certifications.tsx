/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { certificates } from '../data';
import CardTilt from './CardTilt';

export default function Certifications() {
  return (
    <section id="certifications-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Glow Backing */}
      <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-600/5 blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Headline */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            08 / ENDORSED CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400">Certifications</span>
          </h2>
        </div>

        {/* Certifications Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <CardTilt
              key={cert.id}
              className="group overflow-hidden flex flex-col justify-between border-white/5 bg-white/[0.01] hover:border-cyan-500/30 p-6 sm:p-8"
            >
              {/* Card visual contents */}
              <div className="space-y-6 text-left">
                {/* Embedded Aesthetic Certificate Layout */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/5 flex flex-col justify-between p-4 sm:p-5 select-none shadow-inner group-hover:border-cyan-500/20 transition-colors">
                  {/* Watermark Logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-white">
                    <Award size={100} />
                  </div>

                  {/* Top line metadata */}
                  <div className="flex justify-between items-center text-[8px] font-mono font-bold text-zinc-500 tracking-wider">
                    <span>ACADEMIC VERIFIED</span>
                    <span>ID: {cert.id.toUpperCase()}</span>
                  </div>

                  {/* Center branding name */}
                  <div className="text-center space-y-1 py-4">
                    <div className="text-xs font-mono font-bold text-zinc-400 tracking-widest leading-none">
                      {cert.organization.toUpperCase()}
                    </div>
                    <div className="text-sm font-sans font-black text-white leading-tight">
                      {cert.title}
                    </div>
                  </div>

                  {/* Bottom line credential checks */}
                  <div className="flex justify-between items-end text-[8px] font-mono font-bold text-zinc-500">
                    <div className="flex items-center gap-1">
                      <ShieldCheck size={9} className="text-emerald-400" />
                      <span>SECURE DEFI</span>
                    </div>
                    <span>{cert.date.toUpperCase()}</span>
                  </div>
                </div>

                {/* Metadata Details */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-sans font-extrabold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500 font-bold tracking-tight">
                    <span className="flex items-center gap-1.5">
                      <Award size={13} className="text-violet-400" />
                      {cert.organization}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-cyan-400" />
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verify Action Button */}
              <div className="pt-6 border-t border-white/5 mt-6 flex justify-end">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-bold text-zinc-300 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/30 transition-all duration-300"
                >
                  Verify Credential
                  <ArrowUpRight size={13} className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </CardTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
