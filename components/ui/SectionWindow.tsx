interface SectionWindowProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle?: string;
  file: string;
}

export function SectionWindow({
  icon,
  label,
  title,
  subtitle,
  file,
}: SectionWindowProps) {
  return (
    <div data-vt="open" className="rv-window w-full max-w-3xl mx-auto">
      <div className="rv-titlebar">
        <span className="rv-titlebar-label select-none">{file}</span>
        <span className="ml-auto flex items-center gap-1 select-none">
          <span className="rv-titlebar-btn text-[8px]">─</span>
          <span className="rv-titlebar-btn text-[8px]">□</span>
          <span className="rv-titlebar-btn text-[9px]">×</span>
        </span>
      </div>

      <div className="rv-panel p-5 sm:p-7 md:p-8 flex flex-col gap-2.5">
        <span
          data-aos="fade-right"
          data-aos-delay="100"
          className="rv-pixel inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-vtpink"
        >
          {icon}
          {label}
        </span>

        <h2
          data-aos="fade-right"
          data-aos-delay="150"
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-ink"
          style={{ fontFamily: "var(--vt-font-display)" }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            data-aos="fade-right"
            data-aos-delay="250"
            className="text-sm md:text-base text-ink-soft mt-1 max-w-[52ch]"
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}