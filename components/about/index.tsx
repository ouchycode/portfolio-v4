"use client";

import { useRef } from "react";
import { useAboutAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { AboutHeader } from "./AboutHeader";
import { AboutPhoto } from "./AboutPhoto";
import { AboutDescription } from "./AboutDescription";
import { AboutEducation } from "./AboutEducation";

export default function About() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useAboutAnimation(container);

  return (
    <section
      id="about"
      ref={container}
      className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-24"
    >
      {/* Grid overlay — sama dengan Hero, satu layer CSS only */}
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        <AboutHeader label={t.nav.about} title={t.about.title} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* LEFT — photo */}
          <div className="lg:col-span-5">
            <AboutPhoto />
          </div>

          {/* RIGHT — description + education */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <AboutDescription
              tag={t.about.tag}
              headline={t.about.headline}
              description={t.about.description}
            />
            <AboutEducation label={t.about.eduLabel} value={t.about.eduValue} />
          </div>
        </div>
      </div>
    </section>
  );
}
