"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contacts = [
    {
      icon: <Github size={40} />,
      label: "GitHub",
      value: "@yourusername",
      link: "https://github.com/yourusername",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: <Linkedin size={40} />,
      label: "LinkedIn",
      value: "/in/yourusername",
      link: "https://linkedin.com/in/yourusername",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <Mail size={40} />,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      color: "from-red-600 to-pink-600",
    },
    {
      icon: <MapPin size={40} />,
      label: "Location",
      value: "Hazaribagh, Jharkhand",
      link: "#",
      color: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl md:text-7xl font-black text-center mb-8 text-gradient"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Got a project? Need a backend sorcerer? Or just want to talk tech? Hit
          me up on any platform below!
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass p-8 rounded-3xl text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white`}
              >
                {contact.icon}
              </motion.div>

              {/* Label */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                {contact.label}
              </h3>

              {/* Value */}
              <p className="text-sm text-gray-400 break-words">
                {contact.value}
              </p>

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`}
              />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 text-gray-500"
        >
          <p className="text-lg mb-2">Made with 💜 and ☕ by Abhishek</p>
          <p className="text-sm">
            © 2026 The Master Backend Sorcerer | Powered by NestJS, TypeScript,
            and endless debugging sessions
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
