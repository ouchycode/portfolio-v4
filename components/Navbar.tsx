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
    <nav className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="
        flex
        border border-black dark:border-white
        bg-white/80 dark:bg-[#050505]/80
        backdrop-blur
        shadow-lg shadow-black/10 dark:shadow-white/5
        overflow-hidden
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
  group
  relative
  w-12 h-12 md:w-11 md:h-11
  flex items-center justify-center
  border-r border-black dark:border-white
  last:border-r-0
  overflow-hidden
  transition-colors
  ${
    isActive
      ? "bg-indigo-500 text-white"
      : "text-black dark:text-white hover:text-white"
  }
  `}
            >
              {/* hover background */}
              <span
                className="
    absolute inset-0
    bg-indigo-500
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-200 ease-out
    pointer-events-none
    "
              />

              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 320 }}
                className="relative z-10"
              >
                <Icon size={20} />
              </motion.div>
            </a>
          );
        })}

        {/* theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
          group
          relative
          w-12 h-12 md:w-11 md:h-11
          flex items-center justify-center
          border-l border-black dark:border-white
          overflow-hidden
          text-black dark:text-white
          "
        >
          <span
            className="
            absolute inset-0
            bg-indigo-500
            translate-y-full
            group-hover:translate-y-0
            transition-transform duration-200 ease-out
            pointer-events-none
            "
          />

          {theme === "dark" ? (
            <Sun
              className="relative z-10 transition group-hover:text-white"
              size={20}
            />
          ) : (
            <Moon
              className="relative z-10 transition group-hover:text-white"
              size={20}
            />
          )}
        </button>
      </motion.div>
    </nav>
  );
}
