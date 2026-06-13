"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Briefcase, Wrench, Filter, X, ChevronDown } from "lucide-react";

export default function ProjectsPage() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const projects = [
    {
      label: "01 / FULL STACK / 2025",
      title: "Agritech Platform & Business ERP (Hola Tractor)",
      description: "An agricultural fleet orchestration ERP designed to coordinate heavy machinery rentals, leasing pipelines, multi-party business contracts, and field transportation services.",
      src: "/project_image/holatractor_clean.png",
      links: [
        { label: "Website", url: "https://holatractor.com" },
        { label: "Dashboard", url: "https://dashboard.holatractor.com/login" }
      ],
      features: ["Equipment Rental", "Leasing", "Finance & Insurance", "Dealer Management", "Transportation Services", "Multi-role System"],
      whatItDoes: "An all-in-one agricultural platform designed to connect farmers, equipment owners, dealers, and service providers. Users can rent machinery, manage bookings, access financing and insurance options, and streamline agricultural operations through a centralized system.",
      technicalOverview: "Developed a scalable full-stack platform with role-based access control, equipment management, booking workflows, dealer management, financial modules, and real-time status tracking. Built using modern web technologies with a focus on performance, maintainability, and business scalability.",
      challengesSolutions: "One of the biggest challenges was designing workflows that supported multiple user types such as farmers, equipment owners, dealers, and administrators while keeping permissions secure and manageable.\n\nTo solve this, I implemented a flexible RBAC architecture and modular backend structure that allowed each user role to access only the features relevant to them while maintaining system scalability.",
      role: "Lead Full Stack Developer",
      year: 2025,
      techStack: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "RBAC"],
      responsibilities: [
        "Designed business workflows and system architecture",
        "Developed REST APIs and backend modules",
        "Implemented multi-role access control",
        "Designed database schemas and relationships",
        "Integrated finance, insurance, and booking modules",
        "Collaborated on frontend implementation"
      ],
      images: [
        "/project_image/holatractor.png",
        "/project_image/holatractor (2).png",
        "/project_image/holatractor (3).png",
        "/project_image/holatractor (4).png",
        "/project_image/holatractor (5).png",
        "/project_image/holatractor (6).png"
      ]
    },
    {
      label: "02 / FULL STACK / 2025",
      title: "Learning & Creator Platform (Udemy-like)",
      description: "An interactive educational portal providing seamless video streaming, course orchestration pipelines, creator workspaces, and payment settlement.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdM0VEnSNiwMPdnah0O-WiENq7PbcOh2QHsNQS6rTHsl3k6PMgeu_YCRhl5PwLR1G-T2n2uiuMAPQF4wv4SjWpznbgTD7_hFmr-_vFv7wjNw00viJhJi2JSl602W2yTffuLjjdmjRVUuMK3yvJXDlccfOjRsejcocV7LWAAQWPHDna0IDqDUia_DxASy189ZfBT_lZdZtP0URYpNzn6sjg-B-VhEdLfUKHNhYUiEnqKDoDKv-YfxKoT4SPdTmpjJ28j6BRbY2jnDex",
      features: ["Course Management", "Video Streaming", "S3 Storage", "Reels System", "Student Portal", "Creator Dashboard", "Mentor Management"],
      whatItDoes: "A learning platform where creators can publish courses, students can enroll and learn, mentors can guide users, and business owners can manage educational content. The platform also includes short-form video content similar to reels for improved engagement.",
      technicalOverview: "Built a multi-role education platform featuring video streaming, course management, content delivery, creator dashboards, student progress tracking, and cloud-based media storage using AWS S3.",
      challengesSolutions: "Handling large video uploads and ensuring smooth content delivery was a major challenge.\n\nI solved this by integrating AWS S3 for scalable file storage and implementing optimized upload workflows to reduce server load and improve content accessibility.",
      role: "Full Stack Developer",
      year: 2025,
      techStack: ["React", "Next.js", "AWS", "Redux", "TypeScript"],
      responsibilities: [
        "Developed course and content management features",
        "Integrated AWS S3 for media storage",
        "Built creator and student workflows",
        "Implemented role-based access controls",
        "Designed video and reels management APIs",
        "Optimized content delivery performance"
      ]
    },
    {
      label: "03 / HEALTHCARE / 2024",
      title: "AI Wellness & Progress Platform",
      description: "A modern telehealth platform offering automated wellness plans, doctor workspaces, LiveKit-powered consultation widgets, and wellness logs.",
      src: "/project_image/wellness_clean.png",
      features: ["Personalized Roadmaps", "Live Sessions", "Webinar Platform", "Doctor Dashboard", "Patient Portal", "Activity Tracking"],
      whatItDoes: "A personalized wellness platform that generates custom task roadmaps based on user responses. Users receive daily goals and activities while doctors and mentors can conduct live sessions and monitor progress.",
      technicalOverview: "Developed a multi-role platform supporting patients, doctors, and administrators. The system dynamically generates personalized roadmaps, tracks user activity, manages progress reports, and integrates real-time communication using LiveKit.",
      challengesSolutions: "Creating personalized roadmaps that adapt to user activity required designing flexible business logic capable of evaluating progress and generating new plans.\n\nI addressed this by implementing a modular recommendation workflow that continuously adjusts future tasks based on user engagement and completion rates.",
      role: "Full Stack / Real-Time Engineer",
      year: 2024,
      techStack: ["React", "Next.js", "LiveKit", "Node.js", "TypeScript"],
      responsibilities: [
        "Built personalized roadmap generation logic",
        "Integrated LiveKit for webinars and live sessions",
        "Developed doctor, patient, and admin workflows",
        "Designed task scheduling and tracking systems",
        "Implemented real-time communication features",
        "Developed reporting and progress monitoring tools"
      ]
    },
    {
      label: "04 / ENTERPRISE SYSTEM / 2024",
      title: "Workforce Management System",
      description: "An internal operations suite enforcing strict role-based configurations, shift rostering schedules, automated attendance logs, and notifications.",
      src: "/project_image/workforce_dashboard.png",
      features: ["RBAC", "Attendance Tracking", "Auto-Absent Logic", "Shift Management", "Notifications"],
      whatItDoes: "A workforce and attendance management platform that helps organizations track employee attendance, working hours, project assignments, leave management, and administrative permissions.",
      technicalOverview: "Built a highly configurable RBAC-based system with attendance automation, shift management, notification services, project assignments, and permission-driven administration controls.",
      challengesSolutions: "Managing dynamic permissions across multiple administrative levels became increasingly complex as new roles and responsibilities were introduced.\n\nI solved this by designing a permission matrix system that allowed super administrators to control exactly which actions each administrative role could perform without requiring code changes.",
      role: "Backend Engineer",
      year: 2024,
      techStack: ["Node.js", "PostgreSQL", "RBAC", "TypeScript"],
      responsibilities: [
        "Designed dynamic RBAC architecture",
        "Built attendance and shift management systems",
        "Developed notification and escalation workflows",
        "Implemented project assignment modules",
        "Created permission management interfaces",
        "Optimized database queries and reporting"
      ]
    },
    {
      label: "05 / MARKETPLACE / 2023",
      title: "Vehicle Marketplace Platform",
      description: "A centralized vehicle trade marketplace supporting verified dealer listings, buyer negotiation flows, spec filtering, and listings management.",
      src: "/project_image/vehicle_marketplace.png",
      features: ["Vehicle Listings", "Buyer/Seller Management", "Search & Filtering", "Marketplace Workflow"],
      whatItDoes: "A marketplace where users can list vehicles, browse available inventory, communicate with sellers, and manage vehicle transactions through a streamlined interface.",
      technicalOverview: "Developed a vehicle listing and marketplace system featuring search capabilities, inventory management, listing workflows, user accounts, and transaction management tools.",
      challengesSolutions: "The primary challenge was designing efficient search and filtering mechanisms while maintaining performance as the number of vehicle listings increased.\n\nThis was solved through optimized database structures, indexing strategies, and query optimization techniques.",
      role: "Frontend / Full Stack",
      year: 2023,
      techStack: ["React", "Next.js", "PostgreSQL", "Prisma"],
      responsibilities: [
        "Developed vehicle listing and marketplace features",
        "Designed search and filtering mechanisms",
        "Built buyer and seller workflows",
        "Implemented authentication and account management",
        "Optimized inventory and listing performance",
        "Developed marketplace administration tools"
      ]
    },
    {
      label: "06 / TELECOM & AUTOMATION / 2025",
      title: "WhatsApp Business Automation Platform",
      description: "An enterprise communications system utilizing the Meta Cloud API to orchestrate auto-responses, webhooks listener, and trigger workflows.",
      src: "/project_image/whatsapp_automation.png",
      features: ["Meta Cloud API", "Webhooks", "Task Automation", "Node Builder Mockup"],
      whatItDoes: "A marketing and message automation workspace utilizing the Meta Cloud API. Organizations can build drag-and-drop auto-response workflows, manage contact broadcasts, and trigger transactional notifications through webhooks.",
      technicalOverview: "Integrated Meta Cloud API (WhatsApp Business Platform) for automated messaging, constructed a backend listener for high-throughput webhook events, and developed a visual canvas layout mockup for workflow builders.",
      challengesSolutions: "Processing asynchronous webhook updates from Meta at scale while ensuring message delivery order was challenging.\n\nI resolved this by designing an event queuing system (Redis-backed) that processed messaging callbacks sequentially.",
      role: "Integration & Automation Engineer",
      year: 2025,
      techStack: ["Node.js", "Redis", "Webhooks", "Meta Cloud API"],
      responsibilities: [
        "Meta Cloud API & Webhooks Integration",
        "Asynchronous Event Queue Backend",
        "Workflow Automation Rules Engine",
        "Interactive Customer Broadcasting Console",
        "Meta App Credentials Management",
        "Real-Time Message Delivery Reporting"
      ]
    },
    {
      label: "07 / REAL-TIME SOCIAL / 2024",
      title: "Social Matching Platform",
      description: "A highly interactive dating platform powered by custom compatibility matching engines, low-latency WebSocket chat rooms, and WebRTC video calling.",
      src: "/project_image/social_matching.png",
      features: ["Compatibility Engine", "WebSockets Chat", "Geo-Fencing Proximity", "WebRTC Video Calls"],
      whatItDoes: "A social networking platform designed to help users discover, connect, and interact with potential matches based on profile preferences and user interests.",
      technicalOverview: "Implemented user authentication, profile management, matching algorithms, real-time interactions, and secure communication features while maintaining privacy and performance standards.",
      challengesSolutions: "Balancing user privacy with engagement features required careful consideration of data visibility and communication workflows.\n\nI implemented secure access controls and privacy-focused profile management to ensure users maintained control over their personal information.",
      role: "Real-Time Systems Developer",
      year: 2024,
      techStack: ["React", "WebSockets", "WebRTC", "Socket.io", "Node.js"],
      responsibilities: [
        "Built user profile and matching systems",
        "Developed real-time communication features",
        "Implemented authentication and privacy controls",
        "Designed scalable database structures",
        "Created engagement and interaction workflows",
        "Maintained application performance and security"
      ]
    }
  ];  const [selectedYear, setSelectedYear] = useState<string>("All Years");
  const [selectedRole, setSelectedRole] = useState<string>("All Roles");
  const [selectedSkill, setSelectedSkill] = useState<string>("All Skills");

  // Filtering options
  const filterYears = ["All Years", "2025", "2024", "2023"];
  
  const filterRoles = [
    "All Roles",
    "Full Stack",
    "Backend",
    "Frontend",
    "Automation & Real-Time"
  ];

  const filterSkills = [
    "All Skills",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "WebSockets",
    "LiveKit",
    "Meta Cloud API",
    "RBAC"
  ];

  // Filtering logic
  const filteredProjects = projects.filter((proj) => {
    const matchYear = selectedYear === "All Years" || proj.year.toString() === selectedYear;
    
    const matchRole = selectedRole === "All Roles" || 
      (selectedRole === "Full Stack" && proj.role.toLowerCase().includes("full stack")) ||
      (selectedRole === "Backend" && proj.role.toLowerCase().includes("backend")) ||
      (selectedRole === "Frontend" && proj.role.toLowerCase().includes("frontend")) ||
      (selectedRole === "Automation & Real-Time" && (
        proj.role.toLowerCase().includes("automation") || 
        proj.role.toLowerCase().includes("real-time") || 
        proj.role.toLowerCase().includes("systems")
      ));

    const matchSkill = selectedSkill === "All Skills" || proj.techStack.includes(selectedSkill);

    return matchYear && matchRole && matchSkill;
  });

  const clearFilters = () => {
    setSelectedYear("All Years");
    setSelectedRole("All Roles");
    setSelectedSkill("All Skills");
    setExpandedProjectId(null);
  };

  const isAnyFilterActive = selectedYear !== "All Years" || selectedRole !== "All Roles" || selectedSkill !== "All Skills";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  } as const;

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased pb-24">
      
      {/* Subpage Header */}
      <header className="py-8 border-b border-glass-edge/40">
        <div className="max-w-container-max mx-auto px-6 md:px-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-label-caps text-xs md:text-sm uppercase font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Back to Home
            </span>
          </Link>
          <div className="font-label-caps text-xs md:text-sm text-starlight-white font-bold tracking-[0.2em]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            ABHISHEK.DEV
          </div>
        </div>
      </header>

      {/* Scrolling Announcement Bar (Ticker) */}
      <div className="w-full bg-cyber-cyan/[0.02] border-y border-glass-edge/30 py-3 overflow-hidden relative select-none">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ticker-scroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-33.3333%, 0, 0); }
          }
          .animate-ticker-scroller {
            display: inline-flex;
            animation: ticker-scroll 35s linear infinite;
            will-change: transform;
          }
        `}} />
        <div className="animate-ticker-scroller whitespace-nowrap flex gap-12 font-body-md text-xs text-cyber-cyan/95 tracking-wider uppercase font-semibold">
          {Array(3).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-12 shrink-0">
              <span>
                <span className="text-primary font-bold mr-1">[NOTICE]</span> Client projects shown are simplified demonstrations. Source code, production URLs, and sensitive business data remain confidential under client agreements.
              </span>
              <span className="text-primary/40">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <main className="pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          
          {/* Header & Filter Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left Column: Page Title */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div>
                <span className="font-label-caps text-xs md:text-sm text-primary tracking-[0.4em] mb-4 block uppercase font-bold"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Complete Catalog
                </span>
                <h1 className="text-4xl md:text-6xl text-starlight-white leading-tight uppercase tracking-tighter"
                  style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 800 }}>
                  All <span className="text-primary italic">Projects.</span>
                </h1>
                <p className="text-on-surface-variant/80 font-body-md text-sm md:text-base mt-4 max-w-xl leading-relaxed">
                  A collection of real-world applications developed for clients across agritech, education, healthcare, automation, and enterprise management domains. Due to confidentiality agreements, project details have been generalized while highlighting the technical solutions and business challenges addressed.
                </p>
              </div>
            </div>

            {/* Right Column: Filter Panel */}
            <div className="lg:col-span-5 w-full">
              <div className="p-6 rounded-2xl border border-glass-edge/40 bg-white/[0.01] w-full">
                <div className="flex items-center justify-between mb-4 border-b border-glass-edge/20 pb-3">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-primary" />
                    <span className="font-label-caps text-xs md:text-sm font-bold uppercase tracking-wider text-starlight-white"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      Filter Portfolio
                    </span>
                  </div>
                  {isAnyFilterActive && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-primary hover:text-white transition-colors font-label-caps cursor-pointer"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      <X className="w-3 h-3" />
                      Clear Filters
                    </button>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  {/* Year Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-on-surface-variant/70 uppercase tracking-widest font-bold font-label-caps flex items-center gap-1"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      <Calendar className="w-3.5 h-3.5 text-primary/80" />
                      Date Range / Year
                    </label>
                    <div className="relative">
                      <select
                        value={selectedYear}
                        onChange={(e) => { setSelectedYear(e.target.value); setExpandedProjectId(null); }}
                        className="w-full bg-black/30 border border-glass-edge/40 hover:border-cyber-cyan/35 text-xs text-starlight-white rounded-xl py-2.5 pl-3 pr-8 appearance-none cursor-pointer focus:outline-none focus:border-cyber-cyan/50 transition-colors font-body-md"
                      >
                        {filterYears.map((yr) => (
                          <option key={yr} value={yr} className="bg-neutral-900 text-starlight-white text-xs">
                            {yr === "All Years" ? "All Years (2023 - 2025)" : yr}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-on-surface-variant absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Role Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-on-surface-variant/70 uppercase tracking-widest font-bold font-label-caps flex items-center gap-1"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      <Briefcase className="w-3.5 h-3.5 text-primary/80" />
                      Professional Role
                    </label>
                    <div className="relative">
                      <select
                        value={selectedRole}
                        onChange={(e) => { setSelectedRole(e.target.value); setExpandedProjectId(null); }}
                        className="w-full bg-black/30 border border-glass-edge/40 hover:border-cyber-cyan/35 text-xs text-starlight-white rounded-xl py-2.5 pl-3 pr-8 appearance-none cursor-pointer focus:outline-none focus:border-cyber-cyan/50 transition-colors font-body-md"
                      >
                        {filterRoles.map((role) => (
                          <option key={role} value={role} className="bg-neutral-900 text-starlight-white text-xs">
                            {role === "All Roles" ? "All Roles" : role}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-on-surface-variant absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Skill / Tech Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-on-surface-variant/70 uppercase tracking-widest font-bold font-label-caps flex items-center gap-1"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      <Wrench className="w-3.5 h-3.5 text-primary/80" />
                      Skill / Technology
                    </label>
                    <div className="relative">
                      <select
                        value={selectedSkill}
                        onChange={(e) => { setSelectedSkill(e.target.value); setExpandedProjectId(null); }}
                        className="w-full bg-black/30 border border-glass-edge/40 hover:border-cyber-cyan/35 text-xs text-starlight-white rounded-xl py-2.5 pl-3 pr-8 appearance-none cursor-pointer focus:outline-none focus:border-cyber-cyan/50 transition-colors font-body-md"
                      >
                        {filterSkills.map((sk) => (
                          <option key={sk} value={sk} className="bg-neutral-900 text-starlight-white text-xs">
                            {sk}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-on-surface-variant absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Reusable Project Card Renderer */}
          {(() => {
            const renderProjectCard = (proj: typeof projects[0]) => {
              const isExpanded = expandedProjectId === proj.title;
              return (
                <motion.div
                  key={proj.title}
                  variants={itemVariants}
                  layout="position"
                  className="glass-card rounded-2xl border border-glass-edge/40 overflow-hidden flex flex-col justify-between group hover:border-cyber-cyan/35 transition-all duration-300 w-full"
                >
                  {/* Visual Image container */}
                  <div className="aspect-[16/9] w-full relative overflow-hidden bg-black/20 shrink-0">
                    <img
                      src={proj.src}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                      style={{ filter: "grayscale(10%) brightness(85%)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Label */}
                      <span className="text-primary text-[10px] tracking-widest block uppercase font-bold mb-2 font-label-caps"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {proj.label}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-starlight-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors"
                        style={{ fontFamily: "var(--font-epilogue)", fontWeight: 800 }}>
                        {proj.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-on-surface-variant/80 text-sm font-body-md leading-relaxed mb-6">
                        {proj.description}
                      </p>

                      {/* Features Badges */}
                      <div className="flex flex-wrap gap-2">
                        {proj.features.map((feat) => (
                          <span
                            key={feat}
                            className="text-[9px] md:text-[10px] px-2.5 py-1 rounded bg-white/[0.02] border border-glass-edge/50 text-on-surface-variant font-body-md font-medium"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>

                      {/* Expanded Narrative Details */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-glass-edge/30 mt-6 pt-6"
                          >
                            <div className="flex flex-col gap-6 text-left">
                              {/* What it does */}
                              <div>
                                <h4 className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider mb-1 font-label-caps"
                                  style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                  What it does
                                </h4>
                                <p className="text-xs text-starlight-white/90 leading-relaxed font-body-md whitespace-pre-line">
                                  {proj.whatItDoes}
                                </p>
                              </div>

                              {/* Technical Overview */}
                              <div>
                                <h4 className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider mb-1 font-label-caps"
                                  style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                  Technical Overview
                                </h4>
                                <p className="text-xs text-starlight-white/90 leading-relaxed font-body-md whitespace-pre-line">
                                  {proj.technicalOverview}
                                </p>
                              </div>

                              {/* Challenges & Solutions */}
                              <div>
                                <h4 className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider mb-1 font-label-caps"
                                  style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                  Challenges & Solutions
                                </h4>
                                <p className="text-xs text-starlight-white/90 leading-relaxed font-body-md whitespace-pre-line">
                                  {proj.challengesSolutions}
                                </p>
                              </div>

                              {/* Role & Responsibilities */}
                              <div className="p-4 rounded-xl bg-white/[0.01] border border-glass-edge/30">
                                <h4 className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider mb-2 font-label-caps"
                                  style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                  Professional Role
                                </h4>
                                <div className="text-xs text-starlight-white font-bold mb-3 font-body-md">
                                  Role: <span className="text-cyber-cyan">{proj.role}</span>
                                </div>
                                
                                <h5 className="text-[10px] uppercase tracking-wider text-starlight-white/70 font-semibold mb-2 font-label-caps"
                                  style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                  Responsibilities
                                </h5>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {proj.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant/95 leading-relaxed font-body-md">
                                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 shrink-0" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Media / Images Carousel (for Hola Tractor) */}
                              {proj.images && proj.images.length > 0 && (
                                <div>
                                  <h4 className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider mb-3 font-label-caps"
                                    style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    Screenshot Gallery
                                  </h4>
                                  <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-2 px-2 scroll-smooth snap-x">
                                    {proj.images.map((imgUrl, imgIdx) => (
                                      <div
                                        key={imgIdx}
                                        className="w-[280px] md:w-[340px] shrink-0 aspect-[16/9] rounded-xl border border-glass-edge/40 overflow-hidden bg-black/10 group/img cursor-pointer snap-start"
                                      >
                                        <img
                                          src={imgUrl}
                                          alt={`${proj.title} Screenshot ${imgIdx + 1}`}
                                          className="w-full h-full object-cover object-center group-hover/img:scale-[1.03] transition-transform duration-300"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  <span className="text-[9px] text-on-surface-variant/40 block mt-1">
                                    * Scroll horizontally to view screenshots &rarr;
                                  </span>
                                </div>
                              )}

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Toggle expand button */}
                    <button
                      onClick={() => setExpandedProjectId(isExpanded ? null : proj.title)}
                      className="w-full mt-6 py-2 px-4 rounded-xl border border-glass-edge/40 hover:border-cyber-cyan/35 text-xs text-primary hover:text-white bg-white/[0.01] hover:bg-cyber-cyan/[0.02] transition-colors duration-200 font-bold font-label-caps tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {isExpanded ? "Collapse Details ↑" : "Read Case Study &rarr;"}
                    </button>

                    {/* Link action bar (only visible if collapsed or has links) */}
                    {proj.links && proj.links.length > 0 && !isExpanded && (
                      <div className="flex gap-6 pt-4 mt-4 border-t border-glass-edge/20">
                        {proj.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyber-cyan hover:text-white transition-colors flex items-center gap-1 font-bold underline decoration-cyber-cyan/35 underline-offset-4"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                          >
                            {link.label} &rarr;
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            };

            const filterKey = `${selectedYear}-${selectedRole}-${selectedSkill}`;

            return (
              <AnimatePresence mode="wait">
                {filteredProjects.length > 0 ? (
                  <motion.div
                    key={filterKey}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="w-full"
                  >
                    {/* Desktop layout: split columns so expanding one card doesn't shift the other column */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-start w-full">
                      <div className="flex flex-col gap-8 md:gap-12 w-full">
                        {filteredProjects.filter((_, idx) => idx % 2 === 0).map(renderProjectCard)}
                      </div>
                      <div className="flex flex-col gap-8 md:gap-12 w-full">
                        {filteredProjects.filter((_, idx) => idx % 2 !== 0).map(renderProjectCard)}
                      </div>
                    </div>

                    {/* Mobile / Tablet layout: single stacked list in sequential order */}
                    <div className="lg:hidden flex flex-col gap-8 md:gap-12 w-full">
                      {filteredProjects.map(renderProjectCard)}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty-state"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-center py-20 px-6 glass-card rounded-2xl border border-glass-edge/40 max-w-3xl mx-auto mt-12 w-full"
                  >
                    <Filter className="w-10 h-10 text-primary mx-auto mb-4 opacity-40 animate-pulse" />
                    <h3 className="text-lg font-bold text-starlight-white mb-2 uppercase tracking-tight font-label-caps"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      No Projects Match Selection
                    </h3>
                    <p className="text-on-surface-variant/80 text-sm font-body-md mb-6 max-w-md mx-auto">
                      No projects match {selectedYear !== "All Years" ? `year "${selectedYear}"` : ""}{selectedRole !== "All Roles" ? `, role "${selectedRole}"` : ""}{selectedSkill !== "All Skills" ? `, skill "${selectedSkill}"` : ""}. Try adjusting your filters.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="py-2.5 px-6 rounded-xl border border-primary hover:border-white text-xs text-primary hover:text-white bg-primary/10 hover:bg-white/5 transition-all duration-200 font-bold font-label-caps tracking-wider uppercase cursor-pointer"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      Reset All Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })()}

        </div>
      </main>
    </div>
  );
}
