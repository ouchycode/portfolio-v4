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
    <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
        pointer-events-auto
        flex items-center gap-1 md:gap-2
        p-1.5 md:p-2 rounded-md
        border-2 md:border-4 border-zinc-900 dark:border-zinc-100
        bg-white dark:bg-zinc-900
        shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] dark:shadow-[5px_5px_0px_0px_rgba(228,228,231,1)]
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
              className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 outline-none transition-transform active:scale-95"
              aria-label={link.label}
            >
              {/* SQUARE ACTIVE INDICATOR - Neo Brutalist Style */}
              {isActive && (
                <motion.div
                  layoutId="active-nav-square"
                  className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 rounded-sm border-2 border-zinc-900 dark:border-zinc-100 shadow-[2px_2px_0_0_#18181b] dark:shadow-[2px_2px_0_0_#000]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              {/* ICON */}
              <motion.div
                className={`
                relative z-10 transition-colors duration-200
                ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:-translate-y-0.5"
                }
                `}
              >
                <Icon
                  size={isActive ? 20 : 18}
                  strokeWidth={isActive ? 3 : 2.5}
                />
              </motion.div>

              {/* TOOLTIP PIXEL STYLE - Hard Shadow */}
              <div className="absolute top-full mt-4 px-3 py-1.5 rounded-sm bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-pixel text-[8px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-200 border-2 border-zinc-900 dark:border-zinc-100 shadow-[3px_3px_0_0_#000] dark:shadow-[3px_3px_0_0_#e4e4e7] hidden md:block whitespace-nowrap z-50">
                {link.label}
              </div>
            </a>
          );
        })}

        {/* Pixel Separator */}
        <div className="w-[3px] h-8 bg-zinc-900 dark:bg-zinc-100 mx-1 rounded-full opacity-20"></div>

        {/* Theme Toggle Retro Button - Yellow Pop */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
          group relative
          w-10 h-10 md:w-12 md:h-12
          flex items-center justify-center
          rounded-sm outline-none
          text-zinc-500 dark:text-zinc-400
          hover:text-zinc-900 dark:hover:text-zinc-900
          hover:bg-yellow-300 dark:hover:bg-yellow-400
          hover:border-2 hover:border-zinc-900 dark:hover:border-zinc-900
          transition-all duration-200
          active:scale-95
          "
          aria-label="Toggle Theme"
        >
          <motion.div
            animate={{ rotate: theme === "dark" ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative z-10"
          >
            {theme === "dark" ? (
              <Sun
                size={18}
                strokeWidth={2.5}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            ) : (
              <Moon
                size={18}
                strokeWidth={2.5}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            )}
          </motion.div>

          {/* TOOLTIP THEME */}
          <div className="absolute top-full mt-4 px-3 py-1.5 rounded-sm bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-pixel text-[8px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-200 border-2 border-zinc-900 dark:border-zinc-100 shadow-[3px_3px_0_0_#000] dark:shadow-[3px_3px_0_0_#e4e4e7] hidden md:block whitespace-nowrap z-50">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </div>
        </button>
      </motion.div>
    </nav>
  );
}
