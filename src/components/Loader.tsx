/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

const WORDS = ["IMAGINE", "SKETCH", "CRAFT", "ENGAGE", "NISHTHA"];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress counter
    const totalDuration = 2200; // ms
    const intervalTime = 30;
    const incrementStep = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + incrementStep + Math.random() * 2;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Words animation
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev < WORDS.length - 1) return prev + 1;
        return prev;
      });
    }, 450);

    return () => {
      clearInterval(timer);
      clearInterval(wordInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimeout = setTimeout(() => {
        setIsDone(true);
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 600); // match exit transition
        return () => clearTimeout(completeTimeout);
      }, 500);
      return () => clearTimeout(exitTimeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loader-screen"
          className="fixed inset-0 z-100 flex flex-col items-center justify-between bg-[#07070A] p-8 md:p-16"
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Top aesthetic element */}
          <div className="flex w-full justify-between items-center text-xs font-mono tracking-widest text-zinc-500">
            <span>NISHTHA.DESIGN</span>
            <span>PORTFOLIO v2026</span>
          </div>

          {/* Central word and progress */}
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Word cycle */}
            <div className="h-20 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                  className="text-4xl md:text-6xl font-sans font-black tracking-tighter text-white"
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Glowing orb */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 opacity-20 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: 360,
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-3xl font-mono font-bold text-white relative z-10">
                {Math.floor(progress)}%
              </span>
            </div>
          </div>

          {/* Bottom loading bar & instructions */}
          <div className="w-full max-w-md flex flex-col gap-3">
            <div className="h-[2px] w-full bg-zinc-800/80 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 tracking-wider">
              <span>LOADING SYSTEMS</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
