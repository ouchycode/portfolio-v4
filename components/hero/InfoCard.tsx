interface InfoCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  label: string;
  value: string;
}

export function InfoCard({
  icon,
  iconBg,
  iconColor,
  accentColor,
  label,
  value,
}: InfoCardProps) {
  return (
    <div className="reveal-card rv-chip flex items-center gap-4 p-4">
      <div
        className={`w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center rv-sunken ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <p className="rv-pixel text-[10px] uppercase tracking-widest text-inkmute">
          {label}
        </p>
        <p className="font-bold text-sm md:text-base text-ink truncate">
          {value}
        </p>
      </div>
      <span
        aria-hidden
        className={`ml-auto w-1 h-8 shrink-0 rv-sunken bg-linear-to-b ${accentColor} to-transparent`}
      />
    </div>
  );
}