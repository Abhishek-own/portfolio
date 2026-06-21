"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const WhatsAppIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-4 h-4"}
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.794.002-2.618-1.018-5.08-2.872-6.938C16.3 2.015 13.843.996 11.224.996c-5.41 0-9.81 4.403-9.813 9.804-.001 1.725.454 3.411 1.319 4.898l-.99 3.61 3.733-.977zm11.367-7.984c-.302-.15-1.785-.882-2.062-.982-.277-.1-.478-.15-.679.15-.201.3-.778.982-.954 1.181-.176.2-.352.225-.654.075-.302-.15-1.276-.47-2.43-1.499-.898-.8-1.503-1.79-1.28-2.19.226-.375.025-.578-.125-.727-.135-.134-.302-.35-.453-.525-.15-.175-.2-.3-.3-.5s-.05-.375-.025-.5c.025-.125.201-.475.302-.675.101-.2.15-.35.226-.5.075-.15.038-.275-.019-.375-.056-.1-.478-1.15-.654-1.575-.172-.412-.347-.356-.478-.362-.124-.006-.267-.007-.409-.007-.142 0-.374.053-.57.269-.196.215-.747.73-0.747 1.78s.766 2.069.872 2.211c.106.141 1.509 2.302 3.655 3.228.51.22 1.054.419 1.588.588.544.17 1.037.146 1.428.087.436-.066 1.785-.73 2.037-1.436.252-.706.252-1.313.176-1.436-.075-.124-.277-.199-.579-.349z" />
  </svg>
);

export default function Footer() {
  const socials = [
    {
      name: "Github",
      url: "https://github.com/Abhishek-own",
      icon: Github,
      hoverClass: "hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/im-abhishekmohapatra",
      icon: Linkedin,
      hoverClass: "hover:text-[#0A66C2] hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.55)]"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/_mu_abhishek_",
      icon: Instagram,
      hoverClass: "hover:text-[#E1306C] hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.55)]"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918480200896",
      icon: WhatsAppIcon,
      hoverClass: "hover:text-[#25D366] hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.55)]"
    },
  ];

  return (
    <footer id="contact" className="bg-deep-space py-12 md:py-20 border-t border-glass-edge">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-12 max-w-container-max mx-auto w-full gap-12">
        {/* Brand & Description */}
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <div
            className="text-xl md:text-2xl font-headline-lg font-bold text-starlight-white tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-epilogue)', fontWeight: 800 }}
          >
            ABHISHEK MOHAPATRA
          </div>
          <p className="max-w-xs text-on-surface-variant font-body-md opacity-70">
            Available for freelance projects and high-end collaborations. Engineered with intent.
          </p>
          <div className="flex gap-6 mt-4">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                className={`text-on-surface-variant transition-all duration-150 font-label-caps text-xs tracking-wider uppercase flex items-center gap-1.5 ${social.hoverClass}`}
              >
                <social.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Call to Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl w-full md:w-auto min-w-[320px]"
        >
          <h4 className="font-headline-lg text-lg text-starlight-white mb-2 font-bold">Ready to talk?</h4>
          <a
            className="text-primary text-xl md:text-2xl font-headline-lg font-bold hover:underline hover:drop-shadow-[0_0_10px_rgba(255,149,0,0.7)] transition-all duration-150 block mb-6 break-all"
            href="mailto:mohapatraabhishek183@gmail.com"
          >
            Open a Conversation
          </a>
          <div className="text-on-surface-variant opacity-60 text-xs md:text-sm">
            © {new Date().getFullYear()} Abhishek Mohapatra — Built with purpose.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
