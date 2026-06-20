"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Palette, Database, Cloud, Settings, BarChart3 } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["NestJS", "Node.js", "TypeScript", "REST APIs", "GraphQL", "RBAC"],
      description: "Designing high-performance, type-safe backend architectures, robust REST & GraphQL APIs, and secure role-based access control systems.",
    },
    {
      title: "Frontend & UI",
      icon: Palette,
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Shadcn/UI"],
      description: "Crafting modern, responsive, and highly interactive user interfaces with pixel-perfect layouts, global state management, and fluid animations.",
    },
    {
      title: "Database & ORM",
      icon: Database,
      skills: ["PostgreSQL", "Prisma", "MongoDB", "Redis"],
      description: "Architecting relational & non-relational database structures, configuring efficient queries, and utilizing Redis for low-latency caching.",
    },
    {
      title: "Real-Time & Communication",
      icon: Cloud,
      skills: ["Socket.io", "WebSockets", "LiveKit", "WebRTC", "Firebase", "Event-Driven Architecture"],
      description: "Powering live, event-driven communications, media streaming, and real-time synchronizations with low latency.",
    },
    {
      title: "Cloud & DevOps",
      icon: Settings,
      skills: ["AWS", "Docker", "Git", "GitHub Actions", "CI/CD", "Nginx"],
      description: "Managing cloud infrastructure, containerizing services, orchestrating deployment pipelines, and configuring high-performance web servers.",
    },
    {
      title: "Automation & Integrations",
      icon: BarChart3,
      skills: ["OCR", "Google Vision API", "WhatsApp Cloud API", "Webhooks", "Python", "Data Pipelines"],
      description: "Extracting insights, automating workflows with external APIs, managing webhooks, and orchestrating robust data pipelines.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].title);
  const activeCatData = categories.find((cat) => cat.title === activeCategory) || categories[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 350, damping: 25 },
    },
  } as const;

  return (
    <section id="skills" className="py-12 md:py-20 bg-background border-t border-glass-edge/50">
      <div className="max-w-container-max mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <span className="font-label-caps text-xs md:text-sm text-primary tracking-[0.4em] mb-4 block uppercase font-bold"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            The Forge
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-starlight-white leading-tight uppercase tracking-tighter"
            style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 800 }}>
            Tech <span className="text-primary italic">Arsenal.</span>
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Mobile Category Scroll (shown on small screens) */}
          <div className="lg:hidden w-full overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex gap-3 -mx-6 px-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.title;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(cat.title)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-cyber-cyan/30 text-starlight-white"
                      : "border-glass-edge/40 text-on-surface-variant/70 hover:text-starlight-white bg-white/[0.01]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-cyber-cyan" : "text-on-surface-variant/70"}`} />
                  <span className="font-medium font-body-md">{cat.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBgMobile"
                      className="absolute inset-0 bg-cyber-cyan/10 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Category Sidebar (shown on large screens) */}
          <div className="hidden lg:flex flex-col gap-3 w-full lg:w-80 shrink-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.title;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(cat.title)}
                  className={`relative flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-cyber-cyan/30 text-starlight-white"
                      : "border-glass-edge/40 text-on-surface-variant/70 hover:text-starlight-white hover:border-glass-edge/80 hover:bg-white/[0.01]"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? "bg-cyber-cyan/15 text-cyber-cyan" : "bg-white/[0.02] text-on-surface-variant/60"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium font-body-md text-base">{cat.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBgDesktop"
                      className="absolute inset-0 bg-cyber-cyan/10 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Category Skills Panel */}
          <div className="flex-grow w-full glass-card rounded-2xl p-6 md:p-8 min-h-[360px] flex flex-col justify-center relative overflow-hidden border border-glass-edge/50">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/5 rounded-full filter blur-[80px] -z-10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-grow flex flex-col justify-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  
                  {/* Category Info Header & Description */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center shrink-0">
                        {(() => {
                          const Icon = activeCatData.icon;
                          return <Icon className="text-cyber-cyan w-6 h-6" />;
                        })()}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-headline-lg font-bold text-starlight-white leading-tight">
                          {activeCatData.title}
                        </h3>
                        <p className="text-[10px] md:text-xs text-primary font-medium tracking-wider uppercase mt-0.5">
                          Technical Specialization
                        </p>
                      </div>
                    </div>

                    <p className="text-on-surface-variant/80 font-body-md text-sm md:text-base leading-relaxed">
                      {activeCatData.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block md:col-span-1 h-32 w-px bg-gradient-to-b from-transparent via-glass-edge/50 to-transparent mx-auto" />
                  <div className="md:hidden w-full h-px bg-gradient-to-r from-glass-edge via-glass-edge/40 to-transparent my-2" />

                  {/* Skills Grid */}
                  <div className="md:col-span-6 w-full">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {activeCatData.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          variants={itemVariants}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className="glass-card p-3 md:p-3.5 rounded-xl border border-glass-edge/40 hover:border-cyber-cyan/40 hover:bg-cyber-cyan/[0.02] transition-colors duration-200 cursor-pointer flex items-center gap-2.5"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,189,127,0.8)] flex-shrink-0" />
                          <span className="text-starlight-white font-body-md text-xs sm:text-sm font-medium leading-tight break-words">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Specialized Expertise block */}
        <div className="mt-6 md:mt-8 flex justify-end">
          <div className="text-right max-w-xl opacity-35 hover:opacity-50 transition-opacity duration-200 cursor-default">
            <span className="text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest block mb-1 font-bold font-label-caps"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Specialized Expertise
            </span>
            <p className="text-xs md:text-sm text-starlight-white font-medium font-body-md">
              RBAC &bull; OCR Processing &bull; Real-Time Systems &bull; WhatsApp Automation &bull; System Design
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}