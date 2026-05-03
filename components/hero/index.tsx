"use client";

import { useRef } from "react";
import { useHeroAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { HeroBadge } from "./HeroBadge";
import { HeroHeadline } from "./HeroHeadline";
import { HeroCTA } from "./HeroCTA";
import { HeroCards } from "./HeroCards";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();

  useHeroAnimation(container);

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(#5F6368 1px,transparent 1px),linear-gradient(90deg,#5F6368 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-20">
        {/* LEFT */}
        <div className="flex-1 flex flex-col items-start w-full max-w-2xl">
          <HeroBadge label={t.hero.greeting} />
          <HeroHeadline role={t.hero.role} />
          <p className="reveal-card text-sm md:text-base lg:text-lg text-[#5F6368] dark:text-[#9AA0A6] max-w-[40ch] md:max-w-[44ch] leading-relaxed mb-10 md:mb-12">
            {t.hero.desc}
          </p>
          <HeroCTA
            btnProject={t.hero.btnProject}
            btnResume={t.hero.btnResume}
            onResumeClick={() => startLoading(800)}
          />
        </div>

        {/* RIGHT */}
        <HeroCards
          locationLabel={t.hero.locationLabel}
          locationValue={t.hero.locationValue}
          statusLabel={t.hero.statusLabel}
          statusValue={t.hero.statusValue}
        />
      </div>
    </section>
  );
}
