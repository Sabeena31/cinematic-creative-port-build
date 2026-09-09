import { useEffect, useState } from "react";

/**
 * Tracks the user's `prefers-reduced-motion` setting.
 * Returns false during SSR / first paint so markup stays stable.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return reduced;
}
