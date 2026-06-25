import { useEffect, useRef, useState } from 'react';

/**
 * A registration-reticle cursor. A precise crosshair that trails the pointer and
 * "locks on" (expands into a bracketed target) over interactive elements.
 * Only mounts on fine-pointer devices; otherwise the native cursor is kept.
 */
const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [locked, setLocked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...pos };
    let raf;

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setHidden(false);
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
      const interactive = e.target.closest('a, button, input, textarea, [data-cursor="lock"]');
      setLocked(Boolean(interactive));
    };

    // Ring follows with a slight lag for an instrument-like feel.
    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    const leave = () => setHidden(true);
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300"
      style={{ opacity: hidden ? 0 : 1 }}
      aria-hidden="true"
    >
      {/* center dot */}
      <div
        ref={dot}
        className="absolute -left-px -top-px h-0.5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-signal"
        style={{ left: 0, top: 0 }}
      />
      {/* reticle ring with bracket corners */}
      <div
        ref={ring}
        className="absolute left-0 top-0"
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
          style={{
            width: locked ? 44 : 26,
            height: locked ? 44 : 26,
          }}
        >
          {/* four bracket corners */}
          {[
            'top-0 left-0 border-t border-l',
            'top-0 right-0 border-t border-r',
            'bottom-0 left-0 border-b border-l',
            'bottom-0 right-0 border-b border-r',
          ].map((c, i) => (
            <span
              key={i}
              className={`absolute h-2 w-2 border-signal transition-all duration-200 ${c}`}
              style={{ opacity: locked ? 1 : 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cursor;
