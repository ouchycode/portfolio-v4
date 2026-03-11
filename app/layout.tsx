import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// SETUP METADATA & SEO (Untuk Preview Link WhatsApp/LinkedIn)
export const metadata: Metadata = {
  title: "Kevin Ardiansyah | Frontend Engineer",
  description:
    "Portfolio of Kevin Ardiansyah, a Frontend Engineer based in Tangerang, ID. Exploring web development, UI/UX, and creating pixel-perfect digital experiences.",
  keywords: [
    "Kevin Ardiansyah",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Tangerang",
  ],
  openGraph: {
    title: "Kevin Ardiansyah | Frontend Engineer",
    description:
      "Portfolio of Kevin Ardiansyah, a Frontend Engineer based in Tangerang, ID.",
    url: "https://portfoliobykevin.vercel.app/",
    siteName: "Kevin Ardiansyah Portfolio",
    images: [
      {
        url: "/profile_kevin.png",
        width: 1200,
        height: 630,
        alt: "Kevin Ardiansyah Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Ardiansyah | Frontend Engineer",
    description:
      "Portfolio of Kevin Ardiansyah, a Frontend Engineer based in Tangerang, ID.",
    images: ["/profile_kevin.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="
        bg-[#fafafa] text-zinc-900
        dark:bg-[#0a0a0a] dark:text-zinc-50
        antialiased
        "
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
          </div>

          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
