import { FolderGit2, ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectsHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  onSlide: (dir: "left" | "right") => void;
  onNavEnter: () => void;
  onNavLeave: () => void;
}

export function ProjectsHeader({
  badge,
  title,
  subtitle,
  onSlide,
  onNavEnter,
  onNavLeave,
}: ProjectsHeaderProps) {
  return (
    <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8">
      <div
        data-vt="open"
        className="rv-window lg:mr-auto lg:max-w-3xl"
      >
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none">
            projects.exe — File Explorer
          </span>
          <span className="ml-auto flex items-center gap-1 select-none">
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        <div className="rv-panel p-5 sm:p-7 md:p-8 relative">
          <div className="flex flex-col gap-2.5 lg:pr-44">
            <span
              data-aos="fade-right"
              data-aos-delay="100"
              className="rv-pixel inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-vtpink"
            >
              <FolderGit2 size={14} strokeWidth={2.4} />
              {badge}
            </span>

            <h2
              data-aos="fade-right"
              data-aos-delay="150"
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-ink"
              style={{ fontFamily: "var(--vt-font-display)" }}
            >
              {title}
            </h2>

            <p
              data-aos="fade-right"
              data-aos-delay="250"
              className="text-sm md:text-base text-ink-soft mt-1 max-w-[52ch] leading-relaxed"
            >
              {subtitle}
            </p>
          </div>

          {/* Nav arrows — desktop only */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="hidden lg:flex gap-2.5 shrink-0 absolute right-7 md:right-8 top-1/2 -translate-y-1/2"
          >
            {(["left", "right"] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => onSlide(dir)}
                onMouseEnter={onNavEnter}
                onMouseLeave={onNavLeave}
                aria-label={dir === "left" ? "Previous" : "Next"}
                className="rv-btn rv-pixel flex items-center justify-center w-11 h-11"
              >
                {dir === "left" ? (
                  <ArrowLeft size={18} className="relative z-10" strokeWidth={2.4} />
                ) : (
                  <ArrowRight size={18} className="relative z-10" strokeWidth={2.4} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}