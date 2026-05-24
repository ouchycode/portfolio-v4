import {
  BookOpen,
  Ticket,
  ShoppingCart,
  Palette,
  Globe,
  Smartphone,
} from "lucide-react";

export interface ProjectTheme {
  bg: string;
  text: string;
  accent: string;
}

export function getProjectTheme(category: string): ProjectTheme {
  if (["LMS Platform", "EdTech", "Web Application"].includes(category))
    return {
      bg: "bg-[#E8F0FE] dark:bg-[var(--google-blue)]/15",
      text: "text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]",
      accent: "#1A73E8",
    };
  if (["E-Commerce", "Mobile Application"].includes(category))
    return {
      bg: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
      text: "text-[#137333] dark:text-[#81C995]",
      accent: "#34A853",
    };
  if (["Event Management"].includes(category))
    return {
      bg: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
      text: "text-[#B06000] dark:text-[#FDE293]",
      accent: "#FABB05",
    };
  return {
    bg: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
    text: "text-[#C5221F] dark:text-[#F28B82]",
    accent: "#EA4335",
  };
}

export function getProjectIcon(category: string) {
  if (["LMS Platform", "EdTech"].includes(category)) return BookOpen;
  if (category === "Event Management") return Ticket;
  if (category === "E-Commerce") return ShoppingCart;
  if (category === "Modern Portfolio") return Palette;
  if (category === "Mobile Application") return Smartphone;
  return Globe;
}
