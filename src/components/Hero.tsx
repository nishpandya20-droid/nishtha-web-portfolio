/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { Palette, Layers, Award, Sparkles, ArrowRight, Download, Mail } from 'lucide-react';
import { AVATAR_PATH } from '../data';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom magnetic button hooks using mouse values
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  // Particle Canvas Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const colors = ['rgba(124, 58, 237, 0.4)', 'rgba(6, 182, 212, 0.4)', 'rgba(168, 85, 247, 0.4)'];

    // Generate particles
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      // Simple connector lines for particles in close proximity
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Download Resume Handler
  const handleDownloadResume = () => {
    const resumeBtn = document.getElementById('resume-section');
    if (resumeBtn) {
      resumeBtn.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090B]"
    >
      {/* Background Interactive Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />

      {/* Decorative Blur Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 h-[300px] sm:h-[450px] w-[300px] sm:w-[450px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] sm:h-[450px] w-[300px] sm:w-[450px] rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none" />

      {/* Futuristic Grid Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Core Text Column - 7 Columns */}
        <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
          <div className="space-y-4">
            {/* Soft Glowing Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-cyan-400 border border-white/5 shadow-inner"
            >
              <Sparkles size={12} className="animate-pulse" />
              AVAILABLE FOR ELITE PROJECTS v2.6
            </motion.div>

            {/* Title with Gradient Text */}
            <div className="space-y-1.5">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight text-white leading-none"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-[#A855F7] to-cyan-400">Nishtha</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3.5xl font-sans font-bold text-zinc-300 leading-tight"
              >
                Professional Graphic Designer
              </motion.div>
            </div>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-sans font-normal"
            >
              Passionate Graphic Designer with experience in branding, social media creatives, posters, presentations, and UI design. I create clean, impactful visuals that combine creativity with effective communication.
            </motion.p>
          </div>

          {/* Stat Badges for Quick Social Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap gap-4 sm:gap-6 pt-2"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 font-medium">
              <Palette size={14} className="text-violet-400" />
              <span>Branding Specialist</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 font-medium">
              <Layers size={14} className="text-pink-400" />
              <span>Graphic Designer</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 font-medium">
              <Award size={14} className="text-cyan-400" />
              <span>B.Tech Student</span>
            </div>
          </motion.div>

          {/* Core Navigation/Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 pt-4"
          >
            {/* View My Work button */}
            <button
              onClick={() => onNavigate('portfolio-section')}
              onMouseEnter={() => setHoveredBtn('portfolio')}
              onMouseLeave={() => setHoveredBtn(null)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-300 hover:scale-103 active:scale-98 cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2 rounded-2xl bg-[#09090B]/90 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-transparent">
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </button>

            {/* View/Download Resume button */}
            <button
              onClick={handleDownloadResume}
              onMouseEnter={() => setHoveredBtn('resume')}
              onMouseLeave={() => setHoveredBtn(null)}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 active:scale-98 cursor-pointer"
            >
              <Download size={14} className="text-cyan-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              View Resume
            </button>

            {/* Contact Me button */}
            <button
              onClick={() => onNavigate('contact-section')}
              onMouseEnter={() => setHoveredBtn('contact')}
              onMouseLeave={() => setHoveredBtn(null)}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/30 transition-all duration-300 active:scale-98 cursor-pointer"
            >
              <Mail size={14} className="text-violet-400" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Avatar Column - 5 Columns */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-8 sm:py-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', damping: 20 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
          >
            {/* Outer Abstract Floating Rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-violet-500/10 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-cyan-500/5 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            />

            {/* 3D Glass palette floating element left */}
            <motion.div
              className="absolute top-6 -left-8 z-30 flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] p-3 text-cyan-400 shadow-2xl backdrop-blur-md pointer-events-none"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 8, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Palette size={22} className="drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
            </motion.div>

            {/* 3D Glass layers element right */}
            <motion.div
              className="absolute bottom-12 -right-8 z-30 flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] p-3 text-violet-400 shadow-2xl backdrop-blur-md pointer-events-none"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -8, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Layers size={22} className="drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
            </motion.div>

            {/* Glow backing */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 opacity-25 blur-2xl animate-pulse" />

            {/* Avatar Frame Wrapper */}
            <div className="w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-violet-500 via-indigo-500 to-cyan-400 relative z-20 group">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0A0F] border border-white/10 relative">
                <img
                  src={AVATAR_PATH}
                  alt="Nishtha - Professional Headshot Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cyber Layer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Small Glowing Circle Accent */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-2 h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] border-2 border-[#09090B] z-30 animate-ping" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-2 h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] border-2 border-[#09090B] z-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
