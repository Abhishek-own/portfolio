"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Database, Cloud, Zap } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Backend & APIs",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "NestJS", icon: "💚", level: "expert" },
        { name: "Node.js", icon: "🟢", level: "expert" },
        { name: "TypeScript", icon: "📘", level: "expert" },
        { name: "REST APIs", icon: "🔌", level: "expert" },
        { name: "GraphQL", icon: "💜", level: "intermediate" },
        { name: "JWT Auth", icon: "🔐", level: "expert" },
      ],
    },
    {
      title: "Frontend & UI",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React", icon: "⚛️", level: "expert" },
        { name: "Next.js", icon: "▲", level: "expert" },
        { name: "Tailwind CSS", icon: "🎨", level: "expert" },
        { name: "Framer Motion", icon: "🎬", level: "intermediate" },
      ],
    },
    {
      title: "Database & ORM",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "PostgreSQL", icon: "🐘", level: "expert" },
        { name: "Prisma", icon: "⚡", level: "expert" },
        { name: "MongoDB", icon: "🍃", level: "intermediate" },
        { name: "Redis", icon: "🔴", level: "intermediate" },
      ],
    },
    {
      title: "Real-time & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Socket.io", icon: "🌐", level: "expert" },
        { name: "Firebase", icon: "🔥", level: "expert" },
        { name: "WebSockets", icon: "⚡", level: "expert" },
        { name: "AWS", icon: "☁️", level: "intermediate" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Git", icon: "📦", level: "expert" },
        { name: "Docker", icon: "🐳", level: "intermediate" },
        { name: "Postman", icon: "📮", level: "expert" },
        { name: "VS Code", icon: "💻", level: "expert" },
      ],
    },
    {
      title: "Data & Automation",
      icon: <Database className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "Web Scraping", icon: "🕷️", level: "expert" },
        { name: "Data Pipelines", icon: "📊", level: "expert" },
        { name: "Power BI", icon: "📈", level: "intermediate" },
        { name: "Python", icon: "🐍", level: "intermediate" },
      ],
    },
  ];

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "expert":
        return {
          text: "Expert",
          color: "bg-green-500/20 text-green-400 border-green-500/50",
        };
      case "intermediate":
        return {
          text: "Proficient",
          color: "bg-blue-500/20 text-blue-400 border-blue-500/50",
        };
      default:
        return {
          text: "Learning",
          color: "bg-purple-500/20 text-purple-400 border-purple-500/50",
        };
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated hexagon grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-purple-500/30"
            style={{
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 25}%`,
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 20 + i * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
          delay: 10,
        }}
      />

      {/* Connecting lines animation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          style={{
            top: `${10 + i * 12}%`,
            left: 0,
            right: 0,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black text-gradient inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Tech Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg"
          >
            Full-stack capabilities across the modern web development spectrum
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + catIndex * 0.1 }}
              onHoverStart={() => setHoveredCategory(catIndex)}
              onHoverEnd={() => setHoveredCategory(null)}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass p-6 rounded-3xl relative overflow-hidden group"
            >
              {/* Animated gradient border on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${category.color
                    .split(" ")[1]
                    .replace("to-", "")}, ${category.color.split(" ")[2]})`,
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Pulsing background glow */}
              {hoveredCategory === catIndex && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-3xl`}
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                />
              )}

              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 rounded-xl glass-darker group/skill cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="text-2xl"
                        animate={{
                          scale: hoveredCategory === catIndex ? [1, 1.2, 1] : 1,
                        }}
                        transition={{
                          repeat: hoveredCategory === catIndex ? Infinity : 0,
                          duration: 1,
                          delay: skillIndex * 0.1,
                        }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="font-medium group-hover/skill:text-gradient transition-all">
                        {skill.name}
                      </span>
                    </div>

                    {/* Level badge */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className={`text-xs px-2 py-1 rounded-full border ${
                        getLevelBadge(skill.level).color
                      }`}
                    >
                      {getLevelBadge(skill.level).text}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Particle effects on hover */}
              {hoveredCategory === catIndex && (
                <>
                  {[...Array(6)].map((_, i) => {
                    const angle = (i / 6) * 360;
                    return (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute w-2 h-2 rounded-full bg-purple-400"
                        initial={{ x: "50%", y: "50%", opacity: 0 }}
                        animate={{
                          x: `${50 + Math.cos((angle * Math.PI) / 180) * 150}%`,
                          y: `${50 + Math.sin((angle * Math.PI) / 180) * 150}%`,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: i * 0.1,
                        }}
                      />
                    );
                  })}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add custom CSS for glass-darker */}
      <style jsx>{`
        .glass-darker {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  );
}
