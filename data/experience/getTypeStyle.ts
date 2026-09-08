import { Briefcase, GraduationCap, Code, Users } from "lucide-react";

export interface TypeStyle {
  icon: React.ElementType;
  color: string;
  bgColor: string;
  accentColor: string;
}

export function getTypeStyle(type: string): TypeStyle {
  switch (type) {
    case "Education":
      return {
        icon: GraduationCap,
        color: "text-vtblue",
        bgColor: "bg-[#E2DDFF] dark:bg-vtblue/15",
        accentColor: "var(--vt-blue)",
      };
    case "Bootcamp":
      return {
        icon: Code,
        color: "text-vtteal",
        bgColor: "bg-[#DCF7F2] dark:bg-vtteal/15",
        accentColor: "var(--vt-teal)",
      };
    case "Organization":
      return {
        icon: Users,
        color: "text-vtamber",
        bgColor: "bg-[#FFF6D6] dark:bg-vtamber/15",
        accentColor: "var(--vt-amber)",
      };
    case "Internship":
      return {
        icon: Briefcase,
        color: "text-vtpink",
        bgColor: "bg-[#FFE0EF] dark:bg-vtpink/15",
        accentColor: "var(--vt-pink)",
      };
    default:
      return {
        icon: Briefcase,
        color: "text-ink-soft",
        bgColor: "bg-vtcard dark:bg-vtcard",
        accentColor: "var(--vt-ink-mute)",
      };
  }
}