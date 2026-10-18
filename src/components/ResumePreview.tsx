/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Download,
  Maximize2,
  ExternalLink,
  X,
  Sparkles,
  Eye,
  ZoomIn,
  ZoomOut,
  CheckCircle2,
  Award
} from 'lucide-react';
import CardTilt from './CardTilt';
import resumeImg from '../assets/NISHTHA PANDYA RESUME.png';

export default function ResumePreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Fallback public URL
  const publicResumeUrl = '/NISHTHA_PANDYA_RESUME.png';

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = resumeImg || publicResumeUrl;
    a.download = 'NISHTHA_PANDYA_RESUME.png';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleOpenNewTab = () => {
    window.open(publicResumeUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setZoomLevel(1);
  };

  return (
    <div className="w-full">
      {/* Resume Section Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.03] via-[#0E0E14] to-violet-950/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-left"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Details & Action Column - 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 text-xs font-mono text-cyan-300">
                <Sparkles size={12} className="text-cyan-400" />
                VERIFIED CURRICULUM VITAE
              </div>

              <h3 className="text-2xl sm:text-4xl font-sans font-extrabold text-white tracking-tight leading-tight">
                Nishtha Pandya — <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Resume</span>
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed font-sans font-normal">
                Comprehensive overview of my graphic design background, leadership roles across open-source communities, technical toolkit, academic milestones, and creative project achievements.
              </p>
            </div>

            {/* Quick Credentials Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 mt-0.5">
                  <Award size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Experience & Leadership</div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">Colab Nation, ECWoC, ECSOC, Elite HER</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Core Competencies</div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">Branding, Posters, Canva, Figma, InShot</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3.5 items-center">
              {/* Button to open in page view */}
              <button
                onClick={toggleModal}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
              >
                <Eye size={16} />
                <span>Open Resume (Page View)</span>
              </button>

              {/* Download PNG Button */}
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3.5 text-sm font-bold text-zinc-200 hover:text-white hover:border-violet-500/50 hover:bg-violet-600/20 active:scale-98 transition-all cursor-pointer shadow-md"
              >
                <Download size={15} />
                <span>Download Resume</span>
              </button>

              {/* Open in New Window Link */}
              <button
                onClick={handleOpenNewTab}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-mono tracking-wider text-zinc-400 hover:text-cyan-400 transition-colors py-2 px-1 cursor-pointer"
              >
                <span>New Tab</span>
                <ExternalLink size={13} />
              </button>
            </div>
          </div>

          {/* Right Visual Resume Card Preview - 5 Columns */}
          <div className="lg:col-span-5">
            <CardTilt className="rounded-2xl border border-white/10 bg-black/40 p-3 shadow-2xl group cursor-pointer overflow-hidden relative">
              <div
                onClick={toggleModal}
                className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5"
              >
                <img
                  src={resumeImg}
                  alt="Nishtha Pandya Resume Preview"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = publicResumeUrl;
                  }}
                />

                {/* Hover Overlay with Button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-xs p-4 text-center">
                  <div className="rounded-full bg-violet-600/40 border border-violet-400 p-4 text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 size={24} />
                  </div>
                  <span className="text-xs font-sans font-bold text-white tracking-wide uppercase bg-black/70 px-3.5 py-1.5 rounded-full border border-white/10">
                    Click to Open in Page Form
                  </span>
                </div>

                {/* Static indicator badge */}
                <div className="absolute bottom-3 right-3 rounded-full bg-black/70 border border-white/10 px-3 py-1 text-[10px] font-mono text-zinc-300 backdrop-blur-md flex items-center gap-1.5">
                  <FileText size={11} className="text-cyan-400" />
                  PNG FORMAT
                </div>
              </div>
            </CardTilt>
          </div>
        </div>
      </motion.div>

      {/* Full-Page Modal for Interactive Inspection */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-120 flex flex-col bg-black/95 backdrop-blur-xl p-2 sm:p-6 overflow-hidden"
            onClick={toggleModal}
          >
            {/* Modal Header Bar */}
            <div
              className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl bg-[#0E0E14] border border-white/10 mb-3 max-w-5xl mx-auto w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                  <FileText size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-white leading-none">Nishtha Pandya Resume</h4>
                  <span className="text-[10px] font-mono text-zinc-400">Full Page Document View</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((prev) => (prev >= 2 ? 1 : prev + 0.5))}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Zoom"
                >
                  {zoomLevel > 1 ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                </button>
                <button
                  onClick={handleDownload}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-zinc-200 hover:text-white hover:bg-violet-600/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                  onClick={handleOpenNewTab}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  title="Open in new window"
                >
                  <ExternalLink size={16} />
                </button>
                <button
                  onClick={toggleModal}
                  className="rounded-xl border border-white/10 bg-violet-600/30 p-2 text-white hover:bg-violet-600 transition-colors cursor-pointer"
                  title="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Body / Resume Scroll Container */}
            <div
              className="flex-1 overflow-auto rounded-2xl flex items-start justify-center p-2 sm:p-4"
              onClick={toggleModal}
            >
              <div
                className="max-w-4xl w-full transition-transform duration-300 ease-out origin-top shadow-[0_20px_70px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden border border-white/10 bg-white"
                style={{ transform: `scale(${zoomLevel})` }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={resumeImg}
                  alt="Nishtha Pandya Resume"
                  className="w-full h-auto block"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = publicResumeUrl;
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
