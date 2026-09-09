import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site-content";

export function ProjectCard({ project, index }: { project: Project; index: string }) {
  return (
    <article className="group relative border-t border-border py-10 md:py-14">
      <div className="grid gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-2">
          <span className="label-mono">{index}</span>
        </div>

        <div className="md:col-span-7">
          <h3 className="text-2xl leading-tight font-medium tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 md:col-span-3 md:items-end">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {project.liveLabel ?? "Live"}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
          {project.note && (
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground/70">
              {project.note}
            </p>
          )}
        </div>
      </div>

      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-700 ease-out group-hover:scale-x-100" />
    </article>
  );
}
