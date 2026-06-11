"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#byte", label: "Byte AI" },
    { href: "#contact", label: "Contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Navbar height offset + gap
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-4 left-4 right-4 z-50 flex justify-between items-center px-6 md:px-8 py-3 bg-surface/40 backdrop-blur-xl rounded-full max-w-5xl mx-auto border border-glass-edge shadow-[0_0_40px_rgba(255,149,0,0.1)] transition-all duration-300 ${
          isScrolled ? "scale-98 shadow-[0_0_50px_rgba(255,149,0,0.15)] bg-surface/60" : ""
        }`}
      >
        {/* Brand Tag */}
        <a 
          href="#"
          onClick={(e) => handleSmoothScroll(e, "#")}
          className="text-sm md:text-base font-label-caps font-bold tracking-widest text-starlight-white hover:text-primary transition-colors"
        >
          ABHISHEK.DEV
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-on-surface-variant hover:text-starlight-white font-label-caps text-sm md:text-base tracking-wider transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="hidden sm:inline-block bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-caps text-xs tracking-widest font-bold hover:scale-105 active:scale-95 transition-all duration-150"
          >
            BOOK A CALL
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-starlight-white hover:text-primary transition-colors p-1"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-surface-container/90 backdrop-blur-2xl border border-glass-edge rounded-3xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-on-surface-variant hover:text-starlight-white font-label-caps text-base tracking-wider py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-glass-edge/50 my-2" />
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="w-full text-center bg-primary-container text-on-primary-container py-3 rounded-full font-label-caps text-xs tracking-widest font-bold block"
              >
                BOOK A CALL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}