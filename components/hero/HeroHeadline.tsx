interface HeroHeadlineProps {
  role: string;
}

export function HeroHeadline({ role }: HeroHeadlineProps) {
  return (
    <>
      <h1 className="reveal-card mb-6 leading-[1.05] tracking-[-0.03em]">
        <span className="block text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-black text-[#202124] dark:text-[#E8EAED]">
          Frontend
        </span>
        <span
          className="block text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-black"
          style={{
            background:
              "linear-gradient(135deg,#1A73E8 0%,#4285F4 45%,#34A853 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {role}
        </span>
      </h1>

      {/* Divider */}
      <div className="reveal-card flex items-center gap-3 mb-6 md:mb-8 w-full max-w-xs md:max-w-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
        <div className="h-px flex-1 bg-linear-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
      </div>
    </>
  );
}
