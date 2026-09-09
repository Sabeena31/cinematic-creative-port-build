/**
 * The three cinematic hero clips, crossfaded in this order:
 * DATA FLOW -> DIGITAL MATERIAL -> LIGHT TUNNEL
 *
 * Drop the video URLs in here (CDN URLs or files placed in /public) and the
 * hero switches from the animated fallback backdrop to real video automatically.
 * Leaving a `src` empty simply skips that clip.
 */
export type HeroClip = {
  id: string;
  label: string;
  src: string;
};

export const heroClips: HeroClip[] = [
  { id: "data-flow", label: "Data flow", src: "" },
  { id: "digital-material", label: "Digital material", src: "" },
  { id: "light-tunnel", label: "Light tunnel", src: "" },
];
