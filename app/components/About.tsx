"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Rocket } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl md:text-7xl font-black text-center mb-16 text-gradient"
        >
          About The Master
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-purple-400" size={32} />
                <h3 className="text-2xl font-bold">The Developer</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hey there! I'm Abhishek, a backend developer who doesn't just
                write code - I architect solutions that actually work in
                production. Currently building{" "}
                <span className="text-green-400 font-semibold">
                  HolaTractor
                </span>
                , an AgriTech e-commerce platform connecting farmers, owners,
                dealers, and operators.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-blue-400" size={32} />
                <h3 className="text-2xl font-bold">The Tech Stack</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                My weapon of choice?{" "}
                <span className="text-purple-400 font-semibold">NestJS</span>,
                <span className="text-blue-400 font-semibold"> PostgreSQL</span>
                ,
                <span className="text-green-400 font-semibold">
                  {" "}
                  Prisma ORM
                </span>
                , and a healthy dose of late-night debugging sessions. I
                specialize in building scalable APIs, real-time systems, and
                complex database architectures that don't break when users
                actually use them.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="text-pink-400" size={32} />
                <h3 className="text-2xl font-bold">The Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not optimizing database queries or implementing JWT
                authentication, I'm probably creating AI assistants that roast
                people. Because why not? 😎
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-8 rounded-3xl text-center cursor-pointer group"
              >
                <motion.div
                  className={`text-6xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                <p className="text-gray-400 text-lg group-hover:text-white transition-colors">
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
