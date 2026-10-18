/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, Sparkles, Send, Clock, ShieldCheck } from 'lucide-react';
import CardTilt from './CardTilt';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'nishpandya20@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    {
      name: 'LinkedIn',
      handle: 'Nishtha Pandya',
      description: 'Connect for career opportunities, networking, and endorsements',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nishtha-pandya-820a7a33a',
      accent: 'from-blue-600/20 to-indigo-600/20 border-blue-500/30 text-blue-400 hover:border-blue-400',
      btnColor: 'bg-blue-600 hover:bg-blue-500 text-white'
    },
    {
      name: 'GitHub',
      handle: 'nishpandya20-droid',
      description: 'Check out code repositories, open-source work, and design projects',
      icon: Github,
      url: 'https://github.com/nishpandya20-droid',
      accent: 'from-zinc-700/20 to-zinc-900/20 border-white/10 text-zinc-300 hover:border-zinc-400',
      btnColor: 'bg-white/10 hover:bg-white/20 text-white'
    }
  ];

  return (
    <section id="contact-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Background soft glow orbs */}
      <div className="absolute top-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Headline */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
            09 / CONNECT & COLLABORATE
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">Connect</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mt-2 font-sans font-normal leading-relaxed">
            Looking for creative and impactful designs? I'm always open to discussing new projects, design leadership roles, and creative partnerships.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Email Card - 7 Columns */}
          <div className="lg:col-span-7">
            <CardTilt className="h-full p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-[#0E0E14] to-violet-950/10 flex flex-col justify-between text-left space-y-8 shadow-2xl">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-3.5 py-1 text-xs font-mono text-violet-300">
                  <Sparkles size={12} className="text-violet-400" />
                  DIRECT COMMUNICATION
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white tracking-tight">
                    Start a Conversation
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Have an idea for a brand identity, event posters, presentation, or content campaign? Drop me an email directly and let's bring your vision to life.
                  </p>
                </div>

                {/* Email Address Container */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="rounded-xl bg-violet-500/20 p-3 text-violet-300 border border-violet-500/30">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">Email Address</div>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-base sm:text-lg font-sans font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-zinc-200 hover:text-white hover:border-violet-500 hover:bg-violet-600/20 transition-all cursor-pointer w-full sm:w-auto justify-center"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} className="text-zinc-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${emailAddress}?subject=Project%20Inquiry%20from%20Portfolio`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:brightness-110 active:scale-98 transition-all cursor-pointer flex-1"
                  >
                    <Send size={15} />
                    Send An Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nishtha-pandya-820a7a33a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-zinc-200 hover:text-white hover:bg-white/[0.08] hover:border-blue-400/40 active:scale-98 transition-all cursor-pointer"
                  >
                    <Linkedin size={15} className="text-blue-400" />
                    LinkedIn Message
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono pt-1">
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-cyan-400" />
                    <span>Quick Response (under 24h)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>Open for Freelance</span>
                  </div>
                </div>
              </div>
            </CardTilt>
          </div>

          {/* Social Profiles & Info Cards - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between text-left">
            {socials.map((soc) => (
              <CardTilt key={soc.name} className={`p-6 sm:p-7 rounded-3xl border bg-gradient-to-br ${soc.accent} backdrop-blur-md flex flex-col justify-between space-y-4 shadow-xl`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-black/40 p-3 border border-white/10">
                      <soc.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-sans font-bold text-white leading-tight">{soc.name}</h4>
                      <span className="text-xs font-mono text-zinc-400">{soc.handle}</span>
                    </div>
                  </div>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all shadow-md cursor-pointer ${soc.btnColor}`}
                  >
                    <span>Visit</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {soc.description}
                </p>
              </CardTilt>
            ))}

            {/* Quick Status Pill Box */}
            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.015] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-sans font-medium text-zinc-300">Available for Summer / Winter 2026</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Remote & On-site</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
