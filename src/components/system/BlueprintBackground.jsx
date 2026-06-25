/**
 * Fixed atmospheric backdrop: blueprint grid, a soft amber horizon glow,
 * viewport crop-marks, and a slow vertical scanline. Purely decorative.
 */
const Mark = ({ className, h, v }) => (
  <div className={`absolute h-5 w-5 ${className}`} aria-hidden="true">
    <span className={`absolute bg-signal/40 ${h}`} style={{ height: 1, width: 20 }} />
    <span className={`absolute bg-signal/40 ${v}`} style={{ width: 1, height: 20 }} />
  </div>
);

const BlueprintBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* base wash */}
      <div className="absolute inset-0 bg-void" />

      {/* blueprint grid, faded toward edges */}
      <div
        className="absolute inset-0 bg-blueprint"
        style={{
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 35%, #000 55%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 35%, #000 55%, transparent 100%)',
        }}
      />

      {/* amber horizon glow */}
      <div className="absolute left-1/2 top-[-20%] h-[55vh] w-[80vw] -translate-x-1/2 rounded-[50%] bg-signal/[0.06] blur-[120px]" />
      <div className="absolute bottom-[-25%] right-[-10%] h-[45vh] w-[45vw] rounded-[50%] bg-signal/[0.03] blur-[140px]" />

      {/* viewport crop marks */}
      <Mark className="left-4 top-4" h="left-0 top-0" v="left-0 top-0" />
      <Mark className="right-4 top-4" h="right-0 top-0" v="right-0 top-0" />
      <Mark className="bottom-4 left-4" h="left-0 bottom-0" v="left-0 bottom-0" />
      <Mark className="bottom-4 right-4" h="right-0 bottom-0" v="right-0 bottom-0" />

      {/* drifting scanline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/20 to-transparent motion-safe:animate-scan" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.55))]" />
    </div>
  );
};

export default BlueprintBackground;
