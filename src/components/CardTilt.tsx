/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

interface CardTiltProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  key?: React.Key;
}

export default function CardTilt({ children, className = '', id, ...props }: CardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // We use springs for smooth motion
  const x = useSpring(0, { damping: 20, stiffness: 150 });
  const y = useSpring(0, { damping: 20, stiffness: 150 });

  // Map mouse movement to tilt degrees
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  // Glow spot positioning
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    
    // Normalized position from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      className={`relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] transition-colors duration-300 hover:bg-white/[0.06] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: hovering ? rotateX : 0,
        rotateY: hovering ? rotateY : 0,
      }}
      {...props}
    >
      {/* 3D content container */}
      <div style={{ transform: 'translateZ(10px)' }} className="h-full w-full">
        {children}
      </div>

      {/* Hover radial glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${glowX.get()} ${glowY.get()}, rgba(99, 102, 241, 0.15), transparent 80%)`,
        }}
      />
    </motion.div>
  );
}
