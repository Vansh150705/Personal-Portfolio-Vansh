import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { id: 'index', label: 'Index', n: '00' },
  { id: 'profile', label: 'Profile', n: '01' },
  { id: 'capabilities', label: 'Capabilities', n: '02' },
  { id: 'deployments', label: 'Deployments', n: '03' },
  { id: 'systems', label: 'Systems', n: '04' },
  { id: 'foundation', label: 'Foundation', n: '05' },
  { id: 'transmission', label: 'Contact', n: '07' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('index');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // scrollspy
  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[60] w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-hairline bg-void/80 py-3 backdrop-blur-md'
          : 'border-b border-transparent py-5'
      }`}
    >
      <div className="flex items-center justify-between px-[7vw] lg:px-[10vw]">
        {/* wordmark */}
        <a href="#index" className="font-display text-lg font-semibold tracking-tight text-text">
          VM<span className="text-signal">.</span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors ${
                active === item.id ? 'text-signal' : 'text-muted hover:text-text'
              }`}
            >
              <span className="mr-1.5 text-[9px] text-muted-2">{item.n}</span>
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-px h-px bg-signal"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* mobile toggle */}
        <button
          className="text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} className="text-signal" /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-[7vw] mt-3 border border-hairline bg-panel md:hidden"
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 border-b border-hairline px-5 py-4 font-mono text-sm uppercase tracking-widest last:border-b-0 ${
                  active === item.id ? 'text-signal' : 'text-muted'
                }`}
              >
                <span className="text-[10px] text-muted-2">{item.n}</span>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
