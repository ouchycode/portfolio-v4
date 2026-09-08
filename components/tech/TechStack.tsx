import { Cpu } from "lucide-react";
import Image from "next/image";
import { techStack, techGroups } from "../../data/tech/techData";
import { SectionWindow } from "@/components/ui/SectionWindow";

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
    <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 md:gap-14 px-4 md:px-8">
      {/* Header */}
      <SectionWindow
        icon={<Cpu size={14} strokeWidth={2.4} />}
        label={badgeStack}
        title={titleStack}
        subtitle={subtitleStack}
        file="devices.exe — Device Manager"
      />

      {/* Card */}
      <div data-vt="open" className="rv-window w-full">
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none">
            C:\Stack\inventory.dll
          </span>
          <span className="ml-auto flex items-center gap-1 select-none">
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        <div className="rv-panel p-5 sm:p-7 md:p-9">
          <div className="flex flex-col gap-7 md:gap-8">
            {techGroups.map((group) => {
              const items = techStack.filter((t) => group.items.includes(t.name));
              return (
                <div key={group.label} className="flex flex-col gap-3">
                  {/* Group label */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 shrink-0 rv-sunken"
                      style={{ background: group.color }}
                    />
                    <span
                      className="rv-pixel text-[11px] font-bold tracking-[0.18em] uppercase"
                      style={{ color: group.color }}
                    >
                      {group.label}
                    </span>
                    <div
                      className="h-px flex-1 rv-sunken"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, " +
                          group.color +
                          " 0 6px, transparent 6px 12px)",
                        opacity: 0.5,
                      }}
                    />
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 md:gap-2.5">
                    {items.map((tech) => (
                      <div
                        key={tech.name}
                        className="rv-chip rv-pixel flex items-center gap-2 md:gap-2.5 px-3 md:px-3.5 py-1.5 md:py-2 bg-vtcard text-ink"
                      >
                        <Image
                          src={tech.image}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className="w-4 h-4 md:w-5 md:h-5 object-contain"
                        />
                        <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-wide">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Retro color bar */}
          <div className="flex gap-1 mt-7 md:mt-8 pt-5 md:pt-6 border-t border-inkmute/40">
            {["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"].map((c) => (
              <div
                key={c}
                className="h-1.5 flex-1 rv-sunken"
                style={{ background: c, opacity: 0.75 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}