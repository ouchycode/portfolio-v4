import type { CSSProperties } from "react";

interface HeroHeadlineProps {
  role: string;
}

const rise = (delay: string) => ({ "--vt-delay": delay } as CSSProperties);

export function HeroHeadline({ role }: HeroHeadlineProps) {
  return (
    <>
      <h1
        className="mb-6 leading-[1.02]"
        style={{ fontFamily: "var(--vt-font-display)", fontWeight: 700 }}
      >
        <span className="block overflow-hidden">
          <span
            className="vt-rise-word block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-ink"
            style={rise("130ms")}
          >
            Software
          </span>
        </span>
        <span className="block overflow-hidden">
          <span
            className="vt-rise-word vt-glitch block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            style={{
              ...rise("240ms"),
              background:
                "linear-gradient(90deg, var(--vt-pink) 0%, var(--vt-violet) 45%, var(--vt-blue) 70%, var(--vt-crt) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {role}
          </span>
        </span>
      </h1>

      {/* CRT divider */}
      <div className="flex items-center gap-3 mb-6 md:mb-8 w-full max-w-xs md:max-w-md">
        <span className="w-2 h-2 bg-vtpink" />
        <div className="h-1 flex-1 bg-repeating-linear-gradient-to-r from-inkmute/60 to-inkmute/60 bg-[length:6px_10px]" />
        <span className="w-2 h-2 bg-vtcrt vt-blink" />
      </div>
    </>
  );
}