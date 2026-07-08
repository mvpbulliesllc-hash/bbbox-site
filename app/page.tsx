'use client'

import { Hero } from "@/components/hero";
import { VideoSection } from "@/components/video-section";
import { LitterSection } from "@/components/litter-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <LitterSection />
      <CtaSection />
      <Footer />
      <Leva hidden />
    </>
  );
}
