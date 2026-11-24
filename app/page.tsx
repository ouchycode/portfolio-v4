"use client";

import Hero from "@/components/hero";
import Experience from "@/components/experience";
import About from "@/components/about";
import Projects from "@/components/projects";
import { TechMonitorGrid, CertificatesWindow } from "@/components/tech";
import Contact from "@/components/contact";
import { StageController } from "@/components/vintec/StageController";

export default function Home() {
  return (
    <StageController
      rooms={[
        <Hero key="hero" />,
        <Experience key="experience" />,
        <About key="about" />,
        <Projects key="projects" />,
        <TechMonitorGrid key="tech" />,
        <CertificatesWindow key="certs" />,
        <Contact key="contact" />,
      ]}
    />
  );
}
