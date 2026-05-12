"use client";

import { useRef } from "react";
import { useContactAnimation } from "@/hooks/useAnimations";
import { useLanguage } from "@/context/LanguageContext";
import { ContactHeader } from "./ContactHeader";
import { ContactInfo } from "./ContactInfo";
import { ContactSocial } from "./ContactSocial";
import { ContactForm } from "./ContactForm";
import { Paperclip, Star } from "lucide-react";

export default function Contact() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useContactAnimation(container);

  return (
    <section
      id="contact"
      ref={container}
      className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-24 md:py-32"
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        <ContactHeader
          badge={t.nav.contact}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          fastResponse={t.contact.fastResponse}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative items-stretch">
          {/* Decorative icons */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="absolute -top-6 right-[58%] z-20 hidden sm:block pointer-events-none"
          >
            <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] -rotate-12">
              <Paperclip className="w-5 h-5 text-[#1A73E8] dark:text-[#8AB4F8]" />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 z-20 pointer-events-none hidden sm:block"
          >
            <div className="p-3 bg-white dark:bg-[#303134] rounded-full shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] rotate-12">
              <Star className="w-5 h-5 text-[#FABB05] fill-[#FABB05]/25" />
            </div>
          </div>

          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col gap-5 z-10">
            <ContactInfo t={t} />
            <ContactSocial />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 z-10">
            <ContactForm t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
