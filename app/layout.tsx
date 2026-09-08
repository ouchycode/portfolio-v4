import type { Metadata } from "next";
import { Silkscreen, Azeret_Mono, Unbounded } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LoadingProvider } from "@/context/LoadingContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeColorProvider } from "@/context/ThemeColorContext";
import Navbar from "@/components/ui/Navbar";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { RevealObserver } from "@/components/ui/RevealObserver";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const pixelFont = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const monoFont = Azeret_Mono({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body-set",
  display: "swap",
});

const displayFont = Unbounded({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display-set",
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
  authors: [{ name: "Kevin Ardiansyah", url: "https://portfolio-bykevin.vercel.app/" }],
  creator: "Kevin Ardiansyah",
  openGraph: {
    title: "Kevin Ardiansyah | Software Engineer",
    description:
      "Explore the selected works and career journey of Kevin Ardiansyah, a Software Engineer based in Tangerang, Indonesia.",
    url: "https://portfolio-bykevin.vercel.app/",
    siteName: "Kevin Ardiansyah Portfolio",
    images: [
      {
        url: "/profile_kevin.png",
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
    images: ["/profile_kevin.png"],
    creator: "@ouchycode",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${pixelFont.variable} ${monoFont.variable} ${displayFont.variable} min-h-screen bg-desktop text-ink`}
      >
        <LanguageProvider>
          <LoadingProvider>
            <ThemeColorProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <NextTopLoader
                  color="#37ff9b"
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  crawl={true}
                  showSpinner={false}
                  easing="ease"
                  speed={200}
                  shadow="0 0 10px #37ff9b,0 0 5px #22c7a9"
                />
                {/* Retro scanline grid overlay (drifts slowly like the reference desktop) */}
                <div
                  aria-hidden="true"
                  className="vt-grid fixed inset-0 z-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #7c5cff 1px, transparent 1px), linear-gradient(to bottom, #7c5cff 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                    opacity: 0.05,
                    maskImage:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
                  }}
                />

                {/* CRT film grain overlay (matches vintec .vt-grain) */}
                <div aria-hidden="true" className="vt-grain" />

                <RevealObserver />
                <CommandMenu />
                <Navbar />

                {children}

                <Analytics />
                <SpeedInsights />
              </ThemeProvider>
            </ThemeColorProvider>
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}