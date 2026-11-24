import type { Metadata } from "next";
import {
  Silkscreen,
  Azeret_Mono,
  Unbounded,
  JetBrains_Mono,
} from "next/font/google";
import { LoadingProvider } from "@/context/LoadingContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { VintecOSProvider } from "@/context/VintecOSContext";
import { VintecShell } from "@/components/vintec/VintecShell";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { TerminalEasterEgg } from "@/components/ui/TerminalEasterEgg";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const pixelFont = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel-set",
  display: "swap",
});

const bodyMonoFont = Azeret_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body-set",
  display: "swap",
});

const displayFont = Unbounded({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display-set",
  display: "swap",
});

const codeMonoFont = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono-set",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-bykevin.vercel.app/"),
  title: {
    template: "%s | Kevin Ardiansyah",
    default: "Kevin Ardiansyah | Software Engineer",
  },
  description:
    "Portfolio of Kevin Ardiansyah, a Software Engineer based in Tangerang, ID. Skilled in web development, DevOps, and IT support with clean, scalable code.",
  keywords: [
    "Kevin Ardiansyah",
    "Software Engineer",
    "Web Developer",
    "DevOps",
    "IT Support",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
    "Tangerang",
  ],
  authors: [
    { name: "Kevin Ardiansyah", url: "https://portfolio-bykevin.vercel.app/" },
  ],
  creator: "Kevin Ardiansyah",
  openGraph: {
    title: "Kevin Ardiansyah | Software Engineer",
    description:
      "Explore the selected works and career journey of Kevin Ardiansyah, a Software Engineer based in Tangerang, Indonesia.",
    url: "https://portfolio-bykevin.vercel.app/",
    siteName: "Kevin Ardiansyah Portfolio",
    images: [
      {
        url: "/profile_kevin_hd.png",
        width: 1200,
        height: 630,
        alt: "Kevin Ardiansyah - Software Engineer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Ardiansyah | Software Engineer",
    description:
      "Explore the selected works and career journey of Kevin Ardiansyah.",
    images: ["/profile_kevin_hd.png"],
    creator: "@ouchycode",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-theme="win31" suppressHydrationWarning>
      <body
        className={`${pixelFont.variable} ${bodyMonoFont.variable} ${displayFont.variable} ${codeMonoFont.variable}`}
      >
        <LanguageProvider>
          <LoadingProvider>
            <VintecOSProvider>
              <NextTopLoader
                color="#000080"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
              />
              <VintecShell>
                {children}
              </VintecShell>
              <CommandMenu />
              <TerminalEasterEgg />
              <Analytics />
              <SpeedInsights />
            </VintecOSProvider>
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
