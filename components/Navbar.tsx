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

  // detect section from scroll
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
              className="
              group
              relative
              w-12 h-12 md:w-11 md:h-11
              flex items-center justify-center
              border-r border-black dark:border-white
              last:border-r-0
              overflow-hidden
              "
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

              {/* icon */}
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 320 }}
                className="relative z-10"
              >
                <Icon
                  size={20}
                  className={`transition ${
                    isActive
                      ? "text-white"
                      : "text-indigo-500 group-hover:text-white"
                  }`}
                />
              </motion.div>

              {/* tooltip desktop */}
              <span
                className="
                absolute -bottom-8
                text-xs
                opacity-0
                group-hover:opacity-100
                transition
                pointer-events-none
                hidden md:block
                "
              >
                {link.label}
              </span>

              {/* active indicator */}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 w-full h-[2px] bg-indigo-500"
                />
              )}
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
              size={20}
              className="relative z-10 text-indigo-500 group-hover:text-white transition"
            />
          ) : (
            <Moon
              size={20}
              className="relative z-10 text-indigo-500 group-hover:text-white transition"
            />
          )}
        </button>
      </motion.div>
    </nav>
  );
}
