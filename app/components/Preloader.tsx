"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [step, setStep] = useState(0); // 0: A, 1: BHISHEK, 2: Subtitle
  const nameLetters = ["B", "H", "I", "S", "H", "E", "K"];

  useEffect(() => {
    const timerA = setTimeout(() => setStep(1), 700); // Reveal remaining letters
    const timerSub = setTimeout(() => setStep(2), 1600); // Reveal subtitle and swap to layoutId container
    const timerExit = setTimeout(() => {
      onComplete(); // Triggers page.tsx state change, unmounting preloader and revealing Hero
    }, 2800);

    return () => {
      clearTimeout(timerA);
      clearTimeout(timerSub);
      clearTimeout(timerExit);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 1 }} // Keeps preloader wrapper in DOM during sub-element exit fades
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none select-none"
    >
      {/* Background Overlay - Fades out on exit */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-background z-[-1]"
      />

      <div className="flex flex-col items-center justify-center">
        
        {/* Main Name Reveal */}
        <div className="flex overflow-hidden items-center justify-center mb-2 md:mb-4 h-16 md:h-32">
          {step < 2 ? (
            // Staggered letters for intro reveal (no layoutId to prevent premature morphing/glitches)
            <div className="flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl text-primary font-black uppercase tracking-tighter leading-none"
                style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 900 }}
              >
                A
              </motion.span>
              <div className="flex">
                {nameLetters.map((letter, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ width: 0, opacity: 0, x: -20 }}
                    animate={{
                      width: step >= 1 ? "auto" : 0,
                      opacity: step >= 1 ? 1 : 0,
                      x: step >= 1 ? 0 : -20,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: idx * 0.08,
                    }}
                    className="text-6xl md:text-8xl lg:text-9xl text-starlight-white font-black uppercase tracking-tighter leading-none"
                    style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 900 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          ) : (
            // Static text with layoutId for perfect morph transition — A stays amber, no flash
            <motion.h1
              layoutId="hero-title"
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.25
              }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none"
              style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 900 }}
            >
              <span className="text-primary">A</span>
              <span className="text-starlight-white">BHISHEK</span>
            </motion.h1>
          )}
        </div>

        {/* Subtitle Role Reveal */}
        <div className="h-10 flex items-center justify-center overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: step === 2 ? 0.7 : 0,
              y: step === 2 ? 0 : 20,
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs md:text-sm font-label-caps text-on-surface-variant tracking-[0.4em] uppercase font-bold text-center"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            FULL STACK DEVELOPER
          </motion.p>
        </div>

      </div>
    </motion.div>
  );
}
