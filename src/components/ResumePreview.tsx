/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Mail, MapPin, Briefcase, GraduationCap, Sparkles, Award, Github, Linkedin, ShieldCheck, Heart } from 'lucide-react';

export default function ResumePreview() {
  const handleDownload = () => {
    // Create an offscreen canvas with high resolution for crisp JPEG text
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1750;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background - Elegant Dark Theme
    ctx.fillStyle = '#09090D';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Sidebar backdrop or accent lines
    ctx.strokeStyle = 'rgba(124, 58, 237, 0.2)'; // Violet accent border
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    // Glow effect
    const gradient = ctx.createRadialGradient(600, 200, 10, 600, 200, 600);
    gradient.addColorStop(0, 'rgba(124, 58, 237, 0.08)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(40, 40, canvas.width - 80, canvas.height - 80);

    // Define Fonts (using standard web-safe fonts for maximum reliability)
    const titleFont = '900 48px sans-serif';
    const sectionFont = 'bold 20px monospace';
    const subTitleFont = 'bold 22px sans-serif';
    const boldTextFont = 'bold 16px sans-serif';
    const normalTextFont = '15px sans-serif';
    const metaFont = '14px monospace';

    // 1. Header Section
    ctx.fillStyle = '#FFFFFF';
    ctx.font = titleFont;
    ctx.fillText('NISHTHA PANDYA', 80, 120);

    ctx.fillStyle = '#818CF8'; // Light violet/indigo
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('COMPUTER SCIENCE STUDENT & UI/UX DESIGNER', 80, 160);

    // Divider line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, 190);
    ctx.lineTo(1120, 190);
    ctx.stroke();

    // Contact info (rendered in columns)
    ctx.fillStyle = '#A1A1AA';
    ctx.font = metaFont;
    ctx.fillText('Email: pnishtha29@gmail.com', 80, 225);
    ctx.fillText('Phone: +91-8290448447', 420, 225);
    ctx.fillText('Location: Udaipur, Rajasthan, India', 720, 225);
    ctx.fillText('LinkedIn: linkedin.com/in/nishtha-pandya-820a7a33a', 80, 255);
    ctx.fillText('GitHub: github.com/nishpandya20-droid', 550, 255);

    // Divider
    ctx.beginPath();
    ctx.moveTo(80, 280);
    ctx.lineTo(1120, 280);
    ctx.stroke();

    // Helper to draw sections
    let currentY = 320;

    const drawSectionHeader = (title: string, color: string) => {
      ctx.fillStyle = color;
      ctx.font = sectionFont;
      ctx.fillText(title.toUpperCase(), 80, currentY);
      
      // Accent line under section header
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(80, currentY + 10);
      ctx.lineTo(250, currentY + 10);
      ctx.stroke();
      
      currentY += 45;
    };

    // 2. Education Section
    drawSectionHeader('Education', '#06B6D4'); // Cyan
    ctx.fillStyle = '#FFFFFF';
    ctx.font = subTitleFont;
    ctx.fillText('Bachelor of Technology (B.Tech), Computer Science & Engineering', 80, currentY);
    ctx.fillStyle = '#A1A1AA';
    ctx.font = metaFont;
    ctx.fillText('Govt Women Engineering College Ajmer | 2023 - 2027', 80, currentY + 25);
    ctx.fillStyle = '#34D399'; // Emerald
    ctx.font = boldTextFont;
    ctx.fillText('CGPA: 8.3 / 10', 850, currentY + 25);
    currentY += 75;

    // 3. Experience Section
    drawSectionHeader('Work Experience', '#818CF8'); // Indigo
    
    const experiences = [
      {
        role: 'Python Programming Intern',
        org: 'Ind-Velloni(OPC) Private Limited',
        duration: 'May 2026 - June 2026',
        desc: 'Developed and maintained Python modules for an Internship Management Portal, improving backend functionality and supporting testing, debugging, and technical documentation.'
      },
      {
        role: 'Open Source Contributor',
        org: 'Elite Coders',
        duration: 'December 2025 - Present',
        desc: 'Contributing to creative, branding, and content initiatives for ECWOC, Elite Her, and ECSOC.'
      },
      {
        role: 'IT & Telecommunication Intern',
        org: 'GAIL (India) Limited',
        duration: 'July 2025 - August 2025',
        desc: 'Gained exposure to enterprise IT infrastructure and telecommunication systems. Assisted in understanding networking and operational workflows.'
      }
    ];

    experiences.forEach((exp) => {
      ctx.fillStyle = '#FFFFFF';
      ctx.font = boldTextFont;
      ctx.fillText(exp.role, 100, currentY);
      
      ctx.fillStyle = '#A1A1AA';
      ctx.font = metaFont;
      ctx.fillText(`${exp.org} (${exp.duration})`, 100, currentY + 22);
      
      ctx.fillStyle = '#D4D4D8';
      ctx.font = normalTextFont;
      // Simple text wrapping helper
      const words = exp.desc.split(' ');
      let line = '';
      let lineY = currentY + 44;
      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        if (metrics.width > 950 && n > 0) {
          ctx.fillText(line, 100, lineY);
          line = words[n] + ' ';
          lineY += 22;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 100, lineY);
      
      // Draw indicator dot and line
      ctx.fillStyle = '#818CF8';
      ctx.beginPath();
      ctx.arc(80, currentY - 5, 4, 0, Math.PI * 2);
      ctx.fill();
      
      currentY = lineY + 40;
    });

    currentY += 10;

    // 4. Projects Section
    drawSectionHeader('Academic & Tech Projects', '#F59E0B'); // Amber
    
    const projects = [
      {
        title: 'EcoSphere – AI-Powered Sustainability Platform (In-House Hackathon Rank 1)',
        desc: 'Designed a unified platform that helps users adopt sustainable habits by tracking waste, water, energy, and carbon emissions. Leveraged AI insights and real-time monitoring.'
      },
      {
        title: 'Naivaidhya – AI Powered Food Redistribution Platform',
        desc: 'Developed an AI-powered platform connecting donors, volunteers, and food stations to reduce food wastage. Implemented MVP food tracking and hygiene verification.'
      },
      {
        title: 'To-Do List Application',
        desc: 'Developed a Python-based To-Do List application with task management features. Integrated GitHub for version control.'
      }
    ];

    projects.forEach((proj) => {
      ctx.fillStyle = '#FFFFFF';
      ctx.font = boldTextFont;
      ctx.fillText(proj.title, 100, currentY);
      
      ctx.fillStyle = '#D4D4D8';
      ctx.font = normalTextFont;
      
      const words = proj.desc.split(' ');
      let line = '';
      let lineY = currentY + 22;
      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        if (metrics.width > 950 && n > 0) {
          ctx.fillText(line, 100, lineY);
          line = words[n] + ' ';
          lineY += 22;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 100, lineY);

      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.arc(80, currentY - 5, 4, 0, Math.PI * 2);
      ctx.fill();

      currentY = lineY + 35;
    });

    currentY += 15;

    // 5. Skills & Achievements Section (Two Columns)
    const skillsY = currentY;
    
    // Left column: Skills
    ctx.fillStyle = '#06B6D4';
    ctx.font = sectionFont;
    ctx.fillText('TECHNICAL SKILLS', 80, skillsY);
    ctx.strokeStyle = '#06B6D4';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, skillsY + 10);
    ctx.lineTo(250, skillsY + 10);
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = boldTextFont;
    ctx.fillText('Languages:', 100, skillsY + 45);
    ctx.font = normalTextFont;
    ctx.fillStyle = '#D4D4D8';
    ctx.fillText('C, Python', 240, skillsY + 45);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = boldTextFont;
    ctx.fillText('Tools:', 100, skillsY + 75);
    ctx.font = normalTextFont;
    ctx.fillStyle = '#D4D4D8';
    ctx.fillText('Canva, PowerPoint, Figma, VS Code, GitHub Desktop', 240, skillsY + 75);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = boldTextFont;
    ctx.fillText('Concepts:', 100, skillsY + 105);
    ctx.font = normalTextFont;
    ctx.fillStyle = '#D4D4D8';
    ctx.fillText('DAA, UI/UX Design, SDLC Models', 240, skillsY + 105);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = boldTextFont;
    ctx.fillText('Soft Skills:', 100, skillsY + 135);
    ctx.font = normalTextFont;
    ctx.fillStyle = '#D4D4D8';
    ctx.fillText('Graphic Designing, Creative Thinking, Communication', 240, skillsY + 135);

    // Right column: Achievements & Leadership
    ctx.fillStyle = '#EC4899'; // Pink
    ctx.font = sectionFont;
    ctx.fillText('ACHIEVEMENTS', 650, skillsY);
    ctx.strokeStyle = '#EC4899';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(650, skillsY + 10);
    ctx.lineTo(820, skillsY + 10);
    ctx.stroke();

    const achievements = [
      'Ranked 41st among 1.54L in Myntra X Naukri Challenge',
      'Secured 2nd Position in Elite Coder X Thore Network',
      'Secured 4th Rank in UI/UX Design at ELITE HACK',
      'Head of Design & Branding, CoLab Nation (Leadership)',
      'Class Representative & GDG GWECA Member'
    ];

    let achY = skillsY + 45;
    achievements.forEach((ach) => {
      ctx.fillStyle = '#EC4899';
      ctx.font = boldTextFont;
      ctx.fillText('🏆', 650, achY);
      ctx.fillStyle = '#D4D4D8';
      ctx.font = normalTextFont;
      ctx.fillText(ach, 680, achY);
      achY += 30;
    });

    // Generate downloadable link
    try {
      const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'Nishtha_Pandya_Resume.jpg';
      link.click();
    } catch (err) {
      console.error('Failed to export resume image', err);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 backdrop-blur-md shadow-2xl">
      {/* Glow Backdrops */}
      <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

      {/* Control Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 pb-6 border-b border-white/5">
        <div className="flex items-center gap-3 text-left">
          <div className="rounded-xl bg-violet-500/10 p-2.5 text-violet-400 border border-violet-500/20">
            <FileText size={22} />
          </div>
          <div>
            <h3 className="text-lg font-sans font-extrabold text-white">Curriculum Vitae</h3>
            <p className="text-xs text-zinc-400">Nishtha Pandya • B.Tech CSE Student & UI/UX Designer</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/nishtha-pandya-820a7a33a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <Sparkles size={14} className="text-cyan-400" />
            Connect on LinkedIn
          </a>
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/25 hover:brightness-110 hover:scale-102 active:scale-98 transition-all cursor-pointer"
          >
            <Download size={14} />
            Download Resume (JPG)
          </button>
        </div>
      </div>

      {/* Physical Sheet Mockup */}
      <div className="relative overflow-hidden rounded-2xl bg-[#09090D] border border-white/5 p-6 sm:p-10 text-left font-sans text-xs md:text-sm shadow-inner">
        {/* Aesthetic Paper Header */}
        <div className="flex flex-col md:flex-row justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-1.5">
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">NISHTHA PANDYA</div>
            <div className="text-xs font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">
              COMPUTER SCIENCE STUDENT & UI/UX DESIGNER
            </div>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Final-year B.Tech CSE student skilled in Python, UI/UX design, and problem-solving. Experienced in developing user-focused applications.
            </p>
          </div>
          <div className="space-y-2 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <Mail size={12} className="text-violet-400" />
              <span>pnishtha29@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-cyan-400" />
              <span>Ajmer, Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={12} className="text-blue-400" />
              <a href="https://www.linkedin.com/in/nishtha-pandya-820a7a33a" target="_blank" rel="noopener noreferrer" className="hover:underline">nishtha-pandya</a>
            </div>
            <div className="flex items-center gap-2">
              <Github size={12} className="text-zinc-300" />
              <a href="https://github.com/nishpandya20-droid" target="_blank" rel="noopener noreferrer" className="hover:underline">nishpandya20-droid</a>
            </div>
          </div>
        </div>

        {/* Paper Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
          {/* Left Column (Main details) - 8 columns */}
          <div className="md:col-span-8 space-y-6">
            {/* Experience */}
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-300 uppercase tracking-widest">
                <Briefcase size={14} className="text-violet-400" />
                Work Experience
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-violet-500/30 pl-4 py-0.5 space-y-1">
                  <div className="flex justify-between items-center flex-wrap gap-1">
                    <span className="font-extrabold text-white text-sm">Python Programming Intern</span>
                    <span className="font-mono text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded">MAY 2026 - JUNE 2026</span>
                  </div>
                  <div className="text-xs text-cyan-400 font-medium">Ind-Velloni(OPC) Private Limited</div>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    Developed and maintained Python modules for an Internship Management Portal, improving backend functionality and supporting testing, debugging, and technical documentation.
                  </p>
                </div>

                <div className="border-l-2 border-white/10 pl-4 py-0.5 space-y-1">
                  <div className="flex justify-between items-center flex-wrap gap-1">
                    <span className="font-extrabold text-white text-sm">Open Source Contributor</span>
                    <span className="font-mono text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded">DEC 2025 - PRESENT</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium font-semibold">Elite Coders</div>
                  <p className="text-xs text-zinc-500 leading-relaxed pt-1">
                    Contributing to creative and content initiatives for ECWOC, Elite Her, and ECSOC.
                  </p>
                </div>

                <div className="border-l-2 border-white/10 pl-4 py-0.5 space-y-1">
                  <div className="flex justify-between items-center flex-wrap gap-1">
                    <span className="font-extrabold text-white text-sm">IT & Telecommunication Intern</span>
                    <span className="font-mono text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded">JUL 2025 - AUG 2025</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">GAIL (India) Limited</div>
                  <p className="text-xs text-zinc-500 leading-relaxed pt-1">
                    Gained exposure to enterprise IT infrastructure and telecommunication systems. Assisted in understanding networking and operational workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-300 uppercase tracking-widest">
                <Sparkles size={14} className="text-amber-400" />
                Academic & Tech Projects
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-amber-500/30 pl-4 py-0.5 space-y-1">
                  <span className="font-extrabold text-white text-sm">Naivaidhya – AI Powered Food Redistribution Platform</span>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    Developed an AI-powered platform connecting donors, volunteers, and food stations to reduce food wastage. Implemented MVP features including food tracking, hygiene verification, and volunteer coordination.
                  </p>
                </div>
                <div className="border-l-2 border-white/10 pl-4 py-0.5 space-y-1">
                  <span className="font-extrabold text-white text-sm">To-Do List Application</span>
                  <p className="text-xs text-zinc-500 leading-relaxed pt-1">
                    Developed a Python-based To-Do List application with add, delete, and task completion functionalities. Used GitHub for project management.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-300 uppercase tracking-widest">
                <GraduationCap size={14} className="text-cyan-400" />
                Education
              </h4>
              <div className="border-l-2 border-cyan-500/30 pl-4 py-0.5 space-y-1">
                <div className="flex justify-between items-center flex-wrap gap-1">
                  <span className="font-extrabold text-white text-sm">B.Tech in Computer Science & Engineering</span>
                  <span className="font-mono text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded">2023 - 2027</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium">Govt Women Engineering College Ajmer</div>
                <p className="text-xs text-zinc-400 pt-0.5">
                  CGPA: <strong className="text-white">8.3</strong> / 10
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar details) - 4 columns */}
          <div className="md:col-span-4 space-y-6 md:border-l md:border-white/5 md:pl-6">
            {/* Technical Skills */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-widest">Skills</h4>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Languages</div>
                  <div className="text-white font-medium">C, Python</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Tools & IDEs</div>
                  <div className="text-white font-medium">Canva, PowerPoint, Figma (Basis), VS Code, GitHub Desktop</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Concepts</div>
                  <div className="text-white font-medium">DAA, UI/UX Design, SDLC Models</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Soft Skills</div>
                  <div className="text-white font-medium">Graphic Designing, Creative Thinking, Communication</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-widest">Achievements</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li className="flex gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Ranked <strong>41st</strong> among 1.54 lakh in Myntra X Naukri Campus Challenge</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Secured <strong>2nd Position</strong> in Elite Coder X Thore Network</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Secured <strong>4th Rank</strong> in UI/UX Design Competition at ELITE HACK</span>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-widest">Certifications</h4>
              <div className="flex flex-wrap gap-1">
                {['Google Cloud Study Jams', 'Infosys Springboard', 'Let Us Python Toward ML - IEEE', 'Sustainovation Hackathon 2025'].map((cert, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400 border border-white/5"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-widest">Leadership</h4>
              <div className="flex flex-wrap gap-1">
                {['Head of Design, CoLab Nation', 'Class Representative', 'GDG GWECA Member', 'Former Member, NEC E-Cell IITB'].map((lead, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 px-2 py-0.5 text-[10px]"
                  >
                    {lead}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

