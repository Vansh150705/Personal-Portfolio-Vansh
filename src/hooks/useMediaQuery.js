import { useEffect, useState } from 'react';

/**
 * Subscribe to a CSS media query. Returns true when it matches.
 * SSR-safe-ish: defaults to false until mounted.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/** True on coarse pointers / small screens — used to lighten or disable 3D. */
export function useIsMobile() {
  return useMediaQuery('(max-width: 768px), (hover: none)');
}

/** Respects the user's reduced-motion preference. */
export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
