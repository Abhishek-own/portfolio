"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Sparkles, Code, Database, Zap, Cpu, Rocket, Brain, Terminal, GitBranch } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface Trail {
  x: number;
  y: number;
  life: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glitchActive, setGlitchActive] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [introComplete, setIntroComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Typing animation state
  const [typedText, setTypedText] = useState("");
  const fullName = "Abhishek";

  // Intro sequence - typing then flying
  useEffect(() => {
    // Type out name letter by letter
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setTypedText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // 150ms per letter

    // After typing is done (8 letters * 150ms = 1200ms), wait a bit then fly to navbar
    const flyTimer = setTimeout(() => {
      setIntroComplete(true);
    }, 2500); // Name stays centered for 1.3s after typing

    // Show content after name flies away
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3200);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(flyTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  // Tech stack badges - smaller and fewer
  const techStack = [
    { icon: Code, label: "React", color: "#61DAFB" },
    { icon: Terminal, label: "Python", color: "#3776AB" },
    { icon: Database, label: "SQL", color: "#336791" },
    { icon: Brain, label: "AI/ML", color: "#FF6B6B" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star field particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = 150;

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.7 ? '#a855f7' : '#ffffff',
      });
    }

    // Shooting stars
    const shootingStars: Array<{x: number, y: number, length: number, speed: number}> = [];
    
    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: -10,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 3 + 5,
      });
    };

    const drawParticles = () => {
      // Dark space background
      ctx.fillStyle = "rgba(5, 5, 15, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      particlesArray.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Subtle movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      // Draw shooting stars
      shootingStars.forEach((star, index) => {
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x + star.length, star.y + star.length
        );
        gradient.addColorStop(0, 'rgba(168, 85, 247, 0)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.8)');
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.length, star.y + star.length);
        ctx.stroke();

        star.y += star.speed;
        star.x += star.speed;

        if (star.y > canvas.height + 100) {
          shootingStars.splice(index, 1);
        }
      });

      // Random shooting star
      if (Math.random() > 0.98) {
        createShootingStar();
      }
    };

    const interval = setInterval(drawParticles, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mouse trail effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add trail points
      setTrails(prev => [...prev, { x: e.clientX, y: e.clientY, life: 1 }]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  // Trail decay
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => 
        prev
          .map(t => ({ ...t, life: t.life - 0.05 }))
          .filter(t => t.life > 0)
          .slice(-30) // Keep only last 30 points
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Random glitch trigger
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 6000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Intro Name Animation - BLACK SCREEN with typing effect */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: introComplete ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        style={{ pointerEvents: introComplete ? 'none' : 'auto' }}
      >
        <motion.h1
          initial={{ scale: 1, opacity: 1 }}
          animate={{ 
            scale: introComplete ? 0.3 : 1,
            opacity: introComplete ? 0 : 1,
            x: introComplete ? "-45vw" : 0,
            y: introComplete ? "-45vh" : 0,
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="text-8xl md:text-9xl font-black"
          style={{ 
            fontFamily: "'Brush Script MT', cursive",
            fontWeight: 'normal' // Brush Script looks better without bold
          }}
        >
          <span
            className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
            style={{
              textShadow: "0 0 80px rgba(168, 85, 247, 0.8)",
            }}
          >
            {typedText}
            {/* Blinking cursor while typing */}
            {!introComplete && typedText.length < fullName.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            )}
          </span>
        </motion.h1>
      </motion.div>

      {/* Deep space background - only shows after intro */}
      {showContent && (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "radial-gradient(ellipse at center, #0a0a1e 0%, #050510 100%)" }}
      />
      )}

      {/* Neon trail cursor */}
      {showContent && trails.map((trail, i) => (
        <motion.div
          key={i}
          className="fixed w-3 h-3 rounded-full pointer-events-none z-50 mix-blend-screen"
          style={{
            left: trail.x - 6,
            top: trail.y - 6,
            opacity: trail.life * 0.6,
            background: `radial-gradient(circle, rgba(168, 85, 247, ${trail.life}) 0%, rgba(236, 72, 153, 0) 70%)`,
            boxShadow: `0 0 ${10 * trail.life}px rgba(168, 85, 247, ${trail.life})`,
          }}
        />
      ))}

      {/* Main cursor glow */}
      {showContent && (
      <motion.div
        className="fixed w-20 h-20 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: -40,
          y: -40,
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0) 70%)",
        }}
      />
      )}

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Floating tech badges - FIXED positioning */}
        {showContent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none"
          >
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{
                delay: 1.5 + i * 0.2,
                y: { repeat: Infinity, duration: 3 + i, ease: "easeInOut" }
              }}
              className="absolute"
              style={{
                top: `${20 + Math.sin(i * 2) * 30}%`,
                left: i < 2 ? `${10 + i * 5}%` : 'auto',
                right: i >= 2 ? `${10 + (i-2) * 5}%` : 'auto',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md border border-purple-500/50 rounded-xl p-3 shadow-lg cursor-pointer pointer-events-auto"
                style={{
                  boxShadow: `0 0 20px ${tech.color}33`,
                }}
              >
                <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                <p className="text-xs font-bold text-white mt-1">{tech.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        )}

        {/* Main power orb - ENHANCED */}
        {showContent && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="relative inline-block mb-12"
        >
          {/* Pulsing rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: i * 1.3,
                ease: "easeOut",
              }}
              className="absolute inset-0 w-56 h-56 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500"
            />
          ))}

          {/* Main orb */}
          <motion.div
            animate={{
              rotate: 360,
              boxShadow: [
                "0 0 80px 30px #a855f7, 0 0 120px 50px #ec4899",
                "0 0 120px 50px #ec4899, 0 0 80px 30px #a855f7",
              ],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 25, ease: "linear" },
              boxShadow: { repeat: Infinity, duration: 3 },
            }}
            className="relative w-56 h-56 rounded-full"
            style={{
              background: "radial-gradient(circle, #ec4899 0%, #a855f7 50%, #8b5cf6 100%)",
            }}
          >
            {/* Inner glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="absolute inset-10 rounded-full bg-white blur-3xl"
            />

            {/* Spinning energy ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-6 rounded-full border-4 border-white/30 border-t-white"
            />

            {/* Energy core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="w-20 h-20"
              >
                <Sparkles className="w-full h-full text-white drop-shadow-2xl" />
              </motion.div>
            </div>

            {/* Rainbow orbiting particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                  delay: i * 0.15,
                }}
                className="absolute top-1/2 left-1/2"
                style={{
                  transformOrigin: "0 0",
                  transform: `rotate(${i * 45}deg) translateX(110px)`,
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: i * 0.1,
                  }}
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: `hsl(${(i * 45) % 360}, 80%, 65%)`,
                    boxShadow: `0 0 15px hsl(${(i * 45) % 360}, 80%, 65%)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Glitch effect */}
          {glitchActive && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 w-56 h-56 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-red-500 blur-sm translate-x-3"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 w-56 h-56 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-cyan-400 blur-sm -translate-x-3"
              />
            </>
          )}
        </motion.div>
        )}

        {/* Holographic title */}
        {showContent && (
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.5 }}
          className="relative text-7xl md:text-9xl font-black mb-8"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% 200%",
              filter: glitchActive ? "hue-rotate(180deg)" : "none",
              textShadow: "0 0 80px rgba(168, 85, 247, 0.5)",
            }}
          >
            Abhishek
          </motion.span>
          
          {/* Holographic ghost layer */}
          <motion.span
            animate={{
              opacity: [0.2, 0.4, 0.2],
              x: [-2, 2, -2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent blur-md"
          >
            Abhishek
          </motion.span>
        </motion.h1>
        )}

        {/* Subtitle with rotating sparkles */}
        {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-3 text-xl md:text-2xl mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <Sparkles className="text-yellow-400 w-6 h-6" />
          </motion.div>
          <span className="text-gray-300 font-semibold">
            Full-Stack Developer & Data Enthusiast
          </span>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <Sparkles className="text-yellow-400 w-6 h-6" />
          </motion.div>
        </motion.div>
        )}

        {/* Description */}
        {showContent && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Full-Stack Developer who turns caffeine into code. From web applications to data automation - I build what's needed. 🚀
        </motion.p>
        )}

        {/* CTA Buttons with shimmer */}
        {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(168, 85, 247, 0.9), 0 0 100px rgba(236, 72, 153, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg overflow-hidden group"
          >
            <motion.div
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />
            <span className="relative z-10">View Projects</span>
          </motion.a>
          
          <motion.a
            href="#byte"
            whileHover={{
              scale: 1.05,
              borderColor: "#ec4899",
              boxShadow: "0 0 40px rgba(236, 72, 153, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 backdrop-blur-xl bg-white/5 rounded-full font-bold text-lg border-2 border-purple-500 transition-all"
          >
            Talk to Byte AI 🤖
          </motion.a>
        </motion.div>
        )}

        {/* Scroll Indicator */}
        {showContent && (
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.6)",
                "0 0 40px rgba(236, 72, 153, 1)",
                "0 0 20px rgba(168, 85, 247, 0.6)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full"
          >
            <ArrowDown className="text-white" size={28} />
          </motion.div>
        </motion.div>)}
      </div>
    </section>
  );
}