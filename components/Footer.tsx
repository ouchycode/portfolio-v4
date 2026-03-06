"use client";

import { useRef } from "react";
import { Github, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useFooterAnimation } from "@/hooks/useAnimations";

export default function Footer() {
  const container = useRef(null);

  useFooterAnimation(container);

  const socials = [
    { name: "Github", url: "https://github.com/ouchycode", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kevin-ardiansyah-529b96386/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kevinnardd_/",
      icon: Instagram,
    },
    {
      name: "Tiktok",
      url: "https://www.tiktok.com/@ouchycode",
      icon: FaTiktok,
    },
  ];

  return (
    <footer
      ref={container}
      className="
      px-5 py-20 md:px-16 md:py-32
      bg-white text-black
      dark:bg-[#050505] dark:text-white
      border-t border-black dark:border-white
      "
    >
      {/* CTA */}
      <div className="footer-item pb-12 md:pb-16 border-b border-black dark:border-white">
        <div className="font-mono text-[10px] uppercase tracking-widest text-indigo-500 mb-3">
          [ Open for Opportunities ]
        </div>

        <h2
          className="
          text-[12vw] sm:text-[10vw] md:text-[7vw]
          font-black uppercase
          leading-[0.9] tracking-tight
          "
        >
          Let's Connect
        </h2>
      </div>

      {/* GRID */}
      <div
        className="
        grid grid-cols-1
        md:grid-cols-12
        gap-12
        mt-12 md:mt-16
        "
      >
        {/* PROFILE */}
        <div className="footer-item md:col-span-5 md:border-r border-black dark:border-white md:pr-10">
          <h3 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tight mb-6">
            KEVIN <br /> ARDIANSYAH
          </h3>

          <div className="font-mono text-xs uppercase text-zinc-500 flex flex-col gap-1 mb-8">
            <span>// Tangerang, ID</span>
            <span>// UTC +7</span>
            <span>// Frontend Engineer</span>
          </div>

          <a
            href="mailto:kevinnardiansyahh19@gmail.com"
            className="
            group
            flex items-center justify-between
            border border-black dark:border-white
            px-5 py-4
            font-black uppercase
            hover:bg-indigo-500 hover:text-white
            transition
            "
          >
            <div className="flex items-center gap-3">
              <Mail
                size={18}
                className="text-indigo-500 group-hover:text-white transition"
              />
              Send Email
            </div>

            <ArrowUpRight
              size={20}
              className="
              text-indigo-500
              group-hover:text-white
              group-hover:translate-x-1
              group-hover:-translate-y-1
              transition
              "
            />
          </a>
        </div>

        {/* SOCIAL */}
        <div className="footer-item md:col-span-4 md:border-r border-black dark:border-white md:px-10">
          <div className="font-mono text-xs uppercase text-indigo-500 mb-6">
            Social
          </div>

          <div className="flex flex-col">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="
                  group
                  flex items-center justify-between
                  px-4 py-4
                  border-b last:border-b-0
                  border-black dark:border-white
                  hover:bg-indigo-500 hover:text-white
                  transition
                  "
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className="text-indigo-500 group-hover:text-white transition"
                    />

                    <span className="font-black uppercase">{social.name}</span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                    text-indigo-500
                    group-hover:text-white
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition
                    "
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-item md:col-span-3 flex items-end">
          <p className="font-mono text-xs uppercase text-zinc-500 leading-relaxed">
            © 2026 Kevin Ardiansyah
            <br />
            All Rights Reserved
            <br />
            <br />
            Designed & Developed
            <br />
            with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
