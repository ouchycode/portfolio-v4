import type { CSSProperties } from "react";
import { MapPin, FolderOpen, FileText } from "lucide-react";

interface HeroCardsProps {
  locationLabel: string;
  locationValue: string;
}

export function HeroCards({ locationLabel, locationValue }: HeroCardsProps) {
  return (
    <div className="relative w-full max-w-md mx-auto flex flex-col gap-4 shrink-0 mt-8 lg:mt-0">
      {/* Desktop shortcuts row */}
      <div
        data-vt="pop"
        style={{ "--vt-delay": "120ms" } as CSSProperties}
        className="rv-panel p-3 flex items-center justify-center gap-5"
      >
        {[
          { icon: FolderOpen, label: "projects", color: "text-vtblue" },
          { icon: FileText, label: "resume.exe", color: "text-vtpink" },
          { icon: MapPin, label: "tangerang", color: "text-vtcrt" },
        ].map((s) => (
          <div
            key={s.label}
            title={s.label}
            className="flex flex-col items-center gap-1.5 w-16 group cursor-pointer"
          >
            <div className="rv-chip w-10 h-10 flex items-center justify-center group-hover:bg-vtblue group-hover:text-white transition-colors">
              <s.icon size={18} className={s.color} strokeWidth={2} />
            </div>
            <span className="rv-pixel text-[9px] uppercase tracking-wider text-inkmute group-hover:text-ink transition-colors truncate w-full text-center">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* CRT monitor window */}
      <div
        data-vt="open"
        style={{ "--vt-delay": "200ms" } as CSSProperties}
        className="rv-window"
      >
        <div className="rv-titlebar">
          <span className="rv-titlebar-label">MONITOR.exe</span>
          <span className="ml-auto flex items-center gap-1">
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        <div className="rv-crt p-4 font-mono text-[12px] leading-relaxed">
          <p
            className="rv-crt-glow vt-rise"
            style={{ "--vt-delay": "300ms" } as CSSProperties}
          >
            C:\Users\Kevin&gt;<span className="vt-blink">▮</span>
          </p>
          <p
            className="rv-crt-glow vt-rise"
            style={{ "--vt-delay": "420ms" } as CSSProperties}
          >
            &gt; mount profile.dat
          </p>
          <p
            className="text-vtcrt/70 vt-rise"
            style={{ "--vt-delay": "540ms" } as CSSProperties}
          >
            &gt; OK
          </p>
          <div className="my-2 h-px bg-vtcrt/30" />
          <div
            className="flex items-center gap-3 py-1 vt-rise"
            style={{ "--vt-delay": "660ms" } as CSSProperties}
          >
            <MapPin size={14} className="text-vtcrt/70 shrink-0" />
            <div>
              <p className="rv-pixel text-[9px] uppercase tracking-widest text-vtcrt/60">
                {locationLabel}
              </p>
              <p className="text-vtcrt font-bold">{locationValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}