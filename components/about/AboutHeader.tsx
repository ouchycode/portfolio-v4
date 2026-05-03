import { User } from "lucide-react";

interface AboutHeaderProps {
  label: string;
  title: string;
}

export function AboutHeader({ label, title }: AboutHeaderProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-4 mb-2 md:mb-4">
      <div className="about-animate inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] shadow-sm w-fit">
        <User size={14} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
        <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
          {label}
        </span>
      </div>

      <div className="about-animate flex items-end gap-4">
        <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
          {title}
        </h2>
        <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
          <span className="w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
          <div className="h-px flex-1 bg-linear-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
        </div>
      </div>
    </div>
  );
}
