"use client";

import { useState } from "react";

interface ProjectCardProps {
  src: string;
  alt: string;
  label: string;
  title: string;
  className?: string;
}

function ProjectCard({ src, alt, label, title, className = "" }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl glass-card cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "filter 0.3s ease-out, transform 0.3s ease-out",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-85 z-10" />
      <div className="absolute bottom-0 left-0 p-6 z-20">
        <span
          className="text-primary text-[10px] tracking-widest mb-2 block uppercase font-bold"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {label}
        </span>
        <h3
          className="text-lg md:text-xl font-bold text-starlight-white"
          style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800 }}
        >
          {title}
        </h3>
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
    <section id="projects" className="py-16 bg-background">
      <div className="max-w-container-max mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <h2
            className="text-3xl md:text-5xl font-bold text-starlight-white"
            style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800 }}
          >
            Featured Projects
          </h2>
          <a
            href="https://github.com/Abhishek-own"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors text-[10px] tracking-wider text-right"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
          >
            VIEW ALL<br className="md:hidden" /> PROJECTS (12)
          </a>
        </div>

        {/* 
          Layout Strategy:
          - Mobile: Large card → two small cards → stats → quote (all stacked)
          - Desktop: Left col (large card + stats + quote) | Right col (two small cards spanning both rows)
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* [MOBILE: order 1] [DESKTOP: col 1-8, row 1] Large card */}
          <div className="md:col-span-8 order-1">
            <ProjectCard
              className="aspect-[16/9]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJCKtPAPf8Gfb_Zj7QrFDx8rdI5gnBJXc82g7fGb28QovDDOxTgkHsR-yqPqmEjHlwVoXiSGWKv6w0zR2Ucu1gK4Egvzgbd8xx2knPSPILUkoP1jovjXhcDDWl2RaFRecyF84k-CAFsU58jNf6tkCoWOlqUgSFN2NlL2IfiB8kMup350a1Xhl6vh3pAcC4_QMtKiVz15fuciE6C_QzZiGis1IAh_MNICzROg2mHYynegc3XYEf66LAO26WEYqaXsunF5IPpuY_l2uY"
              alt="Agritech Platform & Business ERP"
              label="01 / WEBGL / 2024"
              title="Agritech Platform & Business ERP"
            />
          </div>

          {/* [MOBILE: order 2] [DESKTOP: col 9-12, rows 1-2] Two small cards stacked */}
          <div className="md:col-span-4 md:row-span-2 order-2 flex flex-col gap-6 md:gap-8">
            <ProjectCard
              className="flex-1 aspect-square"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdM0VEnSNiwMPdnah0O-WiENq7PbcOh2QHsNQS6rTHsl3k6PMgeu_YCRhl5PwLR1G-T2n2uiuMAPQF4wv4SjWpznbgTD7_hFmr-_vFv7wjNw00viJhJi2JSl602W2yTffuLjjdmjRVUuMK3yvJXDlccfOjRsejcocV7LWAAQWPHDna0IDqDUia_DxASy189ZfBT_lZdZtP0URYpNzn6sjg-B-VhEdLfUKHNhYUiEnqKDoDKv-YfxKoT4SPdTmpjJ28j6BRbY2jnDex"
              alt="SaaS Dashboard"
              label="02 / FULLSTACK / 2024"
              title="SaaS Dashboard"
            />
            <ProjectCard
              className="flex-1 aspect-square"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5DNdfLAKQ-4Myb3S4MyNXTgJHi5ff6GpNdGi6_lexH5SEjNwq467OXyxu_CologgJZq2Ba7Hw8KQMjS_LqHZwpwVs1k8Rfz_6GNV0HxhzB6-XQc1BDwRq5GarJlvHHzq8r0gTBeem9HsP-RTQSEQGrPKH3Sg7IP4N0fGWrRbC95wAVA_bak_xyLMXUJUlRjZguW9QZAGqUK-v5VyMw_4ccoeNG2WBzt2ajj7ReyBWv3NZTFzjNhH91qk64CWLPIpsPjKQvQhhZTZi"
              alt="AI Chatbot & Automation"
              label="03 / AI SYSTEM / 2025"
              title="AI Chatbot & Automation"
            />
          </div>

          {/* [MOBILE: order 3] [DESKTOP: col 1-8, row 2] Stats + Quote */}
          <div className="md:col-span-8 order-3 flex flex-col gap-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-glass-edge/30">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span
                    className="text-3xl md:text-5xl font-bold text-primary"
                    style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800 }}
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
            <blockquote className="space-y-0.5">
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

        </div>

        <div className="mt-10 text-center">
          <span
            className="text-xs text-outline opacity-50 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Made with love and coffee
          </span>
        </div>
      </div>
    </section>
  );
}
