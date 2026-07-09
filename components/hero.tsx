"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { GL } from "./gl";
import { Pill } from "./pill";
import { LiquidMetalButton } from "./liquid-metal-button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/mvp-logo.png`}
          alt="MVP Built Bullies"
          width={1672}
          height={941}
          priority
          className="w-[min(88vw,960px)] h-auto mix-blend-screen select-none"
        />
      </div>
      <h1 className="sr-only">MVP Built Bullies</h1>

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">XL AMERICAN BULLIES</Pill>
        <p className="font-mono text-sm sm:text-base tracking-[0.25em] uppercase text-gold text-balance mt-2 max-w-[560px] mx-auto">
          Strength. Structure. Legacy.
        </p>

        <div className="mt-10 flex justify-center">
          <LiquidMetalButton
            label="[CONTACT US]"
            width={170}
            onHoverChange={setHovering}
            onClick={() => router.push("/#contact")}
          />
        </div>
      </div>
    </div>
  );
}
