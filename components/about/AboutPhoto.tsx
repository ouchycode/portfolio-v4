import Image from "next/image";
import { Camera, Gamepad2 } from "lucide-react";

export function AboutPhoto() {
  return (
    <div className="relative flex flex-col justify-center w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto px-4 sm:px-0">
      {/* Decorative icon — Camera */}
      <div
        data-aos="zoom-in-right"
        data-aos-delay="200"
        className="absolute -top-6 -left-2 sm:-top-8 sm:-left-6 z-20 pointer-events-none hidden sm:block"
      >
        <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] -rotate-12">
          <Camera className="w-5 h-5 text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]" />
        </div>
      </div>

      {/* Decorative icon — Gamepad */}
      <div
        data-aos="zoom-in-left"
        data-aos-delay="400"
        className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 z-20 pointer-events-none"
      >
        <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] rotate-12">
          <Gamepad2 className="w-5 h-5 text-[#EA4335] dark:text-[#F28B82]" />
        </div>
      </div>

      {/* Photo card */}
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        className="relative w-full aspect-square sm:aspect-4/5 z-10"
      >
        <div
          className="relative w-full h-full rounded-4xl md:rounded-[2.5rem] overflow-hidden"
          style={{
            boxShadow:
              "0 1px 3px rgba(60,64,67,.10), 0 8px 24px rgba(60,64,67,.10)",
            border: "1px solid rgba(218,220,224,0.6)",
          }}
        >
          <Image
            src="/profile_kevin_hd.png"
            alt="Kevin Ardiansyah"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#202124]/75 via-[#202124]/10 to-transparent" />

          {/* Bottom info strip */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-5 py-4 md:px-6 md:py-5 flex items-end justify-between">
            <div>
              <p className="text-white/60 text-[11px] font-semibold tracking-[0.12em] uppercase mb-0.5">
                Portfolio
              </p>
              <p className="text-white font-bold text-base md:text-lg leading-tight tracking-tight">
                Kevin Ardiansyah
              </p>
            </div>
            {/* Google brand dots */}
            <div className="flex gap-1.5 items-center pb-1">
              {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
                <span
                  key={c}
                  className="w-2 h-2 rounded-full opacity-90"
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
