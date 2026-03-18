"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Cpu,
  MessageSquare,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#experience", icon: GraduationCap, label: "Experience" },
  { href: "#projects", icon: Briefcase, label: "Projects" },
  { href: "#tech", icon: Cpu, label: "Tech" },
  { href: "#contact", icon: MessageSquare, label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("#");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 200;
      let current = "#";

      navLinks.forEach((link) => {
        if (link.href === "#") return;
        const section = document.querySelector<HTMLElement>(link.href);
        if (!section) return;
        if (scrollY >= section.offsetTop - offset) current = link.href;
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-5 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          pointer-events-auto
          flex items-center gap-1
          p-1.5 md:p-2
          rounded-full
          border border-[#DADCE0] dark:border-[#3C4043]
          bg-white/90 dark:bg-[#303134]/90
          backdrop-blur-md
          shadow-[0_2px_5px_0_rgba(60,64,67,0.1),0_1px_3px_1px_rgba(60,64,67,0.15)] dark:shadow-[0_2px_5px_0_rgba(0,0,0,0.5)]
          transition-colors duration-500
        "
      >
        {navLinks.map((link, i) => {
          const Icon = link.icon;
          const isActive = active === link.href;

          return (
            <a
              key={i}
              href={link.href}
              onClick={() => setActive(link.href)}
              className="group relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full outline-none transition-transform active:scale-95"
              aria-label={link.label}
            >
              {/* Active pill background (Google Blue Light) */}
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 rounded-full bg-[#E8F0FE] dark:bg-[#1A73E8]/20"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}

              {/* Hover background (non-active) */}
              {!isActive && (
                <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-[#F1F3F4] dark:group-hover:bg-[#3C4043] transition-colors duration-200" />
              )}

              {/* Icon */}
              <motion.div
                className={`relative z-10 transition-colors duration-200 ${
                  isActive
                    ? "text-[#1A73E8] dark:text-[#8AB4F8]"
                    : "text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#202124] dark:group-hover:text-[#E8EAED]"
                }`}
              >
                <Icon
                  size={isActive ? 20 : 18}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </motion.div>

              {/* Material Design Tooltip */}
              <div className="absolute top-full mt-2.5 px-2.5 py-1.5 rounded-md bg-[#202124] dark:bg-[#E8EAED] text-white dark:text-[#202124] text-[11px] font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 pointer-events-none transition-all duration-200 hidden md:block whitespace-nowrap z-50">
                {link.label}
              </div>
            </a>
          );
        })}

        {/* Separator */}
        <div className="w-px h-6 bg-[#DADCE0] dark:bg-[#5F6368] mx-1 md:mx-2" />

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="group relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full outline-none transition-transform active:scale-95"
          aria-label="Toggle Theme"
        >
          {/* Hover bg */}
          <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-[#F1F3F4] dark:group-hover:bg-[#3C4043] transition-colors duration-200" />

          <motion.div
            animate={{ rotate: theme === "dark" ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-10"
          >
            {theme === "dark" ? (
              <Sun
                size={18}
                strokeWidth={2}
                className="text-[#9AA0A6] group-hover:text-[#FBBC05] transition-colors duration-200"
              />
            ) : (
              <Moon
                size={18}
                strokeWidth={2}
                className="text-[#5F6368] group-hover:text-[#1A73E8] transition-colors duration-200"
              />
            )}
          </motion.div>

          {/* Tooltip */}
          <div className="absolute top-full mt-2.5 px-2.5 py-1.5 rounded-md bg-[#202124] dark:bg-[#E8EAED] text-white dark:text-[#202124] text-[11px] font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 pointer-events-none transition-all duration-200 hidden md:block whitespace-nowrap z-50">
            {theme === "dark" ? "Tema Terang" : "Tema Gelap"}
          </div>
        </button>
      </motion.div>
    </nav>
  );
}
