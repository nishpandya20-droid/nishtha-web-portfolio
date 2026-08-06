/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Calendar, User, Laptop, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        id="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-110 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-modal-container"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0E0E14] overflow-hidden shadow-2xl my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 rounded-full border border-white/10 bg-black/60 p-3 text-white transition-all duration-300 hover:scale-110 hover:border-violet-500 hover:bg-violet-600/30 cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Gallery Section - 7 Columns */}
            <div className="relative h-[280px] sm:h-[420px] lg:h-[600px] lg:col-span-7 bg-[#08080C] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 p-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={project.gallery[activeImageIndex]}
                  alt={`${project.title} gallery item`}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-full max-w-full object-contain rounded-xl shadow-xl"
                />
              </AnimatePresence>

              {/* Slider Arrows */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white hover:bg-violet-600 hover:border-violet-500 transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white hover:bg-violet-600 hover:border-violet-500 transition-colors cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {project.gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
                  {project.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2 w-2 rounded-full transition-all cursor-pointer ${idx === activeImageIndex ? 'bg-cyan-400 w-4' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Details Section - 5 Columns */}
            <div className="p-8 sm:p-10 lg:p-12 lg:col-span-5 flex flex-col justify-between h-[auto] lg:h-[600px] overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <span className="inline-flex rounded-full bg-violet-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-violet-400 border border-violet-500/20">
                    {project.category}
                  </span>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-sans font-extrabold tracking-tight text-white leading-tight">
                    {project.title}
                  </h2>
                </div>

                <div className="h-[1px] w-full bg-white/5" />

                <div className="space-y-4">
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    {project.longDescription}
                  </p>
                </div>

                <div className="h-[1px] w-full bg-white/5" />

                {/* Metadata details */}
                <div className="space-y-3.5 text-xs font-mono">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <User size={14} className="text-cyan-400" />
                    <span className="text-zinc-500 min-w-[70px]">Client:</span>
                    <span className="text-white font-sans font-medium">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Calendar size={14} className="text-cyan-400" />
                    <span className="text-zinc-500 min-w-[70px]">Date:</span>
                    <span className="text-white font-sans font-medium">{project.date}</span>
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Laptop size={14} className="text-cyan-400" />
                      <span className="text-zinc-500 min-w-[70px]">Software:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pl-6">
                      {project.software.map((sw, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 border border-white/5 font-sans"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
                <button
                  onClick={() => alert(`Redirecting to mock source layout for ${project.title}`)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:brightness-110 active:scale-98 cursor-pointer"
                >
                  <ExternalLink size={15} />
                  Launch Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
