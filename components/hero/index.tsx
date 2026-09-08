"use client";

import { useRef } from "react";
import { useHeroAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { HeroBadge } from "./HeroBadge";
import { HeroHeadline } from "./HeroHeadline";
import { HeroCTA } from "./HeroCTA";
import { HeroCards } from "./HeroCards";
import { TechMarquee } from "./TechMarquee";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();

  useHeroAnimation(container);

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* ── Main window: kevin.exe ── */}
        <div className="lg:col-span-7" data-aos="zoom-in-up" data-aos-delay="50">
          <div data-vt="open" className="rv-window bg-chrome">
            <div className="rv-titlebar">
              <span className="rv-titlebar-label select-none">
                kevin.exe — Software Engineer
              </span>
              <span className="ml-auto flex items-center gap-1 select-none">
                <span className="rv-titlebar-btn text-[8px]">─</span>
                <span className="rv-titlebar-btn text-[8px]">□</span>
                <span className="rv-titlebar-btn text-[9px]">×</span>
              </span>
            </div>

            <div className="p-5 sm:p-7 md:p-9 bg-paper">
              <HeroBadge label={t.hero.greeting} />
              <HeroHeadline role={t.hero.role} />
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sm md:text-base text-ink-soft max-w-[46ch] leading-relaxed mb-8 md:mb-10"
              >
                {t.hero.desc}
              </p>
              <HeroCTA
                btnProject={t.hero.btnProject}
                btnResume={t.hero.btnResume}
                onResumeClick={() => startLoading(800)}
              />
            </div>
          </div>
        </div>

        {/* ── Right: shortcuts + CRT monitor ── */}
        <div className="lg:col-span-5">
          <HeroCards
            locationLabel={t.hero.locationLabel}
            locationValue={t.hero.locationValue}
          />
        </div>
      </div>

      <div
        data-vt="rise"
        className="relative z-10 w-full max-w-7xl mx-auto mt-12 md:mt-16"
      >
        <TechMarquee />
      </div>
    </section>
  );
}