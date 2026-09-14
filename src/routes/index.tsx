import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { HeroBackdrop, useHeroCycle } from "@/components/site/HeroBackdrop";
import { SiteNav } from "@/components/site/SiteNav";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ContactForm } from "@/components/site/ContactForm";
import {
  profile,
  techProjects,
  designProjects,
  focusAreas,
  experience,
  education,
  skillGroups,
  certifications,
  inProgressCertifications,
} from "@/lib/site-content";


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
  const { active } = useHeroCycle();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative grain flex min-h-[100svh] items-end overflow-hidden">
        <HeroBackdrop active={active} />

        <div className="relative z-[2] mx-auto w-full max-w-[110rem] px-6 pb-20 md:px-12 md:pb-28">
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

      {/* EXPERIENCE + EDUCATION */}
      <section id="experience" className="scroll-mt-24 border-t border-border bg-secondary/25">
        <div className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-36">
          <span className="label-mono">Experience</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.9rem,5.5vw,4rem)] leading-[0.98] font-medium tracking-[-0.03em]">
            Learning in practice.
          </h2>

          <div className="mt-14 border-t border-border">
            {experience.map((e) => (
              <article
                key={e.role}
                className="group grid gap-4 border-b border-border py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="md:col-span-2">
                  <span className="label-mono">{e.index}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl leading-tight font-medium tracking-tight md:text-3xl">
                    {e.role}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
                    {e.org}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {e.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24">
            <span className="label-mono">Education</span>
            <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
              {education.map((ed) => (
                <div
                  key={ed.degree}
                  className="bg-background/70 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-background md:p-10"
                >
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">
                    {ed.period}
                  </p>
                  <h3 className="mt-6 text-lg leading-snug font-medium tracking-tight md:text-2xl">
                    {ed.degree}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{ed.school}</p>
                  <p className="mt-6 font-mono text-xs tracking-[0.16em] uppercase text-foreground">
                    {ed.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-36">
          <span className="label-mono">Skills</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.9rem,5.5vw,4rem)] leading-[0.98] font-medium tracking-[-0.03em]">
            Three toolkits,
            <br />
            one practice.
          </h2>

          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="bg-background p-8 md:p-12">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-primary">{g.index}</span>
                  <h3 className="font-mono text-xs tracking-[0.22em] uppercase text-foreground md:text-sm">
                    {g.title}
                  </h3>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/60 hover:text-foreground md:text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="credentials" className="scroll-mt-24 border-t border-border bg-secondary/25">
        <div className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-36">
          <span className="label-mono">Certifications</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.9rem,5.5vw,4rem)] leading-[0.98] font-medium tracking-[-0.03em]">
            Completed &amp; in progress.
          </h2>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px border border-border bg-border p-px">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="group flex aspect-square flex-col justify-between bg-background p-4 transition-colors duration-500 hover:bg-secondary/40 md:p-6"
              >
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary">
                    Completed
                  </span>
                  <h3 className="mt-3 text-xs leading-snug font-medium tracking-tight md:mt-4 md:text-base">
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                  </h3>
                  <p className="mt-1.5 text-[10px] text-muted-foreground md:mt-2 md:text-xs">{c.issuer}</p>
                </div>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 self-start font-mono text-[9px] tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-primary md:text-[10px]"
                  >
                    View credential
                    <ArrowUpRight className="size-3 md:size-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <span className="label-mono">Currently preparing</span>
            <ul className="mt-6 flex flex-wrap gap-3">
              {inProgressCertifications.map((c) => (
                <li
                  key={c.name}
                  className="rounded-full border border-dashed border-primary/50 bg-background/60 px-5 py-3 text-sm text-foreground backdrop-blur-sm"
                >
                  {c.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-40">
          <span className="label-mono">Open for opportunities</span>
          <h2 className="mt-6 max-w-4xl text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-[-0.04em]">
            Let&rsquo;s <span className="text-primary">connect.</span>
          </h2>

          <div className="mt-14 grid gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <ContactForm />
            </div>

            <div className="flex flex-col gap-4 md:col-span-5 md:items-end">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-lg transition-colors hover:border-primary hover:text-primary md:text-2xl"
              >
                LinkedIn
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-lg transition-colors hover:border-primary hover:text-primary md:text-2xl"
              >
                GitHub
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
            </div>
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
