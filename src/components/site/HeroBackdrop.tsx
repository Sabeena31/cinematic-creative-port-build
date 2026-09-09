import { useEffect, useRef, useState } from "react";
import { heroClips } from "./hero-clips";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CLIP_DURATION_MS = 9000;

/**
 * Drives the hero clip cycle. Auto-advances unless the visitor prefers
 * reduced motion or has manually picked a clip.
 */
export function useHeroCycle() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    if (reducedMotion || manual || heroClips.length < 2) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % heroClips.length),
      CLIP_DURATION_MS,
    );
    return () => window.clearInterval(id);
  }, [reducedMotion, manual]);

  const select = (i: number) => {
    setManual(true);
    setActive(i);
  };

  return { clips: heroClips, active, select };
}

/**
 * Full-bleed hero backdrop.
 *
 * - Preloads each clip as a Blob so the crossfade never stutters mid-swap.
 * - Falls back to the original remote URL if the blob preload fails.
 * - Keeps an animated light-field backdrop beneath, shown if playback fails.
 * - Reduced motion: no looping, static frame.
 */
export function HeroBackdrop({ active }: { active: number }) {
  const reducedMotion = useReducedMotion();
  const [blobs, setBlobs] = useState<Record<string, string>>({});
  const [failed, setFailed] = useState<Record<string, true>>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Preload clips as blobs; fall back silently to the remote URL.
  useEffect(() => {
    let cancelled = false;
    const created: string[] = [];

    (async () => {
      for (const clip of heroClips) {
        try {
          const res = await fetch(clip.src);
          if (!res.ok) throw new Error(String(res.status));
          const blob = await res.blob();
          if (cancelled) return;
          const url = URL.createObjectURL(blob);
          created.push(url);
          setBlobs((prev) => ({ ...prev, [clip.id]: url }));
        } catch {
          /* keep the remote URL */
        }
      }
    })();

    return () => {
      cancelled = true;
      created.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  // Only the visible clip plays.
  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === active && !reducedMotion) {
        void el.play().catch(() => undefined);
      } else if (i !== active) {
        el.pause();
      }
    });
  }, [active, reducedMotion, blobs]);

  const allFailed = heroClips.every((c) => failed[c.id]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-background">
      {/* Animated light-field fallback — beneath the video stack */}
      <div className={allFailed ? "absolute inset-0" : "absolute inset-0 opacity-0"}>
        <div className="absolute -left-1/4 top-[-20%] h-[75vh] w-[75vh] rounded-full bg-primary/20 blur-[120px] drift-a" />
        <div className="absolute -right-1/4 bottom-[-25%] h-[85vh] w-[85vh] rounded-full bg-white/10 blur-[140px] drift-b" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,transparent,rgba(245,152,242,0.10),transparent)] scan-sweep" />
      </div>

      {heroClips.map((clip, i) => (
        <video
          key={clip.id}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          src={blobs[clip.id] ?? clip.src}
          muted
          autoPlay
          playsInline
          loop={!reducedMotion}
          preload="auto"
          aria-hidden="true"
          onError={() => setFailed((prev) => ({ ...prev, [clip.id]: true }))}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out ${
            reducedMotion ? "duration-0" : "duration-[1200ms]"
          } ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Tint + legibility scrim */}
      <div className="absolute inset-0 z-[1] bg-black/10" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/20 to-background" />
    </div>
  );
}
