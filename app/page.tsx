"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import TechAndCerts from "@/components/tech";
import Contact from "@/components/contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechAndCerts />
      <Contact />
      <Footer />
    </main>
  );
}
