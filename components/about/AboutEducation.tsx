import { GraduationCap } from "lucide-react";

interface AboutEducationProps {
  label: string;
  value: string;
}

export function AboutEducation({ label, value }: AboutEducationProps) {
  return (
    <div className="about-animate w-full">
      <div
        className="w-full rounded-4xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 p-5 sm:p-7 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
        }}
      >
        <div className="w-12 h-12 md:w-14 md:h-14 flex shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] dark:bg-[#8AB4F8]/12 text-[#1A73E8] dark:text-[#8AB4F8]">
          <GraduationCap size={24} strokeWidth={2} />
        </div>

        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <p className="text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
            {label}
          </p>
          <p className="font-semibold text-sm md:text-base lg:text-lg text-[#202124] dark:text-[#E8EAED] truncate">
            {value}
          </p>
        </div>

        <span
          aria-hidden
          className="hidden sm:block ml-auto w-0.5 h-10 rounded-full shrink-0 bg-linear-to-b from-[#1A73E8]/30 to-transparent"
        />
      </div>
    </div>
  );
}
