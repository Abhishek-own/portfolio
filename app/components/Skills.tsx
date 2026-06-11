"use client";

import { motion } from "framer-motion";
import { Server, Palette, Database, Cloud, Settings, BarChart3 } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["NestJS", "Node.js", "TypeScript", "REST APIs", "GraphQL", "JWT Authentication"],
    },
    {
      title: "Frontend & UI",
      icon: Palette,
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Database & ORM",
      icon: Database,
      skills: ["PostgreSQL", "Prisma", "MongoDB", "Redis"],
    },
    {
      title: "Real-time & Cloud",
      icon: Cloud,
      skills: ["Socket.io", "WebSockets", "Firebase", "AWS Services"],
    },
    {
      title: "Tools & DevOps",
      icon: Settings,
      skills: ["Git", "Docker", "Postman", "VS Code"],
    },
    {
      title: "Data & Automation",
      icon: BarChart3,
      skills: ["Web Scraping", "Data Pipelines", "Power BI", "Python"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-background border-t border-glass-edge/50">
      <div className="max-w-container-max mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-label-caps text-xs md:text-sm text-primary tracking-[0.4em] mb-4 block uppercase font-bold"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            The Forge
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-starlight-white leading-tight uppercase tracking-tighter"
            style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 800 }}>
            Tech <span className="text-primary italic">Arsenal.</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-150 cursor-pointer"
            >
              {/* Category Icon */}
              <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center mb-6 group-hover:bg-cyber-cyan/30 transition-colors duration-150">
                <cat.icon className="text-cyber-cyan w-6 h-6" />
              </div>

              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-headline-lg font-bold text-starlight-white mb-4">
                {cat.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-3">
                {cat.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-on-surface-variant font-body-md text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}