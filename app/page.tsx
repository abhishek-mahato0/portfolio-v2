"use client";

import { useState } from "react";
import { useReveal } from "@/lib/hooks";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false);
  useReveal();

  return (
    <>
      <Loader />
      <Nav onOpenCmd={() => setCmdOpen(true)} />
      <Hero />
      <Marquee />
      <Work />
      <Experience />
      <Services />
      <Packages />
      <Writing />
      <Contact />
      <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
    </>
  );
}
