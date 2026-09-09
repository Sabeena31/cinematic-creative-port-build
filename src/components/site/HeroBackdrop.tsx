import { useEffect, useRef, useState } from "react";
import { heroClips } from "./hero-clips";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CLIP_DURATION_MS = 9000;
const FADE_MS = 2200;

/**
 * Full-bleed hero backdrop.
 *
 * - Preloads each clip as a Blob so the crossfade never stutters mid-swap.
 * - Falls back to an animated light-field backdrop when clips are missing,
 *   fail to download, or the browser refuses to play them.
 * - Reduced motion: no crossfade cycle, no looping video, static first frame.
 */
export function HeroBackdrop() {
  const reducedMotion = useReducedMotion();
  const [blobs, setBlobs] = useState<Record<string, string>>({});
  const [failed, setFailed] = useState<Record<string, true>>({});
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const declared = heroClips.filter((c) => c.src);

  // Preload clips as blobs.
  useEffect(() => {
    if (declared.length === 0) return;
    let cancelled = false;
    const created: string[] = [];

    (async () => {
      for (const clip of declared) {
        try {
          const res = await fetch(clip.src);
          if (!res.ok) throw new Error(String(res.status));
          const blob = await res.blob();
          if (cancelled) return;
          const url = URL.createObjectURL(blob);
          created.push(url);
          setBlobs((prev) => ({ ...prev, [clip.id]: url }));
        } catch {
          if (!cancelled) setFailed((prev) => ({ ...prev, [clip.id]: true }));
        }
      }
    })();

    return () => {
      cancelled = true;
      created.forEach((url) => URL.revokeObjectURL(url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playable = declared.filter((c) => blobs[c.id] && !failed[c.id]);

  // Crossfade cycle.
  useEffect(() => {
    if (reducedMotion || playable.length < 2) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % playable.length),
      CLIP_DURATION_MS,
    );
    return () => window.clearInterval(id);
  }, [reducedMotion, playable.length]);

  // Only the visible clip plays.
  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === active && !reducedMotion) {
        void el.play().catch(() => undefined);
      } else {
        el.pause();
      }
    });
  }, [active, reducedMotion, playable.length]);

  const showFallback = playable.length === 0;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-background">
      {/* Animated light-field fallback — always rendered beneath video */}
      <div className={showFallback ? "absolute inset-0" : "absolute inset-0 opacity-0"}>
        <div className="absolute -left-1/4 top-[-20%] h-[75vh] w-[75vh] rounded-full bg-primary/20 blur-[120px] drift-a" />
        <div className="absolute -right-1/4 bottom-[-25%] h-[85vh] w-[85vh] rounded-full bg-white/10 blur-[140px] drift-b" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,transparent,rgba(245,152,242,0.10),transparent)] scan-sweep" />
      </div>

      {playable.map((clip, i) => (
        <video
          key={clip.id}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          src={blobs[clip.id]}
          muted
          playsInline
          loop={!reducedMotion}
          preload="auto"
          onError={() => setFailed((prev) => ({ ...prev, [clip.id]: true }))}
          className="absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            transitionDuration: reducedMotion ? "0ms" : `${FADE_MS}ms`,
          }}
        />
      ))}

      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
    </div>
  );
}
