import { GraduationCap } from "lucide-react";

interface AboutEducationProps {
  label: string;
  value: string;
}

export function AboutEducation({ label, value }: AboutEducationProps) {
  return (
    <div data-vt="pop" className="w-full rv-window">
      <div className="rv-titlebar">
        <span className="rv-titlebar-label select-none">school.exe</span>
        <span className="ml-auto flex items-center gap-1 select-none">
          <span className="rv-titlebar-btn text-[8px]">─</span>
          <span className="rv-titlebar-btn text-[8px]">□</span>
          <span className="rv-titlebar-btn text-[9px]">×</span>
        </span>
      </div>

      <div className="rv-panel p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
        <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 flex items-center justify-center rv-raised bg-chrome text-vtblue">
          <GraduationCap size={22} strokeWidth={2} />
        </div>

        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <p className="rv-pixel text-[10px] font-bold uppercase tracking-[0.18em] text-inkmute">
            {label}
          </p>
          <p
            className="font-bold text-sm md:text-base lg:text-[17px] text-ink truncate"
            style={{ fontFamily: "var(--vt-font-display)" }}
          >
            {value}
          </p>
        </div>

        <span
          aria-hidden
          className="hidden sm:block ml-auto w-0.5 h-10 shrink-0 rv-sunken bg-linear-to-b from-vtpink to-transparent"
        />
      </div>
    </div>
  );
}