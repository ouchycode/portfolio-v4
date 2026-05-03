"use client";

import { useRef, useState, useEffect } from "react";
import { useTechCertsAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { TechStack } from "./TechStack";
import { CertsSection } from "./CertsSection";

export default function TechAndCerts() {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { startLoading } = useLoading();
  const [isPaused, setIsPaused] = useState(false);

  useTechCertsAnimation(container);

  const infiniteCerts = [
    ...t.tech.certs,
    ...t.tech.certs,
    ...t.tech.certs,
    ...t.tech.certs,
  ];

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const gap = window.innerWidth > 768 ? 24 : 20;
    const cardWidth = window.innerWidth > 768 ? 400 : window.innerWidth * 0.85;
    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let rafId: number;
    const node = scrollRef.current;
    const loop = () => {
      if (node && !isPaused) {
        node.scrollLeft += 1;
        if (node.scrollLeft >= node.scrollWidth / 2) {
          node.scrollLeft -= node.scrollWidth / 2;
        }
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <section
      id="tech"
      ref={container}
      className="relative overflow-hidden px-0 py-24 md:py-32"
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

      <div className="relative z-10 w-full flex flex-col gap-24 md:gap-32">
        <TechStack
          badgeStack={t.tech.badgeStack}
          titleStack={t.tech.titleStack}
          subtitleStack={t.tech.subtitleStack}
        />
        <CertsSection
          scrollRef={scrollRef}
          badgeCert={t.tech.badgeCert}
          titleCert={t.tech.titleCert}
          subtitleCert={t.tech.subtitleCert}
          infiniteCerts={infiniteCerts}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          onSlide={slide}
          onCardClick={() => startLoading(800)}
        />
      </div>
    </section>
  );
}
