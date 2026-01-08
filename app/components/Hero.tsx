"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glitchActive, setGlitchActive] = useState(false);
  const [colorMode, setColorMode] = useState(0); // 0: purple/pink, 1: green matrix, 2: full rainbow, 3: b&w

  // Color modes configuration
  const colorModes = [
    { name: "Cyberpunk", colors: ["#a855f7", "#ec4899", "#8b5cf6"] }, // Purple/Pink
    { name: "Matrix", colors: ["#00ff00", "#00cc00", "#009900"] }, // Green
    {
      name: "Rainbow",
      colors: [
        "#ff0000",
        "#ff7f00",
        "#ffff00",
        "#00ff00",
        "#0000ff",
        "#8b00ff",
      ],
    }, // Full spectrum
    { name: "Monochrome", colors: ["#ffffff", "#cccccc", "#999999"] }, // B&W
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]();=+-%*$#@!アイウエオカキクケコサシスセソ";

    const draw = () => {
      // Fade effect based on color mode
      if (colorMode === 3) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      } else {
        ctx.fillStyle = "rgba(10, 10, 30, 0.05)";
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "15px monospace";

      const currentColors = colorModes[colorMode].colors;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];

        // Pick color based on mode
        const colorIndex =
          colorMode === 2
            ? Math.floor((i / columns) * currentColors.length)
            : Math.floor(Math.random() * currentColors.length);

        const gradient = ctx.createLinearGradient(
          i * 20,
          drops[i] * 20 - 20,
          i * 20,
          drops[i] * 20
        );

        if (colorMode === 2) {
          // Rainbow mode - use multiple colors
          gradient.addColorStop(
            0,
            currentColors[colorIndex % currentColors.length]
          );
          gradient.addColorStop(
            0.5,
            currentColors[(colorIndex + 1) % currentColors.length]
          );
          gradient.addColorStop(
            1,
            currentColors[(colorIndex + 2) % currentColors.length]
          );
        } else {
          // Other modes
          gradient.addColorStop(0, currentColors[0]);
          gradient.addColorStop(0.5, currentColors[1] || currentColors[0]);
          gradient.addColorStop(1, currentColors[2] || currentColors[0]);
        }

        ctx.fillStyle = gradient;
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [colorMode]);

  // Auto cycle color modes
  useEffect(() => {
    const colorCycle = setInterval(() => {
      setColorMode((prev) => (prev + 1) % 4);
    }, 8000); // Change color every 8 seconds

    return () => clearInterval(colorCycle);
  }, []);

  // Random glitch trigger
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  const currentColors = colorModes[colorMode].colors;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Matrix Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: colorMode === 3 ? "#000000" : "#0a0a1e" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Scan lines */}
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Glitching Portal + Energy Orb HYBRID */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="relative inline-block mb-8"
        >
          {/* Outer Portal Ring with glitch */}
          <motion.div
            animate={{
              rotate: 360,
              scale: glitchActive ? [1, 1.2, 0.9, 1.1, 1] : 1,
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 20, ease: "linear" },
              scale: { duration: 0.2 },
            }}
            className="relative w-40 h-40 mx-auto"
            style={{
              filter: glitchActive ? "hue-rotate(180deg)" : "none",
            }}
          >
            {/* Main glowing ring */}
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 20px 5px ${currentColors[0]}80, inset 0 0 20px 5px ${
                    currentColors[1] || currentColors[0]
                  }50`,
                  `0 0 40px 10px ${
                    currentColors[1] || currentColors[0]
                  }cc, inset 0 0 40px 10px ${
                    currentColors[2] || currentColors[0]
                  }99`,
                  `0 0 20px 5px ${currentColors[0]}80, inset 0 0 20px 5px ${
                    currentColors[1] || currentColors[0]
                  }50`,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute inset-0 rounded-full border-4"
              style={{
                borderColor: currentColors[0],
                transition: "border-color 1s ease-in-out",
              }}
            />

            {/* Middle ring counter-rotating */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
              className="absolute inset-4 rounded-full border-4 border-opacity-70"
              style={{
                borderColor: currentColors[1] || currentColors[0],
                transition: "border-color 1s ease-in-out",
              }}
            />

            {/* Inner ring fast rotation */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              className="absolute inset-8 rounded-full border-4 border-opacity-50"
              style={{
                borderColor: currentColors[2] || currentColors[0],
                transition: "border-color 1s ease-in-out",
              }}
            />

            {/* RGB Chromatic aberration glitch effect */}
            {glitchActive && (
              <>
                <div className="absolute inset-0 rounded-full border-2 border-red-500 blur-sm translate-x-2" />
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500 blur-sm -translate-x-2" />
                <div className="absolute inset-0 rounded-full border-2 border-green-500 blur-sm translate-y-2" />
              </>
            )}
          </motion.div>

          {/* Central Power Orb */}
          <motion.div
            animate={{
              scale: glitchActive ? [1, 1.3, 0.9, 1.2, 1] : [1, 1.2, 1],
              boxShadow: [
                `0 0 40px 10px ${currentColors[0]}66`,
                `0 0 60px 20px ${currentColors[1] || currentColors[0]}99`,
                `0 0 40px 10px ${currentColors[0]}66`,
              ],
            }}
            transition={{
              scale: { repeat: Infinity, duration: 3 },
              boxShadow: { repeat: Infinity, duration: 3 },
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
            style={{
              background:
                colorMode === 2
                  ? "linear-gradient(135deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)"
                  : `linear-gradient(135deg, ${currentColors[0]}, ${
                      currentColors[1] || currentColors[0]
                    }, ${currentColors[2] || currentColors[0]})`,
              transition: "background 1s ease-in-out",
            }}
          >
            {/* Glitch overlay on orb */}
            {glitchActive && (
              <>
                <div className="absolute inset-0 bg-red-500 mix-blend-screen opacity-70 translate-x-1 rounded-full" />
                <div className="absolute inset-0 bg-cyan-500 mix-blend-screen opacity-70 -translate-x-1 rounded-full" />
                <div className="absolute inset-0 bg-green-500 mix-blend-screen opacity-50 translate-y-1 rounded-full" />
              </>
            )}

            {/* Inner core glow */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute inset-4 rounded-full"
              style={{
                background: colorMode === 3 ? "#ffffff" : "#ffffff",
                filter: "blur(8px)",
              }}
            />

            {/* Center bright spot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="w-8 h-8 rounded-full bg-white blur-sm"
              />
            </div>
          </motion.div>

          {/* Orbiting energy particles - color changing */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
                delay: i * 0.2,
              }}
              className="absolute top-1/2 left-1/2"
              style={{
                transformOrigin: "0 0",
                transform: `rotate(${angle}deg) translateX(80px)`,
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.1,
                }}
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor:
                    colorMode === 2
                      ? colorModes[2].colors[i % colorModes[2].colors.length]
                      : currentColors[i % currentColors.length],
                  boxShadow: `0 0 10px ${
                    colorMode === 2
                      ? colorModes[2].colors[i % colorModes[2].colors.length]
                      : currentColors[0]
                  }`,
                  transition:
                    "background-color 1s ease-in-out, box-shadow 1s ease-in-out",
                }}
              />
            </motion.div>
          ))}

          {/* Glitch fragments on trigger */}
          {glitchActive &&
            [...Array(12)].map((_, i) => (
              <motion.div
                key={`glitch-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: (Math.random() - 0.5) * 60,
                  y: (Math.random() - 0.5) * 60,
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.02,
                }}
                className="absolute top-1/2 left-1/2 w-1 h-4"
                style={{
                  background:
                    colorMode === 2
                      ? colorModes[2].colors[i % colorModes[2].colors.length]
                      : currentColors[i % currentColors.length],
                  transform: `rotate(${i * 30}deg)`,
                }}
              />
            ))}

          {/* Data streams flowing into orb */}
          {[30, 90, 150, 210, 270, 330].map((angle, i) => (
            <motion.div
              key={`stream-${i}`}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.3,
              }}
              className="absolute top-1/2 left-1/2"
              style={{
                transformOrigin: "0 0",
                transform: `rotate(${angle}deg) translateX(100px)`,
              }}
            >
              <div
                className="w-1 h-8"
                style={{
                  background: `linear-gradient(to bottom, ${currentColors[0]}, transparent)`,
                  transition: "background 1s ease-in-out",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Title with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            textShadow: glitchActive
              ? ["2px 2px 0 #ff0000, -2px -2px 0 #00ffff", "0 0 0 transparent"]
              : "0 0 0 transparent",
          }}
          transition={{ delay: 0.5 }}
          className="text-7xl md:text-9xl font-black mb-6 text-gradient"
        >
          Abhishek
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-3 text-2xl md:text-3xl mb-8"
        >
          <Sparkles className="text-yellow-400" />
          <span className="text-gray-300">
            Full-Stack Developer & Data Enthusiast
          </span>
          <Sparkles className="text-yellow-400" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Full-Stack Developer who turns caffeine into code. From web
          applications to data automation - I build what's needed. 🚀
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg glow"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#byte"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-full font-semibold text-lg border-2 border-purple-500"
          >
            Talk to Byte AI 🤖
          </motion.a>
        </motion.div>

        {/* Color Mode Indicator (optional - can remove if too much) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute top-24 right-8 text-sm text-gray-500 font-mono"
        >
          {/* MODE: {colorModes[colorMode].name} */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-gray-500" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
