"use client";

import { useRef } from "react";
import { Briefcase } from "lucide-react";
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
      className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-24"
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

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">
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
