import { Sparkles } from "lucide-react";

interface HeroBadgeProps {
  label: string;
}

export function HeroBadge({ label }: HeroBadgeProps) {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-delay="0"
      className="inline-flex items-center gap-2 px-4 py-2 mb-8 md:mb-10 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] shadow-sm"
    >
      <Sparkles
        size={14}
        className="text-[#1A73E8] dark:text-[#8AB4F8] shrink-0"
      />
      <span className="text-[11px] md:text-xs font-semibold tracking-widest uppercase text-[#5F6368] dark:text-[#9AA0A6]">
        {label}
      </span>
    </div>
  );
}
