import { MapPin, Laptop, Zap, Palette } from "lucide-react";
import { InfoCard } from "./InfoCard";

interface HeroCardsProps {
  locationLabel: string;
  locationValue: string;
  statusLabel: string;
  statusValue: string;
}

export function HeroCards({
  locationLabel,
  locationValue,
  statusLabel,
  statusValue,
}: HeroCardsProps) {
  return (
    <div className="relative w-full max-w-sm lg:w-100 flex flex-col gap-3 md:gap-4 shrink-0 mt-8 lg:mt-0 px-4 sm:px-0">
      {/* Decorative icons */}
      <div
        data-aos="zoom-in"
        data-aos-delay="150"
        className="absolute -top-10 -left-4 sm:-top-14 sm:-left-10 z-20 pointer-events-none select-none hidden sm:block"
      >
        <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] -rotate-12">
          <Laptop className="w-5 h-5 text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]" />
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-8 z-20 pointer-events-none select-none hidden sm:block"
      >
        <div className="p-3 bg-white dark:bg-[#303134] rounded-full shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] rotate-12">
          <Zap className="w-5 h-5 text-[#FABB05] fill-[#FABB05]/25" />
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="absolute top-[38%] -right-4 sm:-right-12 z-0 hidden sm:block pointer-events-none select-none"
      >
        <div className="p-3 bg-white dark:bg-[#303134] rounded-2xl shadow-sm border border-[#F1F3F4] dark:border-[#5F6368] rotate-12">
          <Palette className="w-4 h-4 text-[#EA4335] dark:text-[#F28B82]" />
        </div>
      </div>

      {/* Card 1 — Location */}
      <div data-aos="fade-left" data-aos-delay="100">
        <InfoCard
          icon={<MapPin size={20} strokeWidth={2} />}
          iconBg="bg-[#FCE8E6] dark:bg-[#F28B82]/10"
          iconColor="text-[#EA4335] dark:text-[#F28B82]"
          accentColor="from-[#EA4335]/30"
          label={locationLabel}
          value={locationValue}
          className="rounded-tl-[2.25rem] rounded-tr-2xl rounded-bl-2xl rounded-br-[2.25rem]"
        />
      </div>

      {/* Card 2 — Status */}
      <div data-aos="fade-left" data-aos-delay="200">
        <InfoCard
          icon={
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-50" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34A853]" />
            </div>
          }
          iconBg="bg-[#E6F4EA] dark:bg-[#81C995]/10"
          iconColor="text-[#34A853] dark:text-[#81C995]"
          accentColor="from-[#34A853]/30"
          label={statusLabel}
          value={statusValue}
          className="rounded-tl-2xl rounded-tr-[2.25rem] rounded-bl-[2.25rem] rounded-br-2xl"
        />
      </div>
    </div>
  );
}
