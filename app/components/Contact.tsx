"use client";

import { motion, useMotionValue } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Instagram,
  Sparkles,
  Send,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Generate stable particle positions that won't change between server and client
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: `${(i * 37.5) % 100}%`, // Deterministic distribution
      top: `${(i * 47.3) % 100}%`, // Deterministic distribution
      duration: 3 + (i % 3),
      delay: (i % 4) * 0.5,
    }));
  }, []);

  const contacts = [
    {
      icon: <Github size={32} />,
      label: "GitHub",
      value: "@Abhishek-own",
      link: "https://github.com/Abhishek-own",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      bg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      shadowColor: "shadow-purple-500/50",
    },
    {
      icon: <Linkedin size={32} />,
      label: "LinkedIn",
      value: "Abhishek Mohapatra",
      link: "https://www.linkedin.com/in/im-abhishekmohapatra",
      gradient: "from-blue-400 via-cyan-500 to-teal-500",
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      shadowColor: "shadow-blue-500/50",
    },
    {
      icon: <Mail size={32} />,
      label: "Email",
      value: "mohapatraabhishek183@gmail.com",
      link: "mailto:mohapatraabhishek183@gmail.com",
      gradient: "from-orange-400 via-red-500 to-pink-500",
      bg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      shadowColor: "shadow-red-500/50",
    },
    {
      icon: <MessageCircle size={32} />,
      label: "WhatsApp",
      value: "+91 8480200896",
      link: "https://wa.me/918480200896",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      shadowColor: "shadow-green-500/50",
    },
    {
      icon: <Instagram size={32} />,
      label: "Instagram",
      value: "@_a_b_h_is_h_e_k_",
      link: "https://instagram.com/_a_b_h_is_h_e_k_",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bg: "bg-gradient-to-br from-purple-500/20 to-rose-500/20",
      shadowColor: "shadow-pink-500/50",
    },
  ];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-pink-500 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-black mb-6 relative"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
              Let's Connect
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Got an epic project? Looking for a full-stack problem solver?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">
              Let's build something amazing together!
            </span>
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-20">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
              className="group relative w-56"
            >
              {/* Glow effect on hover */}
              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                }}
                className={`absolute -inset-1 bg-gradient-to-r ${contact.gradient} rounded-3xl blur-xl ${contact.shadowColor} transition-all duration-500`}
              />

              {/* Card Content */}
              <motion.a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative block ${contact.bg} backdrop-blur-xl border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500`}
              >
                {/* Animated gradient border */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-white shadow-2xl ${contact.shadowColor} group-hover:shadow-3xl transition-all duration-500`}
                  >
                    {contact.icon}
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {contact.label}
                  </h3>

                  {/* Value */}
                  <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300 break-words">
                    {contact.value}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="absolute bottom-4 right-4"
                  >
                    <Send className="w-4 h-4 text-white/50" />
                  </motion.div>
                </div>

                {/* Shine effect */}
                <motion.div
                  animate={{
                    x: hoveredIndex === index ? ["-100%", "200%"] : "-100%",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center space-y-4"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="inline-block"
          >
            <p className="text-xl font-semibold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Made with 💜 and{" "}
              </span>
              <span className="text-2xl">☕</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                {" "}
                by Abhishek
              </span>
            </p>
          </motion.div>

          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            © 2026 The Full-Stack Sorcerer | Powered by NestJS, NextJS, TypeScript,
            and an unhealthy amount of debugging
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 1.4, duration: 1 }}
            className="w-64 h-1 mx-auto bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"
          />
        </motion.footer>
      </div>
    </section>
  );
}
