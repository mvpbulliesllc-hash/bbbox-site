"use client";

import { useRouter } from "next/navigation";
import { LiquidMetalButton } from "./liquid-metal-button";
import { Pill } from "./pill";

export function LitterSection() {
  const router = useRouter();
  return (
    <section id="litters" className="relative z-10 bg-black py-24 sm:py-32 text-center">
      <div className="container">
        <Pill className="mb-8">BREEDING COMING UP</Pill>
        <h2 className="font-sentient text-5xl sm:text-6xl md:text-7xl">
          <span className="text-chrome">BRONX</span>{" "}
          <span className="text-gold italic font-light">x</span>{" "}
          <span className="text-chrome">XENA</span>
        </h2>
        <div className="gold-divider max-w-[560px] mx-auto mt-8" />
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[520px] mx-auto">
          A powerful pairing of structure, drive, and legacy. This litter is
          expected to set a new standard.
        </p>
        <div className="mt-12 flex justify-center">
          <LiquidMetalButton
            label="[LEARN MORE]"
            width={170}
            onClick={() => router.push("/#contact")}
          />
        </div>
      </div>
    </section>
  );
}
