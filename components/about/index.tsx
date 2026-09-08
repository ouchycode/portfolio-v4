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
      className="relative overflow-hidden px-4 md:px-8 py-16 md:py-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        <AboutHeader label={t.nav.about} title={t.about.title} />

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
          data-aos="zoom-in"
        >
          {/* LEFT — photo */}
          <div data-aos-delay="0" className="lg:col-span-5">
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