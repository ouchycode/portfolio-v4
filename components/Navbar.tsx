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
        p-1.5 rounded-full
        border border-zinc-200/80 dark:border-zinc-800/80
        bg-white/70 dark:bg-[#121212]/70
        backdrop-blur-xl
        shadow-lg shadow-zinc-800/5 dark:shadow-black/40
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
              className={`
              relative
              w-10 h-10 md:w-11 md:h-11
              flex items-center justify-center
              rounded-full
              transition-all duration-300
              ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white"
              }
              `}
              aria-label={link.label}
            >
              <motion.div
                whileHover={{ scale: isActive ? 1 : 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative z-10"
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>
            </a>
          );
        })}

        {/* Separator */}
        <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800 mx-1 rounded-full"></div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
          relative
          w-10 h-10 md:w-11 md:h-11
          flex items-center justify-center
          rounded-full
          text-zinc-500 dark:text-zinc-400
          hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white
          transition-all duration-300
          "
          aria-label="Toggle Theme"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={2} />
            ) : (
              <Moon size={18} strokeWidth={2} />
            )}
          </motion.div>
        </button>
      </motion.div>
    </nav>
  );
}
