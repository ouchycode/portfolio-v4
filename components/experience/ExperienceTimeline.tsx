import { ExperienceCard } from "./ExperienceCard";

interface ExperienceTimelineProps {
  list: any[];
  onCardClick: () => void;
}

// AOS animations per-card — alternating left/right for timeline feel
const aosAnimations = ["fade-right", "fade-left", "fade-right", "fade-left", "fade-right"];

export function ExperienceTimeline({
  list,
  onCardClick,
}: ExperienceTimelineProps) {
  return (
    <div className="relative flex flex-col gap-0 pt-2">
      {/* Vertical rail — desktop */}
      <div className="absolute left-6.75 top-0 bottom-0 w-px bg-linear-to-b from-[#DADCE0] via-[#DADCE0] to-transparent dark:from-[#5F6368]/50 dark:via-[#5F6368]/30 hidden sm:block" />

      {list.map((exp: any, index: number) => {
        const isLast = index === list.length - 1;
        const { accentColor } = { accentColor: getAccentColor(exp.type) };
        const aosAnim = aosAnimations[index % aosAnimations.length];

        return (
          <div
            key={exp.id}
            data-aos={aosAnim}
            data-aos-delay={index * 100}
            className={`relative z-10 flex gap-0 sm:gap-8 ${isLast ? "" : "mb-5 md:mb-7"}`}
          >
            {/* Timeline dot — desktop */}
            <div className="hidden sm:flex flex-col items-center shrink-0 w-14 pt-8">
              <div
                className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2 border-white dark:border-[#1c1c1e] shadow-sm shrink-0 z-10"
                style={{ background: accentColor }}
              />
            </div>

            <ExperienceCard exp={exp} onCardClick={onCardClick} />
          </div>
        );
      })}
    </div>
  );
}

function getAccentColor(type: string): string {
  const map: Record<string, string> = {
    Education: "#1A73E8",
    Bootcamp: "#34A853",
    Organization: "#FABB05",
    Internship: "#EA4335",
  };
  return map[type] ?? "#5F6368";
}
