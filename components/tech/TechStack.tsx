import { Cpu } from "lucide-react";
import { techStack, techGroups } from "../../data/tech/techData";

interface TechStackProps {
  badgeStack: string;
  titleStack: string;
  subtitleStack: string;
}

export function TechStack({
  badgeStack,
  titleStack,
  subtitleStack,
}: TechStackProps) {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 md:gap-10 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="tech-header inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] shadow-sm w-fit">
          <Cpu size={14} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
          <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
            {badgeStack}
          </span>
        </div>

        <div className="tech-header flex items-end gap-4">
          <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
            {titleStack}
          </h2>
          <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
            <span className="w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
            <div className="h-px flex-1 bg-linear-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
          </div>
        </div>

        <p className="tech-header text-sm md:text-base lg:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-2xl leading-relaxed">
          {subtitleStack}
        </p>
      </div>

      {/* Card */}
      <div
        className="tech-header w-full rounded-4xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 p-6 sm:p-8 md:p-10"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
        }}
      >
        <div className="flex flex-col gap-7 md:gap-8">
          {techGroups.map((group) => {
            const items = techStack.filter((t) => group.items.includes(t.name));
            return (
              <div key={group.label} className="flex flex-col gap-3">
                {/* Group label */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: group.color }}
                  />
                  <span
                    className="text-[11px] font-bold tracking-[0.12em] uppercase"
                    style={{ color: group.color, opacity: 0.85 }}
                  >
                    {group.label}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: `${group.color}20` }}
                  />
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 md:gap-2.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#202124] cursor-default"
                    >
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-4 h-4 md:w-5 md:h-5 object-contain"
                      />
                      <span className="text-xs md:text-sm font-semibold text-[#3C4043] dark:text-[#E8EAED]">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Google color bar */}
        <div className="flex gap-1 mt-7 md:mt-8 pt-5 md:pt-6 border-t border-[#F1F3F4] dark:border-[#5F6368]/30">
          {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
            <div
              key={c}
              className="h-1 flex-1 rounded-full opacity-60"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
