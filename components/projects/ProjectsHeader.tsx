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
    <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-3 md:gap-4 px-6 md:px-12 lg:px-20">
      <div className="project-animate inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] shadow-sm w-fit">
        <FolderGit2 size={14} className="text-[#1A73E8] dark:text-[#8AB4F8]" />
        <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
          {badge}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="project-animate flex items-end gap-4">
            <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
              {title}
            </h2>
            <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
              <span className="w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
              <div className="h-px w-16 bg-linear-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
            </div>
          </div>
          <p className="project-animate text-sm md:text-base lg:text-lg text-[#5F6368] dark:text-[#9AA0A6] mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Nav arrows — desktop only */}
        <div className="project-animate hidden md:flex gap-2.5 shrink-0 pb-1">
          {(["left", "right"] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => onSlide(dir)}
              onMouseEnter={onNavEnter}
              onMouseLeave={onNavLeave}
              className="group flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#DADCE0] dark:border-[#5F6368] bg-white dark:bg-[#303134] hover:bg-[#E8F0FE] dark:hover:bg-[#1A73E8]/15 hover:border-[#1A73E8]/30 transition-colors duration-200 active:scale-95"
              style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
            >
              {dir === "left" ? (
                <ArrowLeft
                  size={18}
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors"
                />
              ) : (
                <ArrowRight
                  size={18}
                  className="text-[#5F6368] dark:text-[#9AA0A6] group-hover:text-[#1A73E8] dark:group-hover:text-[#8AB4F8] transition-colors"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
