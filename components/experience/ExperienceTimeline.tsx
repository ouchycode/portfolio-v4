import type { CSSProperties } from "react";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceData } from "@/types";

interface ExperienceTimelineProps {
  list: ExperienceData[];
  onCardClick: () => void;
}

const ACCENT_MAP: Record<string, string> = {
  Education: "var(--vt-blue)",
  Bootcamp: "var(--vt-teal)",
  Organization: "var(--vt-amber)",
  Internship: "var(--vt-pink)",
};

function getAccentColor(type: string): string {
  return ACCENT_MAP[type] ?? "var(--vt-ink-mute)";
}

export function ExperienceTimeline({
  list,
  onCardClick,
}: ExperienceTimelineProps) {
  return (
    <div className="relative flex flex-col gap-5 pt-2">
      {/* Vertical rail — CRT dashed line */}
      <div
        aria-hidden
        className="absolute left-6.75 top-0 bottom-0 w-[3px] hidden sm:block rv-sunken"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--vt-pink) 0 5px, transparent 5px 11px, var(--vt-crt) 11px 16px, transparent 16px 22px)",
          opacity: 0.5,
        }}
      />

      {list.map((exp: ExperienceData, index: number) => {
        const accentColor = getAccentColor(exp.type);

        return (
          <div
            key={exp.id}
            data-vt="pop"
            style={{ "--vt-delay": `${index * 90}ms` } as CSSProperties}
            className="relative z-10 flex gap-0 sm:gap-8"
          >
            {/* Timeline dot — desktop */}
            <div className="hidden sm:flex flex-col items-center shrink-0 w-14 pt-8">
              <div
                className="w-3.5 h-3.5 rv-sunken z-10 grid place-items-center"
                style={{
                  background: "var(--vt-chrome)",
                  boxShadow:
                    "inset -1px -1px 0 #5a5750, inset 1px 1px 0 #fff",
                }}
              >
                <span
                  className="w-1.5 h-1.5"
                  style={{ background: accentColor }}
                />
              </div>
            </div>

            <ExperienceCard exp={exp} onCardClick={onCardClick} />
          </div>
        );
      })}
    </div>
  );
}