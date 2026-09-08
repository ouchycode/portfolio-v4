import { Briefcase } from "lucide-react";
import { SectionWindow } from "@/components/ui/SectionWindow";

interface ExperienceHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export function ExperienceHeader({
  badge,
  title,
  subtitle,
}: ExperienceHeaderProps) {
  return (
    <SectionWindow
      icon={<Briefcase size={14} strokeWidth={2.4} />}
      label={badge}
      title={title}
      subtitle={subtitle}
      file="career.log — Journal"
    />
  );
}