/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { certificates } from '../data';
import CardTilt from './CardTilt';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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

        {/* Certifications Card Grid - SHOWING ONLY CERTIFICATE IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificates.map((cert) => (
            <CardTilt
              key={cert.id}
              className="group overflow-hidden border-white/5 bg-white/[0.01] hover:border-cyan-500/30 p-3 sm:p-4"
            >
              <div
                onClick={() => setSelectedCert(cert.image)}
                className="block relative w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/10 shadow-lg group-hover:shadow-cyan-500/10 transition-all cursor-pointer"
              >
                <img
                  src={cert.image}
                  alt="Certificate"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover block group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="rounded-full bg-black/70 backdrop-blur-md border border-white/15 p-3 opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 text-cyan-400 shadow-xl">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </CardTilt>
          ))}
        </div>
      </div>

      {/* High-res Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              <img
                src={selectedCert}
                alt="Certificate Full View"
                className="max-w-full max-h-[85vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
