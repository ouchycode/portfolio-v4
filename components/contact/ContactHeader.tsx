import { MessageSquare } from "lucide-react";

interface ContactHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  fastResponse: string;
}

export function ContactHeader({
  badge,
  title,
  subtitle,
  fastResponse,
}: ContactHeaderProps) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
      <div data-vt="open" className="rv-window max-w-3xl mx-auto">
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none">
            contact.exe — Send Message
          </span>
          <span className="ml-auto flex items-center gap-1 select-none">
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        <div className="rv-panel p-5 sm:p-7 md:p-8 relative">
          <div className="flex flex-col gap-2.5 lg:pr-48">
            <span
              data-aos="fade-right"
              data-aos-delay="100"
              className="rv-pixel inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-vtpink"
            >
              <MessageSquare size={14} strokeWidth={2.4} />
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

          {/* Fast response badge — desktop */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="hidden lg:flex shrink-0 absolute right-8 top-1/2 -translate-y-1/2"
          >
            <div className="rv-chip rv-pixel flex items-center gap-2.5 px-4 py-2.5 bg-vtcard">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex h-full w-full bg-vtcrt opacity-50 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 bg-vtcrt" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
                {fastResponse}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}