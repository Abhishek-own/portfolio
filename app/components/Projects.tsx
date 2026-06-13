"use client";

import { useState } from "react";
import Link from "next/link";
import { Coffee } from "lucide-react";

interface ProjectCardProps {
  src: string;
  alt: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
  features?: string[];
  links?: { label: string; url: string }[];
}

function ProjectCard({ src, alt, label, title, description, className = "", features, links }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl glass-card cursor-pointer group w-full ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          filter: hovered ? "grayscale(40%) brightness(50%)" : "grayscale(100%) brightness(70%)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "filter 0.3s ease-out, transform 0.3s ease-out",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-95 z-10" />

      {/* Card Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">

        {/* Subtitle / Category Label */}
        <div>
          <span
            className="text-primary text-[10px] tracking-widest block uppercase font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {label}
          </span>
        </div>

        {/* Title, Description, Features & Links */}
        <div className="flex flex-col gap-3">
          <div>
            <h3
              className="text-lg md:text-xl lg:text-2xl font-bold text-starlight-white leading-tight uppercase group-hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800 }}
            >
              {title}
            </h3>
          </div>

          {/* Explanation description */}
          {description && (
            <p className="text-xs text-on-surface-variant/85 font-body-md leading-relaxed max-w-xl line-clamp-2 md:line-clamp-none">
              {description}
            </p>
          )}

          {/* Features Badges */}
          {features && (
            <div className="flex flex-wrap gap-1.5 opacity-90">
              {features.map((feat) => (
                <span
                  key={feat}
                  className="text-[9px] md:text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-on-surface-variant/90 font-body-md"
                >
                  {feat}
                </span>
              ))}
            </div>
          )}

          {/* External Links */}
          {links && links.length > 0 && (
            <div className="flex gap-4 mt-1" onClick={(e) => e.stopPropagation()}>
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] md:text-xs text-cyber-cyan hover:text-white transition-colors flex items-center gap-1 font-bold underline decoration-cyber-cyan/30 underline-offset-4"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  const stats = [
    { value: "03+", label: "Years" },
    { value: "25+", label: "Projects" },
    { value: "10+", label: "Technologies" },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-container-max mx-auto px-6 md:px-16">

        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold text-starlight-white uppercase tracking-tighter"
            style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800 }}
          >
            Featured <span className="text-primary italic">Projects.</span>
          </h2>
          <Link
            href="/projects"
            className="text-primary hover:text-white transition-colors text-[10px] tracking-wider text-right uppercase font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.15em" }}
          >
            VIEW ALL<br className="md:hidden" /> PROJECTS (7)
          </Link>
        </div>

        {/* Layout Grid - Flat layout for desktop columns alignment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">

          {/* Large Card: Hola Tractor */}
          <div className="md:col-span-8 order-1">
            <ProjectCard
              className="aspect-[16/9] min-h-[300px]"
              src="/project_image/holatractor_clean.png"
              alt="Agritech Platform & Business ERP"
              label="01 / FULL STACK / 2025"
              title="Agritech Platform & Business ERP (Hola Tractor)"
              description="An agricultural fleet orchestration ERP designed to coordinate heavy machinery rentals, leasing pipelines, multi-party business contracts, and field transportation services."
              features={["Equipment Rental", "Leasing", "Finance & Insurance", "Dealer Management", "Transportation Services", "Multi-role System"]}
              links={[
                { label: "Website", url: "https://holatractor.com" },
                { label: "Dashboard", url: "https://dashboard.holatractor.com/login" }
              ]}
            />
          </div>

          {/* Learning Platform (Row 1 Right on Desktop) */}
          <div className="md:col-span-4 order-2 flex">
            <ProjectCard
              className="aspect-[4/3] md:aspect-auto min-h-[300px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdM0VEnSNiwMPdnah0O-WiENq7PbcOh2QHsNQS6rTHsl3k6PMgeu_YCRhl5PwLR1G-T2n2uiuMAPQF4wv4SjWpznbgTD7_hFmr-_vFv7wjNw00viJhJi2JSl602W2yTffuLjjdmjRVUuMK3yvJXDlccfOjRsejcocV7LWAAQWPHDna0IDqDUia_DxASy189ZfBT_lZdZtP0URYpNzn6sjg-B-VhEdLfUKHNhYUiEnqKDoDKv-YfxKoT4SPdTmpjJ28j6BRbY2jnDex"
              alt="Learning & Creator Platform"
              label="02 / FULL STACK / 2025"
              title="Learning & Creator Platform (Udemy-like)"
              description="A creator-centric LMS enabling course authoring, video streaming configurations, student progress portals, and automated mentor assignments."
              features={["Course Management", "Video Streaming", "S3 Storage", "Reels System", "Student Portal", "Creator Dashboard"]}
            />
          </div>

          {/* Stats + Quote (Row 2 Left on Desktop) */}
          <div className="md:col-span-8 order-4 md:order-3 flex flex-col gap-6 justify-between pt-8 border-t border-glass-edge/30">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span
                    className="text-3xl md:text-5xl font-bold text-primary tracking-tighter"
                    style={{ fontFamily: "var(--font-epilogue)", fontWeight: 900 }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[10px] md:text-xs text-on-surface-variant tracking-widest uppercase font-bold"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="space-y-1 my-4">
              <p
                className="text-xl md:text-3xl font-bold text-primary italic"
                style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800 }}
              >
                The goal is simple:
              </p>
              <p
                className="text-xl md:text-3xl font-bold text-starlight-white/80 italic"
                style={{ fontFamily: "var(--font-epilogue)", fontWeight: 700 }}
              >
                Better than yesterday.
              </p>
              <p
                className="text-xl md:text-3xl font-bold text-starlight-white/80 italic"
                style={{ fontFamily: "var(--font-epilogue)", fontWeight: 700 }}
              >
                Every. Single. Day.
              </p>
            </blockquote>
          </div>

          {/* Healthcare Platform (Row 2 Right on Desktop) */}
          <div className="md:col-span-4 order-3 md:order-4 flex">
            <ProjectCard
              className="aspect-[4/3] md:aspect-auto min-h-[300px]"
              src="/project_image/wellness_clean.png"
              alt="AI Wellness & Progress Platform"
              label="03 / HEALTHCARE / 2025"
              title="AI Wellness & Progress Platform"
              description="A telehealth workspace generating automated patient progress roadmaps and enabling real-time video consultation widgets."
              features={["Personalized Roadmaps", "Live Sessions", "Webinar Platform", "Doctor/Patient Roles", "Activity Tracking"]}
            />
          </div>

        </div>

        {/* Footer Credit & Privacy Tag */}
        <div className="mt-16 text-center flex flex-col gap-2 max-w-xl mx-auto">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes coffee-glow {
              0%, 100% { opacity: 0.35; filter: drop-shadow(0 0 1px rgba(255, 184, 0, 0.1)); }
              50% { opacity: 1; filter: drop-shadow(0 0 6px rgba(255, 184, 0, 0.85)); }
            }
            .animate-coffee-glow {
              animation: coffee-glow 3s ease-in-out infinite;
            }
          `}} />
          <span
            className="text-[10px] md:text-xs text-outline tracking-widest uppercase font-bold flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="opacity-30">Engineered with Purpose &bull; Love &amp; Coffie</span>
            <Coffee className="w-3.5 h-3.5 text-primary shrink-0 animate-coffee-glow" />
          </span>
          <p className="text-[9px] md:text-[10px] text-on-surface-variant/60 leading-relaxed font-body-md opacity-35">
            * Note: To respect client privacy and NDAs, certain project URLs are restricted and visual interfaces are replaced with clean, anonymous dummy screens.
          </p>
        </div>

      </div>
    </section>
  );
}
