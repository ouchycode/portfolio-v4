import { Mail, MapPin } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ContactInfo({ t }: { t: Record<string, any> }) {
  return (
    <div data-vt="open" className="flex-1 rv-window">
      <div className="rv-titlebar">
        <span className="rv-titlebar-label select-none">
          addressbook.exe
        </span>
        <span className="ml-auto flex items-center gap-1 select-none">
          <span className="rv-titlebar-btn text-[8px]">─</span>
          <span className="rv-titlebar-btn text-[8px]">□</span>
          <span className="rv-titlebar-btn text-[9px]">×</span>
        </span>
      </div>

      <div className="rv-panel p-6 sm:p-8 flex flex-col justify-between h-full">
        <div>
          <h3
            className="font-bold text-xl md:text-2xl text-ink mb-3"
            style={{ fontFamily: "var(--vt-font-display)" }}
          >
            {t.contact.infoTitle}
          </h3>

          {/* Retro color bar */}
          <div className="flex gap-1 mb-5">
            {["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"].map((c) => (
              <div
                key={c}
                className="h-1.5 flex-1 rv-sunken"
                style={{ background: c, opacity: 0.75 }}
              />
            ))}
          </div>

          <p className="text-sm md:text-base text-ink-soft leading-relaxed">
            {t.contact.infoDesc}
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-7 md:mt-8">
          {/* Email */}
          <a
            href="mailto:kevinnardiansyahh19@gmail.com"
            className="group rv-chip flex items-center gap-4 p-3.5 md:p-4 bg-vtcard text-ink"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 flex shrink-0 items-center justify-center rv-raised bg-chrome text-ink group-hover:bg-vtblue group-hover:text-white transition-colors">
              <Mail size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="rv-pixel text-[10px] font-bold uppercase tracking-[0.18em] text-inkmute mb-0.5">
                Email Address
              </span>
              <span className="text-xs md:text-sm font-bold text-ink group-hover:text-vtblue transition-colors truncate">
                kevinnardiansyahh19@gmail.com
              </span>
            </div>
            <span
              aria-hidden
              className="ml-auto w-0.5 h-7 md:h-8 shrink-0 rv-sunken bg-linear-to-b from-vtpink to-transparent"
            />
          </a>

          {/* Location */}
          <div className="rv-chip flex items-center gap-4 p-3.5 md:p-4 bg-vtcard text-ink">
            <div className="w-10 h-10 md:w-11 md:h-11 flex shrink-0 items-center justify-center rv-raised bg-chrome text-vtpink">
              <MapPin size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="rv-pixel text-[10px] font-bold uppercase tracking-[0.18em] text-inkmute mb-0.5">
                Base Location
              </span>
              <span className="text-xs md:text-sm font-bold text-ink truncate">
                Tangerang, Indonesia
              </span>
            </div>
            <span
              aria-hidden
              className="ml-auto w-0.5 h-7 md:h-8 shrink-0 rv-sunken bg-linear-to-b from-vtblue to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}