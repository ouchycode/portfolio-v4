import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiFirebase,
  SiVercel,
  SiGit,
} from "react-icons/si";

const TECH_STACK = [
  { name: "React", icon: SiReact, color: "#61DAFB", bg: "#E8F8FD" },
  { name: "Next.js", icon: SiNextdotjs, color: "#202124", bg: "#F1F3F4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", bg: "#E8F0FD" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", bg: "#E0F7FA" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", bg: "#FEE8E4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", bg: "#E6F4EA" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", bg: "#FFF8E1" },
  { name: "Vercel", icon: SiVercel, color: "#202124", bg: "#F1F3F4" },
  { name: "Git", icon: SiGit, color: "#F05032", bg: "#FCE8E6" },
];

// Duplicate to ensure seamless scrolling
const DUP_TECH_STACK = [...TECH_STACK, ...TECH_STACK];

export function TechMarquee() {
  return (
    <div className="w-full relative py-12 md:py-16 overflow-hidden flex items-center">
      {/* Edge Gradients for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-[#F8F9FA] dark:from-[#202124] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-[#F8F9FA] dark:from-[#202124] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {DUP_TECH_STACK.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 md:px-5 py-2.5 md:py-3 mx-2 md:mx-3 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] shadow-sm hover:scale-105 transition-transform duration-200 cursor-default shrink-0"
            >
              <div
                className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full"
                style={{ backgroundColor: tech.bg, color: tech.color }}
              >
                <Icon className="w-4 h-4 md:w-4.5 md:h-4.5" />
              </div>
              <span className="text-sm md:text-base font-bold text-[#5F6368] dark:text-[#E8EAED]">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
