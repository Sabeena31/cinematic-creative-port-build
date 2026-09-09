import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#focus", label: "Focus" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[110rem] items-center justify-between px-6 py-5 md:px-12"
      >
        <a href="#top" className="font-mono text-xs tracking-[0.28em] uppercase text-foreground">
          S.Kachary
        </a>
        <ul className="flex items-center gap-6 md:gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label-mono transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
