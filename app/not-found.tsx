"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-on-surface relative overflow-hidden flex flex-col justify-between select-none">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/10 rounded-full floating-orb pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyber-cyan/10 rounded-full floating-orb pointer-events-none z-0" style={{ animationDelay: "-5s" }} />

      {/* Grid Overlay for cyber aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Header Accent */}
      <header className="w-full py-8 relative z-10">
        <div className="max-w-container-max mx-auto px-6 md:px-16 flex items-center justify-between">
          <div className="font-label-caps text-xs md:text-sm text-starlight-white font-bold tracking-[0.25em]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            ABHISHEK.DEV
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-primary border border-primary/30 px-2 py-0.5 rounded font-label-caps"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Error 404
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 relative z-10 py-12">
        <div className="max-w-2xl text-center flex flex-col items-center gap-6 md:gap-8">
          
          {/* Animated 404 Glitch Graphic */}
          <div className="relative">
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-8xl md:text-9xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-starlight-white via-white/80 to-white/10 uppercase"
              style={{ 
                fontFamily: 'var(--font-epilogue)',
                fontWeight: 900,
                filter: "drop-shadow(0 0 15px rgba(255,255,255,0.1))"
              }}
            >
              404
            </motion.h1>
            
            {/* Cyan/Amber glitch echoes */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-black tracking-tighter leading-none uppercase select-none pointer-events-none opacity-20 -translate-x-[3px] translate-y-[2px] text-cyber-cyan mix-blend-screen animate-pulse"
              style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 900 }}>
              404
            </div>
            <div className="absolute inset-0 text-8xl md:text-9xl font-black tracking-tighter leading-none uppercase select-none pointer-events-none opacity-20 translate-x-[3px] -translate-y-[2px] text-primary mix-blend-screen animate-pulse"
              style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 900, animationDelay: "1s" }}>
              404
            </div>
          </div>

          {/* Headline & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-starlight-white uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 800 }}>
              LOST IN DEEP <span className="text-primary italic">SPACE.</span>
            </h2>
            <p className="text-on-surface-variant/80 text-sm md:text-base font-body-md max-w-lg mx-auto leading-relaxed">
              The coordinates you requested point to a region of the digital ecosystem that does not exist. It may have been relocated, deprecated under an NDA, or never existed in this dimension.
            </p>
          </div>

          {/* Interactive Navigation Panel */}
          <div className="glass-card p-6 rounded-2xl border border-glass-edge/40 w-full max-w-md bg-white/[0.01] flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary/80 uppercase tracking-widest font-label-caps border-b border-glass-edge/20 pb-3"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              <HelpCircle className="w-4 h-4 text-primary" />
              Resolve Navigation
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Go Back button */}
              <button
                onClick={() => router.back()}
                className="flex-1 py-3 px-4 rounded-xl border border-glass-edge/40 hover:border-cyber-cyan/35 text-xs text-on-surface-variant hover:text-white bg-white/[0.01] hover:bg-cyber-cyan/[0.02] transition-all duration-200 font-bold font-label-caps tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>

              {/* Home button */}
              <Link
                href="/"
                className="flex-1 py-3 px-4 rounded-xl bg-primary-container hover:bg-primary-container/80 text-xs text-on-primary-container transition-all duration-200 font-bold font-label-caps tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,149,0,0.15)] hover:shadow-[0_0_30px_rgba(255,149,0,0.3)] hover:scale-[1.02]"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <Home className="w-4 h-4" />
                Return Home
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Accent */}
      <footer className="w-full py-8 text-center border-t border-glass-edge/20 relative z-10 bg-background/50 backdrop-blur-md">
        <span className="text-[10px] md:text-xs text-outline tracking-widest uppercase font-bold font-label-caps"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          SYSTEM ONLINE &bull; ABHISHEK.DEV &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
