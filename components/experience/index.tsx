"use client";

import { useRef } from "react";
import { useExperienceAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceTimeline } from "./ExperienceTimeline";

export default function Experience() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();

  useExperienceAnimation(container);

  return (
    <section
      id="experience"
      ref={container}
      className="relative overflow-hidden px-4 md:px-8 py-16 md:py-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12 md:gap-16 items-center">
        <ExperienceHeader
          badge={t.experience.badge}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />
        <ExperienceTimeline
          list={t.experience.list}
          onCardClick={() => startLoading(800)}
        />
      </div>
    </section>
  );
}