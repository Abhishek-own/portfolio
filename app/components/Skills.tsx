"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      name: "NestJS",
      icon: "💚",
      level: 95,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      level: 90,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Prisma ORM",
      icon: "⚡",
      level: 92,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Firebase",
      icon: "🔥",
      level: 85,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "TypeScript",
      icon: "📘",
      level: 93,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "REST APIs",
      icon: "🔌",
      level: 94,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "JWT Auth",
      icon: "🔐",
      level: 88,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Socket.io",
      icon: "🌐",
      level: 80,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl md:text-7xl font-black text-center mb-16 text-gradient"
        >
          Tech Arsenal
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="glass p-6 rounded-3xl text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Icon */}
              <motion.div
                className="text-6xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.2,
                }}
              >
                {skill.icon}
              </motion.div>

              {/* Name */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                {skill.name}
              </h3>

              {/* Level Text */}
              <p className="text-sm text-gray-500 mb-3">
                {skill.level >= 90
                  ? "Master Level"
                  : skill.level >= 85
                  ? "Expert"
                  : "Advanced"}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>

              {/* Percentage */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-sm text-gray-400 mt-2 font-semibold"
              >
                {skill.level}%
              </motion.p>

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
