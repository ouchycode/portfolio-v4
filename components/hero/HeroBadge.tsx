interface HeroBadgeProps {
  label: string;
}

export function HeroBadge({ label }: HeroBadgeProps) {
  return (
    <div className="rv-chip rv-pixel inline-flex items-center gap-2 px-3 py-1.5 uppercase tracking-widest text-[11px] text-vtcrt font-bold mb-6 md:mb-8">
      <span
        className="shrink-0 vt-bubble"
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "var(--vt-teal)",
        }}
      />
      {label}
    </div>
  );
}