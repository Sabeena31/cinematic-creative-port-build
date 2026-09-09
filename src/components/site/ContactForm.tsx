import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const ENDPOINT = "https://formsubmit.co/ajax/sabeenakachary13@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <input type="hidden" name="_subject" value="New message from your portfolio" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
        <label className="bg-background p-5">
          <span className="label-mono">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="mt-3 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/60"
            placeholder="Your name"
          />
        </label>
        <label className="bg-background p-5">
          <span className="label-mono">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-3 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/60"
            placeholder="you@example.com"
          />
        </label>
        <label className="bg-background p-5 sm:col-span-2">
          <span className="label-mono">Message</span>
          <textarea
            required
            name="message"
            rows={4}
            className="mt-3 w-full resize-none bg-transparent text-base leading-relaxed text-foreground outline-none placeholder:text-muted-foreground/60"
            placeholder="Tell me about the role, project or idea."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 border border-foreground px-6 py-3 font-mono text-xs tracking-[0.22em] uppercase transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
        >
          {status === "sending" ? "Sending" : "Send message"}
          <span aria-hidden="true">→</span>
        </button>

        <p aria-live="polite" className="font-mono text-[10px] tracking-[0.18em] uppercase">
          {status === "sent" && <span className="text-primary">Message sent — thank you.</span>}
          {status === "error" && (
            <span className="text-muted-foreground">Something went wrong. Please try again.</span>
          )}
        </p>
      </div>
    </form>
  );
}
