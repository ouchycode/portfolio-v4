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
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Vercel", icon: SiVercel, color: "#fff" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

function MarqueeHalf({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-x-8 pr-8"
    >
      {TECH_STACK.map((tech, idx) => {
        const Icon = tech.icon;
        return (
          <span key={idx} className="flex items-center gap-2">
            <Icon size={13} style={{ color: tech.color }} />
            <span className="text-vtcrt">{tech.name}</span>
            <span className="text-vtpink ml-2">{"//"}</span>
          </span>
        );
      })}
    </div>
  );
}

export function TechMarquee() {
  return (
    <div
      className="w-full border-2 border-vtpink bg-[#0d0d12] py-3 px-3 overflow-hidden select-none"
      style={{
        fontFamily: "var(--vt-font-chrome)",
        fontSize: "12px",
      }}
    >
      <div className="vt-marquee-track">
        <MarqueeHalf />
        <MarqueeHalf hidden />
      </div>
    </div>
  );
}