import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/site-content";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#credentials", label: "Credentials" },
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
        <a href="#top" className="font-script text-[1.65rem] leading-none text-foreground md:text-[1.85rem]">
          Sabeena
        </a>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 md:gap-x-8">
          <ul className="hidden flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:flex md:gap-x-8">
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

          <div className="flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-3.5" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile (opens in a new tab)"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-3.5" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
