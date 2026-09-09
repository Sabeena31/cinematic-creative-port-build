/**
 * The three cinematic hero clips, crossfaded in this order:
 * WATER WAVE -> GRIDWAVE -> LIGHT TUNNEL
 */
export type HeroClip = {
  id: string;
  label: string;
  src: string;
};

const BASE = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P";

export const heroClips: HeroClip[] = [
  {
    id: "water-wave",
    label: "Water wave",
    src: `${BASE}/hf_20260629_030107_874273ea-684a-4e90-bb96-8fdfde48d53d.mp4`,
  },
  {
    id: "gridwave",
    label: "Gridwave",
    src: `${BASE}/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4`,
  },
  {
    id: "light-tunnel",
    label: "Light tunnel",
    src: `${BASE}/hf_20260627_094019_4214ea73-b963-46a4-8327-61489192de99.mp4`,
  },
];
