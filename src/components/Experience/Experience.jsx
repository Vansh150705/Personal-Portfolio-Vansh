import { motion } from 'framer-motion';
import SectionHeader from '../system/SectionHeader';
import { experiences } from '../../constants';

const ease = [0.22, 1, 0.36, 1];

/** First letters of the first two words — used when no logo asset exists. */
const monogram = (name) =>
  name
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const Experience = () => {
  return (
    <section id="deployments" className="relative z-10 px-[7vw] py-24 lg:px-[10vw] lg:py-32">
      <SectionHeader index="03" label="DEPLOYMENTS" title="Where I've shipped." />

      <div className="relative">
        {/* spine */}
        <div className="absolute bottom-0 left-0 top-2 hidden w-px bg-hairline md:block" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.06 }}
              className="group relative md:pl-12"
            >
              {/* node marker */}
              <div className="absolute left-[-4px] top-6 hidden h-2 w-2 rotate-45 border border-signal bg-void transition-colors duration-300 group-hover:bg-signal md:block" />

              <div className="blueprint-frame border border-hairline bg-panel p-6 transition-colors duration-300 hover:border-signal/30 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border border-hairline bg-void">
                      {exp.img ? (
                        <img src={exp.img} alt={exp.company} className="h-full w-full object-contain p-1" />
                      ) : (
                        <span className="font-mono text-sm font-medium text-signal">
                          {monogram(exp.company)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium text-text">{exp.role}</h3>
                      <p className="mt-0.5 text-sm text-muted">{exp.company}</p>
                    </div>
                  </div>
                  <div className="shrink-0 font-mono text-[11px] tracking-widest text-muted-2 sm:text-right">
                    <span className="text-signal">DEP_{String(i + 1).padStart(3, '0')}</span>
                    <br className="hidden sm:block" />
                    <span className="ml-3 sm:ml-0">{exp.date}</span>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl leading-relaxed text-muted">{exp.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="border border-hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-2"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
