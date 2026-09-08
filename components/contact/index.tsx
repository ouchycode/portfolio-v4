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
      className="relative overflow-hidden px-4 md:px-8 py-16 md:py-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        <ContactHeader
          badge={t.nav.contact}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          fastResponse={t.contact.fastResponse}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative items-stretch">
          {/* Decorative desktop icons */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="absolute -top-6 right-[58%] z-20 hidden sm:block pointer-events-none -rotate-12"
          >
            <div className="rv-chip w-12 h-12 flex flex-col items-center justify-center bg-chrome">
              <Paperclip className="w-5 h-5 text-vtblue" strokeWidth={2.2} />
              <span className="rv-pixel text-[8px] uppercase mt-0.5 text-ink">
                attach
              </span>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 z-20 pointer-events-none hidden sm:block rotate-12"
          >
            <div className="rv-chip w-12 h-12 flex flex-col items-center justify-center bg-chrome">
              <Star className="w-5 h-5 text-vtamber" strokeWidth={2} />
              <span className="rv-pixel text-[8px] uppercase mt-0.5 text-ink">
                fave
              </span>
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