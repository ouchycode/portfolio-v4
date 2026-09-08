import Image from "next/image";
import { Camera, Gamepad2 } from "lucide-react";

export function AboutPhoto() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto px-4 sm:px-0 py-8">
      {/* Floating desktop icon — Camera */}
      <div
        data-aos="zoom-in-right"
        data-aos-delay="200"
        className="absolute -top-2 -left-2 sm:-top-4 sm:-left-6 z-20 pointer-events-none hidden sm:block -rotate-12"
      >
        <div className="rv-chip w-12 h-12 flex flex-col items-center justify-center bg-chrome hover:bg-vtblue group transition-colors">
          <Camera
            size={20}
            className="text-vtpink group-hover:text-white transition-colors"
          />
          <span className="rv-pixel text-[8px] uppercase mt-0.5 text-ink group-hover:text-white">
            cam
          </span>
        </div>
      </div>

      {/* Floating desktop icon — Gamepad */}
      <div
        data-aos="zoom-in-left"
        data-aos-delay="400"
        className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-6 z-20 pointer-events-none rotate-12"
      >
        <div className="rv-chip w-12 h-12 flex flex-col items-center justify-center bg-chrome hover:bg-vtblue group transition-colors">
          <Gamepad2
            size={20}
            className="text-vtcrt group-hover:text-white transition-colors"
          />
          <span className="rv-pixel text-[8px] uppercase mt-0.5 text-ink group-hover:text-white">
            game
          </span>
        </div>
      </div>

      {/* Photo window */}
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        className="relative z-10 rv-window"
        data-vt="pop"
      >
        <div className="rv-titlebar">
          <span className="rv-titlebar-label select-none">
            profile.bmp — Windows Foto Viewer
          </span>
          <span className="ml-auto flex items-center gap-1 select-none">
            <span className="rv-titlebar-btn text-[8px]">─</span>
            <span className="rv-titlebar-btn text-[8px]">□</span>
            <span className="rv-titlebar-btn text-[9px]">×</span>
          </span>
        </div>

        <div className="rv-sunken p-2 bg-vtcard relative">
          <div className="relative w-full aspect-square sm:aspect-4/5 overflow-hidden">
            <Image
              src="/profile_kevin_hd.png"
              alt="Kevin Ardiansyah"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-center"
              priority
            />
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent 0 2px, rgba(16,16,26,0.18) 2px 3px)",
              }}
            />
          </div>

          {/* Bottom info strip */}
          <div className="flex items-end justify-between px-3 py-2.5 bg-paper">
            <div>
              <p className="rv-pixel text-[9px] uppercase tracking-[0.2em] text-inkmute">
                Portfolio.exe
              </p>
              <p
                className="text-base font-bold text-ink leading-tight"
                style={{ fontFamily: "var(--vt-font-display)" }}
              >
                Kevin Ardiansyah
              </p>
            </div>
            {/* Start orb dots */}
            <div className="flex gap-1.5 items-center pb-1">
              {["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"].map((c) => (
                <span
                  key={c}
                  className="w-2 h-2 shadow-[inset_0_0_0_1px_#00000044]"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}