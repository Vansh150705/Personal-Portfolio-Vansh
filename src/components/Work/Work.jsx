import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import SectionHeader from '../system/SectionHeader';
import { projects } from '../../constants';

const ease = [0.22, 1, 0.36, 1];

const Work = () => {
  return (
    <section id="systems" className="relative z-10 px-[7vw] py-24 lg:px-[10vw] lg:py-32">
      <SectionHeader index="04" label="SYSTEMS" title="Selected work." />

      <div className="space-y-20 lg:space-y-28">
        {projects.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease }}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              {/* visual plate */}
              <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  glareEnable
                  glareMaxOpacity={0.12}
                  glareColor="#FFB000"
                  glarePosition="all"
                  scale={1.01}
                  transitionSpeed={1200}
                  className="blueprint-frame overflow-hidden border border-hairline bg-panel"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-void">
                    <div className="absolute left-3 top-3 z-10 font-mono text-[10px] tracking-kicker text-muted-2">
                      FIG.0{i + 1}
                    </div>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                  </div>
                </Tilt>
              </div>

              {/* dossier content */}
              <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
                <div className="mb-4 flex items-center gap-4 font-mono text-[11px] tracking-widest">
                  <span className="text-signal">SYS_{String(i + 1).padStart(3, '0')}</span>
                  <span className="flex items-center gap-1.5 text-muted-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" /> STATUS: DEPLOYED
                  </span>
                </div>

                <h3 className="font-display text-3xl font-semibold text-text sm:text-4xl">
                  {p.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted">{p.description}</p>

                {/* stack readout */}
                <div className="mt-6 border-y border-hairline py-4">
                  <div className="mb-2 font-mono text-[10px] tracking-kicker text-muted-2">STACK</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted">
                    {p.tags.map((t) => (
                      <span key={t} className="before:mr-1.5 before:text-signal/60 before:content-['+']">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {p.webapp && (
                    <a
                      href={p.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 bg-signal px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-widest text-void transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Live
                      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-hairline px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-text transition-colors duration-300 hover:border-signal hover:text-signal"
                    >
                      <FiGithub /> Source
                    </a>
                  )}
                  {!p.webapp && !p.github && (
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-2">
                      {'// source private — available on request'}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
