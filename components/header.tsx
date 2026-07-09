import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { LiquidGlassCard } from "./ui/liquid-weather-glass";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <Link href="/" className="font-mono uppercase tracking-widest text-foreground">
          MVP
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {["About", "Bullies", "Gallery", "Contact"].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="max-lg:hidden flex items-center gap-x-3">
          <LiquidGlassCard
            draggable={false}
            borderRadius="100px"
            blurIntensity="md"
            shadowIntensity="xs"
            glowIntensity="none"
            className="bg-white/5"
          >
            <Link className="uppercase inline-block px-5 py-2 transition-colors ease-out duration-150 font-mono text-foreground/60 hover:text-foreground" href="/#sign-in">
              Sign In
            </Link>
          </LiquidGlassCard>
          <LiquidGlassCard
            draggable={false}
            borderRadius="100px"
            blurIntensity="md"
            shadowIntensity="xs"
            glowIntensity="none"
            className="bg-white/5"
          >
            <a
              className="uppercase inline-block px-5 py-2 transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
              href="https://mvpbullies.site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </a>
          </LiquidGlassCard>
        </div>
        <MobileMenu />
      </header>
    </div>
  );
};
