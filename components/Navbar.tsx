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

        const sectionTop = section.offsetTop - offset;

        if (scrollY >= sectionTop) {
          current = link.href;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="
        pointer-events-auto
        flex items-center gap-1 md:gap-2
        p-2 rounded-full
        border border-zinc-200/80 dark:border-zinc-800/80
        bg-white/70 dark:bg-[#121212]/70
        backdrop-blur-xl
        shadow-2xl shadow-zinc-800/10 dark:shadow-black/50
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
              className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full outline-none"
              aria-label={link.label}
            >
              {/* SLIDING ACTIVE INDICATOR (Framer Motion Magic) */}
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/30"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {/* ICON */}
              <motion.div
                whileHover={{ scale: isActive ? 1 : 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`
                relative z-10 transition-colors duration-300
                ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white"
                }
                `}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>

              {/* TOOLTIP (Muncul di hover, hidden di mobile) */}
              <div className="absolute top-full mt-3 px-3 py-1.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-300 shadow-xl hidden md:block whitespace-nowrap">
                {link.label}
                {/* Segitiga panah tooltip */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-zinc-900 dark:border-b-white"></div>
              </div>
            </a>
          );
        })}

        {/* Separator */}
        <div className="w-[1px] h-8 bg-zinc-200 dark:bg-zinc-800 mx-1 rounded-full"></div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
          group relative
          w-10 h-10 md:w-12 md:h-12
          flex items-center justify-center
          rounded-full outline-none
          text-zinc-500 dark:text-zinc-400
          hover:text-zinc-900 dark:hover:text-white
          transition-colors duration-300
          "
          aria-label="Toggle Theme"
        >
          {/* Subtle Hover Background untuk Theme Toggle */}
          <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: theme === "dark" ? -15 : 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative z-10"
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={2} />
            ) : (
              <Moon size={18} strokeWidth={2} />
            )}
          </motion.div>

          {/* TOOLTIP THEME */}
          <div className="absolute top-full mt-3 px-3 py-1.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-300 shadow-xl hidden md:block whitespace-nowrap">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-zinc-900 dark:border-b-white"></div>
          </div>
        </button>
      </motion.div>
    </nav>
  );
}
