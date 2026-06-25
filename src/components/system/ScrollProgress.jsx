import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

/** Thin amber progress rail along the top edge with a live percentage readout. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const pct = useTransform(scrollYProgress, (v) => Math.round(v * 100));
  const [val, setVal] = useState(0);
  useMotionValueEvent(pct, 'change', setVal);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[80] h-px w-full origin-left bg-signal"
        style={{ scaleX }}
      />
      <div className="fixed right-6 top-5 z-[80] hidden font-mono text-[10px] tracking-widest text-muted md:block">
        <span className="text-signal">{String(val).padStart(3, '0')}</span>
        <span className="text-muted-2"> / 100</span>
      </div>
    </>
  );
};

export default ScrollProgress;
