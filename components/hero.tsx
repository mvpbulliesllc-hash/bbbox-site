"use client";

import Image from "next/image";
import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
        <Image
          src="/mvp-logo.png"
          alt="MVP Built Bullies"
          width={1656}
          height={931}
          priority
          className="w-[min(88vw,960px)] h-auto mix-blend-screen select-none"
        />
      </div>
      <h1 className="sr-only">MVP Built Bullies</h1>

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">PREMIER AMERICAN BULLIES</Pill>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-2 max-w-[440px] mx-auto">
          Champion bloodlines. Built, not born.
        </p>

        <Link className="contents max-sm:hidden" href="/#contact">
          <Button
            className="mt-10"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Contact Us]
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="/#contact">
          <Button
            size="sm"
            className="mt-10"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Contact Us]
          </Button>
        </Link>
      </div>
    </div>
  );
}
