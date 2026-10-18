/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer'
      );
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial addition and poll to bind new elements
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
    };
  }, [cursorX, cursorY, hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Glow aura */}
      <motion.div
        id="custom-cursor-glow"
        className="pointer-events-none fixed top-0 left-0 z-[160] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#7C3AED]/10 via-[#06B6D4]/10 to-[#A855F7]/10 blur-[60px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />

      {/* Main Cursor Dot */}
      <motion.div
        id="custom-cursor-dot"
        className="pointer-events-none fixed top-0 left-0 z-[180] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: clicked ? 0.6 : hovered ? 1.5 : 1,
          backgroundColor: hovered ? '#a855f7' : '#22d3ee',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />

      {/* Main Outer Ring */}
      <motion.div
        id="custom-cursor-ring"
        className="pointer-events-none fixed top-0 left-0 z-[170] rounded-full border border-cyan-400/30 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: hovered ? 44 : 24,
          height: hovered ? 44 : 24,
          marginLeft: hovered ? -22 : -12,
          marginTop: hovered ? -22 : -12,
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.3 : 1,
          borderColor: hovered ? 'rgba(168, 85, 247, 0.6)' : 'rgba(34, 211, 238, 0.4)',
          borderWidth: hovered ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
    </>
  );
}
