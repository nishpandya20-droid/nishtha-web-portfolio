/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, Instagram, Dribbble, Palette, Sparkles } from 'lucide-react';
import CardTilt from './CardTilt';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sendingState, setSendingState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out the required name, email, and message fields.');
      return;
    }

    setSendingState('sending');
    // Simulate API delivery
    setTimeout(() => {
      setSendingState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSendingState('idle'), 5000); // reset status
    }, 1800);
  };

  const socials = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/nishtha-pandya-820a7a33a', color: 'text-indigo-400 border-indigo-500/20 hover:bg-indigo-600/10 hover:border-indigo-500/40' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/nishpandya20-droid', color: 'text-zinc-300 border-zinc-500/20 hover:bg-zinc-600/10 hover:border-zinc-500/40' },
  ];

  return (
    <section id="contact-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-violet-600/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-600/5 blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Headline */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            10 / COLLABORATION GATEWAY
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column (Information details) - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/5 px-4.5 py-1.5 text-[10px] font-mono tracking-widest text-zinc-300">
                <Sparkles size={11} className="text-cyan-400" />
                LET'S CRAFT AN AWARD-WINNING PROJECT
              </div>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight leading-snug">
                Let's Work Together
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans font-normal">
                Looking for creative and impactful designs? I'm always excited to work on new ideas and projects. Feel free to reach out, and I'll get back to you soon.
              </p>
            </div>

            {/* Direct Contact Handles */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.01] border border-white/5">
                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400 border border-violet-500/20">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-zinc-500 tracking-wider">EMAIL DIRECT</div>
                  <a href="mailto:nishpandya20@gmail.com" className="text-sm font-sans font-extrabold text-white hover:text-cyan-400 transition-colors">
                    nishpandya20@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social channels tags */}
            <div className="space-y-3 pt-6">
              <div className="text-[10px] font-mono font-bold text-zinc-500 tracking-wider uppercase">ARCHIVE NETWORKS</div>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((sc, idx) => (
                  <a
                    key={idx}
                    href={sc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl border bg-white/[0.01] px-4 py-2.5 text-xs font-bold transition-all ${sc.color}`}
                  >
                    <sc.icon size={14} />
                    {sc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Secure Glass Form) - 7 Columns */}
          <div className="lg:col-span-7">
            <CardTilt className="p-8 sm:p-10 border-white/5 bg-white/[0.01] hover:bg-white/[0.02]">
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4.5 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-violet-500 focus:bg-black/60 focus:ring-1 focus:ring-violet-500/30 font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                      Email Address <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4.5 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-violet-500 focus:bg-black/60 focus:ring-1 focus:ring-violet-500/30 font-sans"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brand Identity Redesign"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4.5 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-violet-500 focus:bg-black/60 focus:ring-1 focus:ring-violet-500/30 font-sans"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                    Detailed Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your design objectives, timelines, and guidelines..."
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4.5 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-violet-500 focus:bg-black/60 focus:ring-1 focus:ring-violet-500/30 font-sans resize-none"
                  />
                </div>

                {/* Form sending feedback and Submit */}
                <div className="pt-2">
                  {sendingState === 'success' ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-400"
                    >
                      <CheckCircle2 size={18} />
                      Message transmitted successfully! Thank you, I will reach out soon.
                    </motion.div>
                  ) : (
                    <button
                      type="submit"
                      disabled={sendingState === 'sending'}
                      className="group w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-101 active:scale-98 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      {sendingState === 'sending' ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Transmitting message files...
                        </>
                      ) : (
                        <>
                          <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                          Transmit Message File
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </CardTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
