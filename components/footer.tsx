import Link from "next/link";

const links = ["Studs", "Females", "Litters", "Gallery", "Contact"];

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-black pt-16 pb-10 text-center">
      <div className="container">
        <p className="font-sentient text-2xl sm:text-3xl text-chrome tracking-wide">
          MVP BUILT BULLIES
        </p>
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="uppercase font-mono text-sm text-foreground/60 hover:text-gold duration-150 transition-colors ease-out"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="gold-divider max-w-[720px] mx-auto mt-10" />
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mt-8">
          © 2026 MVP Built Bullies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
