"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  showContent: boolean;
}

export default function Hero({ showContent }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effect on background image and overlay
  const yBg = useTransform(scrollY, [0, 1000], ["0%", "30%"]);
  const opacityBg = useTransform(scrollY, [0, 800], [1, 0.4]);

  const handleScrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#projects");
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-end overflow-hidden bg-background"
    >
      {/* Background Image Container */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y: yBg, opacity: opacityBg, willChange: "transform" }}
        initial={{ scale: 1.15 }}
        animate={{ scale: showContent ? 1 : 1.15 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          alt="Abhishek Mohapatra Hero Background"
          className="w-full h-full object-cover object-[center_20%] grayscale"
          style={{ imageRendering: "auto", willChange: "transform" }}
          src="/profile.jpeg"
        />
      </motion.div>

      {/* Hero Dark/Amber Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient z-10" />

      {/* Hero content container */}
      <div className="relative w-full max-w-container-max mx-auto px-6 md:px-16 pb-24 md:pb-32 z-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          {/* Headline */}
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="font-label-caps text-xs md:text-sm text-primary tracking-[0.4em] mb-4 block font-black"
            >
              SOFTWARE ENGINEER & PRODUCT BUILDER
            </motion.span>
            
            {showContent && (
              <motion.h1 
                layoutId="hero-title"
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.25
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
                className="font-display-lg font-black text-[13vw] md:text-[11vw] leading-none text-starlight-white uppercase tracking-tighter"
                style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 900 }}
              >
                ABHISHEK
              </motion.h1>
            )}
          </div>

          {/* Description & Scroll button (Wrapped in Glass Card for readability) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="flex flex-col items-start md:items-end text-left md:text-right gap-6 max-w-sm mb-4 glass-card p-6 rounded-2xl border border-glass-edge bg-surface/30 backdrop-blur-md shadow-lg"
          >
            <p className="text-on-surface-variant font-body-md text-sm md:text-base opacity-95 leading-relaxed">
              Designing systems. Building products. Solving problems. Crafted with intention by Abhishek Mohapatra.
            </p>
            
            <a
              href="#projects"
              onClick={handleScrollToExplore}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <span className="p-2.5 rounded-full border border-glass-edge bg-surface/40 group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300">
                <ArrowDown size={16} className="text-primary group-hover:translate-y-1 transition-transform" />
              </span>
              <span className="font-label-caps text-xs tracking-widest text-on-surface uppercase group-hover:text-primary transition-colors font-bold">
                Scroll to Explore
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}