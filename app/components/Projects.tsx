"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      icon: "🚜",
      title: "HolaTractor",
      description:
        "Full-stack AgriTech e-commerce platform enabling agricultural machinery booking. Built with multi-role authentication (farmers, owners, dealers, operators), real-time notifications, dynamic pricing, geo-location search, and payment integration.",
      tags: [
        "NestJS",
        "PostgreSQL",
        "Prisma ORM",
        "Firebase",
        "Socket.io",
        "JWT",
      ],
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      icon: "🤖",
      title: "Byte AI",
      description:
        "An AI assistant with personality! Byte knows everything about me and has one job: answering questions about the master and roasting anyone who dares to ask off-topic questions. Built as a fun experiment in AI customization.",
      tags: ["AI/ML", "NLP", "APIs", "OpenAI"],
      featured: false,
      liveUrl: "#byte",
      githubUrl: "#",
    },
    {
      icon: "🔌",
      title: "RESTful API Architecture",
      description:
        "Enterprise-grade API design with proper authentication, rate limiting, error handling, and documentation. Built scalable microservices that handle thousands of requests without breaking a sweat.",
      tags: ["REST APIs", "TypeScript", "Docker", "Swagger"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl md:text-7xl font-black text-center mb-16 text-gradient"
        >
          Epic Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass p-8 rounded-3xl relative overflow-hidden group ${
                project.featured ? "border-2 border-pink-500" : ""
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"
                >
                  <Sparkles size={16} />
                  FEATURED
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                className="text-7xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {project.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl font-semibold text-center flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 glass rounded-xl flex items-center justify-center"
                >
                  <Github size={20} />
                </motion.a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
