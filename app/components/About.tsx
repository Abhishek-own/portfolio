"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Layers, Rocket, Sparkles, Database, Server, Braces, Globe, Cpu } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);
    const chars = "01<>{}[]();/";

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 30, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];

        const gradient = ctx.createLinearGradient(
          i * 20,
          drops[i] * 20 - 20,
          i * 20,
          drops[i] * 20
        );
        gradient.addColorStop(0, "#8b5cf6");
        gradient.addColorStop(0.5, "#ec4899");
        gradient.addColorStop(1, "#6366f1");

        ctx.fillStyle = gradient;
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-12 md:py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Matrix Rain Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-30"
        style={{ background: "transparent" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-20 z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.5), transparent)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-20 z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.5), transparent)",
        }}
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
          delay: 7,
        }}
      />

      {/* Glitch lines occasionally */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-[1]"
          style={{ top: `${20 + i * 15}%` }}
          animate={{
            opacity: [0, 0, 0, 0.7, 0],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.3,
            repeatDelay: Math.random() * 10 + 5,
          }}
        />
      ))}

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 8px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-black text-gradient inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={
              isInView ? { width: typeof window !== 'undefined' && window.innerWidth < 768 ? 96 : 128 } : {}
            }
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="space-y-5 md:space-y-6"
          >
            {/* Card 1 - The Developer */}
            <motion.div
              onHoverStart={() => setHoveredCard(0)}
              onHoverEnd={() => setHoveredCard(null)}
              className="glass p-5 md:p-7 lg:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group transition-all duration-500 ease-out"
              style={{
                boxShadow:
                  hoveredCard === 0
                    ? "0 0 40px rgba(168, 85, 247, 0.3)"
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl md:rounded-3xl"
                animate={{
                  background:
                    hoveredCard === 0
                      ? "linear-gradient(90deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))"
                      : "transparent",
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: hoveredCard === 0 ? 360 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Code2 className="text-purple-400 w-6 h-6 md:w-7 md:h-7" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    The Developer
                  </h3>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredCard === 0 ? 1 : 0,
                      opacity: hoveredCard === 0 ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="ml-auto"
                  >
                    <Sparkles className="text-yellow-400 w-5 h-5" />
                  </motion.div>
                </div>
                <div className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed space-y-3">
                  <p>
                    Hey there! I'm Abhishek, a{" "}
                    <span className="text-purple-400 font-semibold">
                      full-stack developer
                    </span>{" "}
                    who turns complex problems into elegant solutions.
                  </p>
                  <p>
                    I don't just write code — I{" "}
                    <span className="text-pink-400 font-semibold">
                      architect scalable backend systems
                    </span>
                    , design{" "}
                    <span className="text-blue-400 font-semibold">
                      high-performance APIs
                    </span>
                    , and build frontends that users genuinely enjoy using.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - The Journey */}
            <motion.div
              onHoverStart={() => setHoveredCard(1)}
              onHoverEnd={() => setHoveredCard(null)}
              className="glass p-5 md:p-7 lg:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group transition-all duration-500 ease-out"
              style={{
                boxShadow:
                  hoveredCard === 1
                    ? "0 0 40px rgba(59, 130, 246, 0.3)"
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl md:rounded-3xl"
                animate={{
                  background:
                    hoveredCard === 1
                      ? "linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))"
                      : "transparent",
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{
                      y: hoveredCard === 1 ? [-2, 2, -2] : 0,
                    }}
                    transition={{
                      repeat: hoveredCard === 1 ? Infinity : 0,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <Layers className="text-blue-400 w-6 h-6 md:w-7 md:h-7" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold">The Journey</h3>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredCard === 1 ? 1 : 0,
                      opacity: hoveredCard === 1 ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="ml-auto"
                  >
                    <Sparkles className="text-yellow-400 w-5 h-5" />
                  </motion.div>
                </div>
                <div className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed space-y-3">
                  <p>
                    With expertise spanning{" "}
                    <span className="text-blue-400 font-semibold">
                      TypeScript
                    </span>
                    ,
                    <span className="text-purple-400 font-semibold">
                      {" "}
                      NestJS
                    </span>
                    ,
                    <span className="text-cyan-400 font-semibold">
                      {" "}
                      PostgreSQL
                    </span>
                    ,<span className="text-pink-400 font-semibold"> React</span>
                    , and
                    <span className="text-green-400 font-semibold">
                      {" "}
                      data automation
                    </span>
                    , I've worked on diverse projects.
                  </p>
                  <p>
                    From AgriTech platforms to custom AI assistants, I thrive in
                    building
                    <span className="text-orange-400 font-semibold">
                      {" "}
                      real-time systems
                    </span>{" "}
                    and modern, high-performance applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - The Philosophy */}
            <motion.div
              onHoverStart={() => setHoveredCard(2)}
              onHoverEnd={() => setHoveredCard(null)}
              className="glass p-5 md:p-7 lg:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group transition-all duration-500 ease-out"
              style={{
                boxShadow:
                  hoveredCard === 2
                    ? "0 0 40px rgba(236, 72, 153, 0.3)"
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl md:rounded-3xl"
                animate={{
                  background:
                    hoveredCard === 2
                      ? "linear-gradient(90deg, rgba(236, 72, 153, 0.2), rgba(251, 146, 60, 0.2), rgba(236, 72, 153, 0.2))"
                      : "transparent",
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{
                      scale: hoveredCard === 2 ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      repeat: hoveredCard === 2 ? Infinity : 0,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Rocket className="text-pink-400 w-6 h-6 md:w-7 md:h-7" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    The Philosophy
                  </h3>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredCard === 2 ? 1 : 0,
                      opacity: hoveredCard === 2 ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="ml-auto"
                  >
                    <Sparkles className="text-yellow-400 w-5 h-5" />
                  </motion.div>
                </div>
                <div className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed space-y-3">
                  <p>
                    I believe in{" "}
                    <span className="text-green-400 font-semibold">
                      clean code
                    </span>
                    ,
                    <span className="text-blue-400 font-semibold">
                      {" "}
                      continuous learning
                    </span>
                    , and solving real-world problems.
                  </p>
                  <p>
                    When I'm not debugging production issues or optimizing
                    queries, you'll find me exploring new technologies or crafting the perfect cup of coffee. ☕
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image (centered with Journey card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center lg:sticky lg:top-32"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative group w-full max-w-sm"
            >
              {/* Animated border rings */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-60 blur-2xl"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
              />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm mx-auto">
                <Image
                  src="/profile.jpeg"
                  alt="Abhishek"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Floating tech icons */}
       {/* Floating tech icons */}
{[
  { 
    icon: <Globe className="text-pink-400" size={32} />, 
    delay: 0, 
    position: "top-4 right-4 md:top-8 md:right-8" 
  },
  { 
    icon: <Database className="text-cyan-400" size={32} />, 
    delay: 0.5, 
    position: "bottom-4 left-4 md:bottom-8 md:left-8" 
  },
  { 
    icon: <Cpu className="text-purple-400" size={32} />, 
    delay: 1, 
    position: "top-4 left-4 md:top-8 md:left-8" 
  },
  { 
    icon: <Server className="text-green-400" size={32} />, 
    delay: 1.5, 
    position: "bottom-4 right-4 md:bottom-8 md:right-8" 
  }
].map((item, i) => (
  <motion.div
    key={i}
    className={`absolute ${item.position}`}
    animate={{
      y: [-8, 8, -8],
      rotate: [0, 8, -8, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 3.5,
      delay: item.delay,
      ease: "easeInOut",
    }}
  >
    {item.icon}
  </motion.div>
))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}