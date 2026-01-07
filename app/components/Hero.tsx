"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Throne Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="relative inline-block mb-8"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-9xl filter drop-shadow-2xl"
          >
            🪑
          </motion.div>
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 text-7xl"
          >
            👑
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
          <span className="text-gray-300">The Master Backend Sorcerer</span>
          <Sparkles className="text-yellow-400" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Full-Stack Backend Developer specializing in{" "}
          <span className="text-purple-400 font-semibold">NestJS</span> &{" "}
          <span className="text-blue-400 font-semibold">PostgreSQL</span>.
          Building{" "}
          <span className="text-green-400 font-semibold">HolaTractor</span> - An
          AgriTech platform that makes agricultural machinery booking actually
          work. Dreams in TypeScript decorators. 🚀
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
