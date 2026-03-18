import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LoadingProvider } from "@/context/LoadingContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
        className={`
          ${inter.variable} font-sans antialiased
          bg-[#F8F9FA] text-[#202124]
          dark:bg-[#202124] dark:text-[#E8EAED]
          transition-colors duration-500
        `}
      >
        {/* Bungkus dengan LoadingProvider agar state loading bisa diakses di semua Modal */}
        <LoadingProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* ── BACKGROUND GRID (Google Blue Theme) ───────────────────────── */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
              <div
                className="
                  absolute inset-0 
                  bg-[linear-gradient(to_right,rgba(26,115,232,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,115,232,0.08)_1px,transparent_1px)] 
                  dark:bg-[linear-gradient(to_right,rgba(138,180,248,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(138,180,248,0.05)_1px,transparent_1px)]
                "
                style={{
                  backgroundSize: "40px 40px",
                  maskImage:
                    "radial-gradient(ellipse_at_center, black, transparent 80%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse_at_center, black, transparent 80%)",
                }}
              />
            </div>

            {/* ── MAIN WRAPPER ───────────────────────────────────────── */}
            <div id="smooth-wrapper" className="relative z-10">
              <div id="smooth-content">{children}</div>
            </div>

            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
