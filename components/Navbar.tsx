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
          p-1.5
          rounded-2xl
          border border-zinc-200/80 dark:border-zinc-700/60
          bg-white/70 dark:bg-zinc-900/70
          backdrop-blur-xl
          shadow-[0_8px_32px_0px_rgba(0,0,0,0.10)] dark:shadow-[0_8px_32px_0px_rgba(0,0,0,0.4)]
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
              className="group relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl outline-none transition-transform active:scale-90"
              aria-label={link.label}
            >
              {/* Active pill background */}
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 rounded-xl bg-indigo-600 dark:bg-indigo-500 shadow-[0_2px_12px_0px_rgba(99,102,241,0.35)]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}

              {/* Hover background (non-active) */}
              {!isActive && (
                <span className="absolute inset-0 rounded-xl bg-zinc-100/0 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800/70 transition-colors duration-200" />
              )}

              {/* Icon */}
              <motion.div
                className={`relative z-10 transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 group-hover:-translate-y-0.5"
                }`}
              >
                <Icon
                  size={isActive ? 18 : 17}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </motion.div>

              {/* Tooltip */}
              <div className="absolute top-full mt-3 px-3 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-[0_4px_16px_0px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_0px_rgba(0,0,0,0.4)] text-[9px] font-mono font-semibold tracking-[0.18em] uppercase text-zinc-600 dark:text-zinc-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 pointer-events-none transition-all duration-200 hidden md:block whitespace-nowrap z-50">
                {link.label}
              </div>
            </a>
          );
        })}

        {/* Separator */}
        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700 mx-0.5 rounded-full" />

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="group relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl outline-none transition-all duration-200 active:scale-90"
          aria-label="Toggle Theme"
        >
          {/* Hover bg */}
          <span className="absolute inset-0 rounded-xl bg-zinc-100/0 group-hover:bg-amber-50 dark:group-hover:bg-amber-950/30 transition-colors duration-200" />

          <motion.div
            animate={{ rotate: theme === "dark" ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-10"
          >
            {theme === "dark" ? (
              <Sun
                size={17}
                strokeWidth={2}
                className="text-zinc-400 dark:text-zinc-500 group-hover:text-amber-500 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            ) : (
              <Moon
                size={17}
                strokeWidth={2}
                className="text-zinc-400 group-hover:text-indigo-500 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            )}
          </motion.div>

          {/* Tooltip */}
          <div className="absolute top-full mt-3 px-3 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-[0_4px_16px_0px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_0px_rgba(0,0,0,0.4)] text-[9px] font-mono font-semibold tracking-[0.18em] uppercase text-zinc-600 dark:text-zinc-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 pointer-events-none transition-all duration-200 hidden md:block whitespace-nowrap z-50">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </div>
        </button>
      </motion.div>
    </nav>
  );
}
