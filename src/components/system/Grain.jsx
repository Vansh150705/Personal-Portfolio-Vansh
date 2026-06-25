/** Subtle animated film grain over the whole page for analog texture. */
const Grain = () => (
  <div
    className="pointer-events-none fixed inset-0 z-[90] opacity-[0.04] mix-blend-screen grain motion-safe:animate-grain"
    style={{ backgroundSize: '200px 200px' }}
    aria-hidden="true"
  />
);

export default Grain;
