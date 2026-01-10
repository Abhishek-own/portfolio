"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Layers, Rocket, Sparkles } from "lucide-react";

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

  const stats = [
    { icon: "∞", label: "Lines of Code", color: "from-purple-500 to-pink-500" },
    {
      icon: "24/7",
      label: "Production Uptime",
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: "☕",
      label: "Coffee Powered",
      color: "from-orange-500 to-yellow-500",
      isSpecial: true,
    },
  ];

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
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={
              isInView ? { width: window.innerWidth < 768 ? 96 : 128 } : {}
            }
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Card 1 - The Developer */}
            <motion.div
              onHoverStart={() => setHoveredCard(0)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
              className="glass p-5 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group"
              style={{
                boxShadow:
                  hoveredCard === 0
                    ? "0 0 40px rgba(168, 85, 247, 0.4)"
                    : "none",
              }}
            >
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl md:rounded-3xl"
                animate={{
                  background:
                    hoveredCard === 0
                      ? "linear-gradient(90deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3))"
                      : "transparent",
                }}
                style={{
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Animated particles on hover */}
              {hoveredCard === 0 && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      initial={{ x: "50%", y: "50%", opacity: 0 }}
                      animate={{
                        x: `${50 + Math.cos((i / 8) * Math.PI * 2) * 100}%`,
                        y: `${50 + Math.sin((i / 8) * Math.PI * 2) * 100}%`,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </>
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <motion.div
                    animate={{ rotate: hoveredCard === 0 ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code2 className="text-purple-400" size={28} />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    The Developer
                  </h3>
                  {hoveredCard === 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                      className="hidden md:block"
                    >
                      <Sparkles className="text-yellow-400" size={20} />
                    </motion.div>
                  )}
                </div>
                <div className="text-gray-300 text-sm md:text-lg leading-relaxed space-y-2 md:space-y-3">
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
                  <p>
                    From database optimization and real-time data pipelines to
                    crafting seamless, responsive interfaces, I handle{" "}
                    <span className="text-cyan-400 font-semibold">
                      every layer
                    </span>{" "}
                    of modern web development.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - The Journey */}
            <motion.div
              onHoverStart={() => setHoveredCard(1)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
              className="glass p-5 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group"
              style={{
                boxShadow:
                  hoveredCard === 1
                    ? "0 0 40px rgba(59, 130, 246, 0.4)"
                    : "none",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl md:rounded-3xl"
                animate={{
                  background:
                    hoveredCard === 1
                      ? "linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))"
                      : "transparent",
                }}
                style={{
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {hoveredCard === 1 && (
                <>
                  {[0, 120, 240].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-3 md:w-4 h-3 md:h-4 bg-blue-400 rounded-full blur-sm"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear",
                        delay: i * 0.3,
                      }}
                      style={{
                        transformOrigin: "-30px 0",
                        transform: `rotate(${angle}deg)`,
                      }}
                    />
                  ))}
                </>
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <motion.div
                    animate={{
                      y: hoveredCard === 1 ? [-3, 3, -3] : 0,
                    }}
                    transition={{
                      repeat: hoveredCard === 1 ? Infinity : 0,
                      duration: 1.5,
                    }}
                  >
                    <Layers className="text-blue-400" size={28} />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold">The Journey</h3>
                  {hoveredCard === 1 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                      className="hidden md:block"
                    >
                      <Sparkles className="text-yellow-400" size={20} />
                    </motion.div>
                  )}
                </div>
                <div className="text-gray-300 text-sm md:text-lg leading-relaxed space-y-2 md:space-y-3">
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
                    </span>
                    , complex database architectures, and modern,
                    high-performance frontend applications.
                  </p>
                  <p>
                    Whether it's REST APIs, WebSockets, responsive UIs, or data
                    scraping —
                    <span className="text-yellow-400 font-semibold">
                      {" "}
                      I make it work
                    </span>
                    .
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - The Philosophy */}
            <motion.div
              onHoverStart={() => setHoveredCard(2)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
              className="glass p-5 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group"
              style={{
                boxShadow:
                  hoveredCard === 2
                    ? "0 0 40px rgba(236, 72, 153, 0.4)"
                    : "none",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl md:rounded-3xl"
                animate={{
                  background:
                    hoveredCard === 2
                      ? "linear-gradient(90deg, rgba(236, 72, 153, 0.3), rgba(251, 146, 60, 0.3), rgba(236, 72, 153, 0.3))"
                      : "transparent",
                }}
                style={{
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {hoveredCard === 2 && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-pink-500/10 rounded-2xl md:rounded-3xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                />
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <motion.div
                    animate={{
                      scale: hoveredCard === 2 ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      repeat: hoveredCard === 2 ? Infinity : 0,
                      duration: 1,
                    }}
                  >
                    <Rocket className="text-pink-400" size={28} />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    The Philosophy
                  </h3>
                  {hoveredCard === 2 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                      className="hidden md:block"
                    >
                      <Sparkles className="text-yellow-400" size={20} />
                    </motion.div>
                  )}
                </div>
                <div className="text-gray-300 text-sm md:text-lg leading-relaxed space-y-2 md:space-y-3">
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
                    queries, you'll find me exploring new technologies, building
                    side projects, or crafting the perfect cup of coffee. ☕
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Cards with DIABOLIC COFFEE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-4 md:space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl text-center cursor-pointer group relative overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* DIABOLIC Coffee */}
                {stat.isSpecial ? (
                  <div className="relative">
                    <motion.div
                      className={`text-5xl md:text-6xl font-black mb-3 md:mb-4 relative z-10 inline-block`}
                      whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.icon}

                      {/* Steam effects */}
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute -top-8 left-1/2 -translate-x-1/2"
                          style={{
                            fontSize: "2rem",
                            filter: "blur(2px)",
                            left: `${50 + (i - 1) * 15}%`,
                          }}
                          animate={{
                            y: [-10, -40],
                            opacity: [0.6, 0],
                            scale: [0.5, 1.2],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: i * 0.4,
                            ease: "easeOut",
                          }}
                        >
                          <span
                            className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                          >
                            ~
                          </span>
                        </motion.div>
                      ))}

                      {/* Coffee glow pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-full blur-xl"
                        style={{
                          background: `radial-gradient(circle, rgba(251, 146, 60, 0.4), transparent)`,
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                        }}
                      />

                      {/* Sparkles around coffee */}
                      {[...Array(6)].map((_, i) => {
                        const angle = (i / 6) * 360;
                        return (
                          <motion.div
                            key={`sparkle-${i}`}
                            className="absolute top-1/2 left-1/2"
                            style={{
                              transform: `rotate(${angle}deg) translateX(40px)`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              delay: i * 0.2,
                            }}
                          >
                            <span className="text-yellow-400 text-xs">✨</span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                ) : (
                  <motion.div
                    className={`text-5xl md:text-6xl font-black mb-3 md:mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}
                    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                )}

                {/* Orbiting particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[0, 90, 180, 270].map((angle, i) => (
                    <motion.div
                      key={i}
                      className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100`}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                        delay: i * 0.1,
                      }}
                      style={{
                        transformOrigin: "0 0",
                        transform: `rotate(${angle}deg) translateX(50px)`,
                      }}
                    />
                  ))}
                </div>

                <p className="text-gray-400 text-base md:text-lg group-hover:text-white transition-colors relative z-10">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
