import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowDown } from 'react-icons/fi';
import HeroScene from '../three/HeroScene';
import useTypewriter from '../../hooks/useTypewriter';

const ROLES = [
  'scalable full-stack systems',
  'agentic RAG pipelines',
  'production-grade AI apps',
  'cloud-ready architectures',
];

const ease = [0.22, 1, 0.36, 1];
const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: d } }),
};

const Hero = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="index"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-[7vw] pt-24 lg:px-[10vw]"
    >
      {/* 3D backdrop */}
      <div className="absolute inset-0 z-0 opacity-90">
        <HeroScene />
      </div>
      {/* readability scrim */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-void via-void/40 to-transparent" />

      <div className="relative z-10 max-w-4xl">
        {/* status row */}
        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-kicker text-muted"
        >
          <span className="text-signal">00 / INDEX</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* name */}
        <motion.h1
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-display text-[15vw] font-semibold leading-[0.86] tracking-tight text-text sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          VANSH
          <br />
          <span className="text-signal text-signal-glow">MAHAJAN</span>
        </motion.h1>

        {/* typed role line */}
        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="mt-8 font-mono text-base text-muted sm:text-lg"
        >
          <span className="text-signal/70">{'>'}</span> I build{' '}
          <span className="text-text">{typed}</span>
          <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.18em] bg-signal animate-blink" />
        </motion.div>

        {/* tagline */}
        <motion.p
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Full-Stack &amp; AI Engineer designing end-to-end web applications and
          intelligent agentic systems — from production RAG pipelines to scalable
          cloud architectures.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="/Vansh Resume.pdf"
            download="Vansh Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-signal px-7 py-3 font-mono text-sm font-medium uppercase tracking-widest text-void transition-transform duration-300 hover:-translate-y-0.5"
          >
            Download CV
            <FiArrowDownRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#systems"
            className="group inline-flex items-center gap-3 border border-hairline px-7 py-3 font-mono text-sm uppercase tracking-widest text-text transition-colors duration-300 hover:border-signal hover:text-signal"
          >
            View Systems
            <span className="text-muted-2 transition-colors group-hover:text-signal">04</span>
          </a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#profile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-kicker text-muted-2 hover:text-signal"
      >
        SCROLL
        <FiArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
