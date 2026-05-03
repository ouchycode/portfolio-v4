import { MapPin, Laptop, Zap, Palette } from "lucide-react";
import { InfoCard } from "./InfoCard";

interface HeroCardsProps {
  locationLabel: string;
  locationValue: string;
  statusLabel: string;
  statusValue: string;
}

export function HeroCards({
  locationLabel,
  locationValue,
  statusLabel,
  statusValue,
}: HeroCardsProps) {
  return (
    <div className="relative w-full max-w-sm lg:w-100 flex flex-col gap-3 md:gap-4 shrink-0 mt-8 lg:mt-0 px-4 sm:px-0">
      {/* Decorative icons — hidden on mobile to keep it clean */}
      <div className="reveal-card absolute -top-10 -left-4 sm:-top-14 sm:-left-10 z-20 pointer-events-none select-none hidden sm:block">
        <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] -rotate-12">
          <Laptop className="w-5 h-5 text-[#1A73E8] dark:text-[#8AB4F8]" />
        </div>
      </div>

      <div className="reveal-card absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-8 z-20 pointer-events-none select-none hidden sm:block">
        <div className="p-3 bg-white dark:bg-[#303134] rounded-full shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] rotate-12">
          <Zap className="w-5 h-5 text-[#FABB05] fill-[#FABB05]/25" />
        </div>
      </div>

      <div className="reveal-card absolute top-[38%] -right-4 sm:-right-12 z-0 hidden sm:block pointer-events-none select-none">
        <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] rotate-12">
          <Palette className="w-4 h-4 text-[#EA4335] dark:text-[#F28B82]" />
        </div>
      </div>

      {/* Card 1 — Location */}
      <InfoCard
        icon={<MapPin size={20} strokeWidth={2} />}
        iconBg="bg-[#FCE8E6] dark:bg-[#F28B82]/10"
        iconColor="text-[#EA4335] dark:text-[#F28B82]"
        accentColor="from-[#EA4335]/30"
        label={locationLabel}
        value={locationValue}
      />

      {/* Card 2 — Status */}
      <InfoCard
        icon={
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-50" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34A853]" />
          </div>
        }
        iconBg="bg-[#E6F4EA] dark:bg-[#81C995]/10"
        iconColor="text-[#34A853] dark:text-[#81C995]"
        accentColor="from-[#34A853]/30"
        label={statusLabel}
        value={statusValue}
      />

      {/* Card 3 — Skill chips */}
      <div className="reveal-card">
        <div className="flex flex-wrap items-center gap-2 p-4 md:p-5 rounded-2xl md:rounded-3xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 shadow-sm">
          {[
            { label: "React", color: "#61DAFB", bg: "#E8F8FD" },
            { label: "Next.js", color: "#202124", bg: "#F1F3F4" },
            { label: "TypeScript", color: "#3178C6", bg: "#E8F0FD" },
            { label: "Tailwind", color: "#06B6D4", bg: "#E0F7FA" },
            { label: "Figma", color: "#F24E1E", bg: "#FEE8E4" },
          ].map(({ label, color, bg }) => (
            <span
              key={label}
              className="inline-flex items-center h-6 md:h-7 px-2.5 md:px-3 rounded-full text-[11px] md:text-xs font-semibold"
              style={{ color, background: bg }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
