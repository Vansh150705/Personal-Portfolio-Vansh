import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const BOOT_LINES = [
  'initializing kernel ............ ok',
  'mounting /systems .............. ok',
  'loading agentic modules ....... ok',
  'calibrating render pipeline ... ok',
  'establishing uplink ........... ok',
];

/**
 * Terminal boot sequence. Counts 000 → 100 while printing boot lines, then
 * reports completion so the parent can wipe it away and reveal the site.
 */
const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [lines, setLines] = useState([]);
  const done = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      onComplete?.();
      return;
    }

    const total = 1700;
    const start = performance.now();
    let raf;

    const step = (now) => {
      const t = Math.min(1, (now - start) / total);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      // reveal boot lines progressively
      setLines(BOOT_LINES.slice(0, Math.floor(eased * (BOOT_LINES.length + 1))));
      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else if (!done.current) {
        done.current = true;
        setTimeout(() => onComplete?.(), 350);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void px-8"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="w-full max-w-md font-mono text-[11px] leading-relaxed text-muted">
        <div className="mb-6 flex items-baseline justify-between border-b border-hairline pb-3">
          <span className="tracking-kicker text-signal">VM://PORTFOLIO</span>
          <span className="text-muted-2">v2.0.0</span>
        </div>
        {lines.map((l, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-signal/60">›</span>
            <span>{l}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 w-full max-w-md">
        <div className="flex items-end justify-between">
          <span className="font-display text-7xl font-semibold leading-none text-text tabular-nums sm:text-8xl">
            {String(count).padStart(3, '0')}
          </span>
          <span className="font-mono text-xs text-muted-2">LOADING</span>
        </div>
        <div className="mt-4 h-px w-full bg-hairline">
          <div
            className="h-px bg-signal transition-[width] duration-75 ease-out"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
