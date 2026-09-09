import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { SiteNav } from "@/components/site/SiteNav";
import { ProjectCard } from "@/components/site/ProjectCard";
import { profile, techProjects, designProjects, focusAreas } from "@/lib/site-content";

const title = "Sabeena Kachary — Cybersecurity & GRC | UI/UX | Tech";
const description =
  "Portfolio of Sabeena Kachary, a technology student working across cybersecurity, GRC and UI/UX design — security tooling, web applications and product design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative grain flex min-h-[100svh] items-end overflow-hidden">
        <HeroBackdrop />

        <div className="relative mx-auto w-full max-w-[110rem] px-6 pb-20 md:px-12 md:pb-28">
          <p className="label-mono rise-in">{profile.location} — Portfolio</p>

          <h1
            className="mt-6 text-[clamp(2.75rem,11vw,10rem)] leading-[0.88] font-medium tracking-[-0.04em] rise-in"
            style={{ animationDelay: "120ms" }}
          >
            Sabeena
            <br />
            <span className="text-primary">Kachary</span>
          </h1>

          <div
            className="mt-10 flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between rise-in"
            style={{ animationDelay: "240ms" }}
          >
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.role}
            </p>
            <a
              href="#work"
              className="inline-flex w-fit items-center gap-3 border-b border-foreground pb-1 font-mono text-xs tracking-[0.22em] uppercase transition-colors hover:border-primary hover:text-primary"
            >
              View work
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[110rem] scroll-mt-24 px-6 py-24 md:px-12 md:py-40">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="label-mono">00 — About</span>
          </div>
          <div className="md:col-span-9">
            <p className="text-2xl leading-[1.35] font-light tracking-tight text-foreground md:text-[2.6rem]">
              {profile.bio}
            </p>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Based in {profile.location}. I move between two ways of working — the analytical side of
              security and governance, and the craft side of interface and product design — and the
              projects below are grouped that way.
            </p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-[110rem] px-6 py-20 md:px-12 md:py-28">
          <span className="label-mono">Selected work</span>
          <h2 className="mt-4 text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] font-medium tracking-[-0.03em]">
            Two disciplines,
            <br />
            one way of thinking.
          </h2>
        </div>

        {/* 01 — Cybersecurity & Tech */}
        <div className="border-t border-border bg-secondary/25">
          <div className="mx-auto max-w-[110rem] px-6 py-16 md:px-12 md:py-24">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="font-mono text-sm text-primary">01</span>
              <h3 className="text-[clamp(1.75rem,5vw,3.5rem)] leading-none font-medium tracking-[-0.03em]">
                Cybersecurity &amp; Tech
              </h3>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Technical, security and development work — analysis tooling and web applications.
            </p>

            <div className="mt-12">
              {techProjects.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={`01.${i + 1}`} />
              ))}
            </div>
          </div>
        </div>

        {/* 02 — UI/UX & Design */}
        <div className="border-t border-border">
          <div className="mx-auto max-w-[110rem] px-6 py-16 md:px-12 md:py-24">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="font-mono text-sm text-primary">02</span>
              <h3 className="text-[clamp(1.75rem,5vw,3.5rem)] leading-none font-medium tracking-[-0.03em]">
                UI/UX &amp; Design
              </h3>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Interface, product and visual design work.
            </p>

            <div className="mt-12">
              {designProjects.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={`02.${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section id="focus" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-36">
          <span className="label-mono">Focus areas</span>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {focusAreas.map((f) => (
              <div key={f.index} className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary">{f.index}</span>
                <h3 className="mt-6 text-xl font-medium tracking-tight md:text-2xl">{f.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-40">
          <span className="label-mono">Contact</span>
          <h2 className="mt-6 max-w-4xl text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-[-0.04em]">
            Open to internships, collaborations and{" "}
            <span className="text-primary">good problems.</span>
          </h2>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-lg transition-colors hover:border-primary hover:text-primary md:text-2xl"
            >
              GitHub
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground/70">
              More channels coming soon
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[110rem] flex-wrap items-center justify-between gap-4 px-6 py-8 md:px-12">
          <p className="label-mono">© {new Date().getFullYear()} {profile.name}</p>
          <p className="label-mono">{profile.role}</p>
        </div>
      </footer>
    </div>
  );
}
