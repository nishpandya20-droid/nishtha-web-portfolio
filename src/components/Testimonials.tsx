/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';
import { testimonials } from '../data';
import CardTilt from './CardTilt';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-sliding loop
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials-section" className="relative py-20 sm:py-28 bg-[#09090B] overflow-hidden border-t border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-violet-600/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-600/5 blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Section Headline */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16 text-center items-center">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            09 / CLIENT TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-sans font-extrabold text-white tracking-tight leading-none">
            What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">Say</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Display Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <CardTilt className="p-8 sm:p-14 relative overflow-hidden flex flex-col md:flex-row gap-8 sm:gap-12 items-center text-left border-white/5 bg-white/[0.015]">
                {/* Visual Quote Icon Backlight */}
                <div className="absolute -right-6 -bottom-6 text-white/5 pointer-events-none select-none">
                  <Quote size={180} className="transform rotate-180" />
                </div>

                {/* Client Initials Badge Column (no random people photos) */}
                <div className="relative shrink-0">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[2px] shadow-lg shadow-violet-500/20 relative z-10">
                    <div className="h-full w-full rounded-[14px] bg-[#0E0E17] flex items-center justify-center border border-white/10">
                      <span className="font-sans font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 tracking-wider">
                        {activeTestimonial.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .substring(0, 2)
                          .toUpperCase()}
                      </span>
                    </div>
                  </div>
                  {/* Floating quote node */}
                  <div className="absolute -bottom-1.5 -right-1.5 z-20 rounded-full border border-white/10 bg-[#0E0E14] p-2 text-cyan-400 shadow-md">
                    <MessageSquare size={12} />
                  </div>
                </div>

                {/* Feedback commentary column */}
                <div className="space-y-6 flex-1 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Feedback description quote */}
                  <blockquote className="text-base sm:text-lg text-zinc-300 font-sans italic font-normal leading-relaxed">
                    "{activeTestimonial.comment}"
                  </blockquote>

                  {/* Client Identification details */}
                  <div className="space-y-3">
                    <div className="space-y-0.5">
                      <cite className="not-italic text-sm font-sans font-black text-white block">
                        {activeTestimonial.name}
                      </cite>
                      <span className="text-xs font-mono text-zinc-500 font-bold tracking-wider uppercase">
                        {activeTestimonial.role}, {activeTestimonial.company}
                      </span>
                    </div>

                    {/* Top 3 Words Chips */}
                    {activeTestimonial.topWords && activeTestimonial.topWords.length > 0 && (
                      <div className="flex flex-wrap gap-2 items-center pt-1">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider text-violet-400 uppercase">
                          <Sparkles size={11} />
                          Top Words
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeTestimonial.topWords.map((word, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[10px] font-mono font-semibold text-violet-300 backdrop-blur-sm"
                            >
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardTilt>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows Controls */}
          <div className="flex justify-center md:justify-end gap-3 mt-8 relative z-20">
            <button
              onClick={prevSlide}
              className="rounded-full border border-white/10 bg-white/[0.02] p-3 text-zinc-400 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/30 transition-all cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full border border-white/10 bg-white/[0.02] p-3 text-zinc-400 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/30 transition-all cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
