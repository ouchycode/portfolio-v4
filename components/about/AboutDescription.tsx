import { Code2 } from "lucide-react";

interface AboutDescriptionProps {
  tag: string;
  headline: string;
  description: string;
}

export function AboutDescription({
  tag,
  headline,
  description,
}: AboutDescriptionProps) {
  return (
    <div data-vt="open" className="flex-1 rv-window">
      <div className="rv-titlebar">
        <span className="rv-titlebar-label select-none">readme.txt — Notepad</span>
        <span className="ml-auto flex items-center gap-1 select-none">
          <span className="rv-titlebar-btn text-[8px]">─</span>
          <span className="rv-titlebar-btn text-[8px]">□</span>
          <span className="rv-titlebar-btn text-[9px]">×</span>
        </span>
      </div>

      <div className="rv-panel h-full p-6 sm:p-8 md:p-9 flex flex-col justify-center">
        {/* Role pill */}
        <div className="rv-chip inline-flex items-center gap-2 px-3.5 py-1.5 w-fit mb-6 text-ink">
          <Code2 size={15} strokeWidth={2.2} className="text-vtblue" />
          <span className="rv-pixel text-[11px] font-bold uppercase tracking-[0.12em]">
            {tag}
          </span>
        </div>

        {/* Headline */}
        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-[1.7rem] font-bold leading-[1.18] tracking-tight text-ink mb-5"
          style={{ fontFamily: "var(--vt-font-display)" }}
        >
          {headline}
        </p>

        {/* Retro color underline bar */}
        <div className="flex gap-1 mb-6 w-full max-w-xs">
          {[
            ["#FF3E9A", "flex-[2]"],
            ["#FFD400", "w-2"],
            ["#22C7A9", "flex-1"],
            ["#3B2FD6", "w-2"],
          ].map(([color, size], i) => (
            <span
              key={i}
              className={`h-1.5 rv-sunken ${size}`}
              style={{ background: color }}
            />
          ))}
        </div>

        <p className="text-sm sm:text-base md:text-[16px] text-ink-soft leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}