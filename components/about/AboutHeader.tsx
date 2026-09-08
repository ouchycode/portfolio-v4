import { User } from "lucide-react";
import { SectionWindow } from "@/components/ui/SectionWindow";

interface AboutHeaderProps {
  label: string;
  title: string;
}

export function AboutHeader({ label, title }: AboutHeaderProps) {
  return (
    <SectionWindow
      icon={<User size={14} strokeWidth={2.4} />}
      label={label}
      title={title}
      file="about.txt — Notepad"
    />
  );
}