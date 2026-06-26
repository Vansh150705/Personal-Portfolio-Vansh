import { motion } from 'framer-motion';
import SectionHeader from '../system/SectionHeader';
import profileImage from '../../assets/Vansh Professional Pic 3.png';

const SPEC = [
  ['NAME', 'Vansh Mahajan'],
  ['ROLE', 'Full-Stack & AI Engineer'],
  ['BASED', 'New Delhi, India'],
  ['STACK', 'MERN · Python · LangChain'],
  ['FOCUS', 'Agentic AI · Cloud'],
  ['STATUS', 'Open to opportunities'],
];

const STATS = [
  ['04', 'Internships'],
  ['03', 'Flagship systems'],
  ['8.43', 'CGPA'],
  ['2027', 'B.Tech CSE'],
];

const ease = [0.22, 1, 0.36, 1];

const About = () => {
  return (
    <section id="profile" className="relative z-10 px-[7vw] py-24 lg:px-[10vw] lg:py-32">
      <SectionHeader index="01" label="PROFILE" title="Engineer behind the systems." />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        {/* Left — photo plate + spec sheet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="md:col-span-5"
        >
          {/* duotone blueprint photo plate */}
          <div className="blueprint-frame group relative overflow-hidden border border-hairline bg-panel">
            <div className="absolute left-3 top-3 z-20 font-mono text-[10px] tracking-kicker text-muted-2">
              FIG.01 — OPERATOR
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={profileImage}
                alt="Vansh Mahajan"
                className="h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 group-hover:grayscale-0"
              />
              {/* amber duotone wash, fades on hover */}
              <div className="pointer-events-none absolute inset-0 bg-signal/20 mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
              {/* scan lines */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent 0 3px, rgba(0,0,0,0.25) 3px 4px)',
                }}
              />
            </div>
          </div>

          {/* spec sheet */}
          <div className="mt-6 border border-hairline bg-panel">
            {SPEC.map(([k, v], i) => (
              <div
                key={k}
                className={`flex items-baseline justify-between gap-4 px-4 py-3 font-mono text-xs ${
                  i !== SPEC.length - 1 ? 'border-b border-hairline' : ''
                }`}
              >
                <span className="tracking-widest text-muted-2">{k}</span>
                <span className="text-right text-text">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — manifesto + stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="flex flex-col justify-between md:col-span-7"
        >
          <div>
            <p className="text-xl leading-relaxed text-text sm:text-2xl">
              I design and ship software end-to-end — where reliable engineering meets
              applied intelligence.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              Specialised in the MERN stack alongside modern AI engineering, I move
              comfortably from complex, production-grade RAG pipelines to scalable cloud
              architectures. My work spans four engineering internships and three
              flagship systems — each built for performance, clarity, and real users.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              I care about the details most people never see: query plans, render
              budgets, failure modes, and the quiet decisions that make a system feel
              effortless.
            </p>
          </div>

          {/* stat grid */}
          <div className="mt-10 grid grid-cols-2 gap-px border border-hairline bg-hairline sm:grid-cols-4">
            {STATS.map(([n, l]) => (
              <div key={l} className="bg-void p-5">
                <div className="font-display text-3xl font-semibold text-signal">{n}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-2">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
