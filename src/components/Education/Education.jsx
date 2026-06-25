import { motion } from 'framer-motion';
import SectionHeader from '../system/SectionHeader';
import { education } from '../../constants';

const ease = [0.22, 1, 0.36, 1];

const Education = () => {
  return (
    <section id="foundation" className="relative z-10 px-[7vw] py-24 lg:px-[10vw] lg:py-32">
      <SectionHeader index="05" label="FOUNDATION" title="Academic record." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {education.map((edu, i) => (
          <motion.article
            key={edu.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            className="blueprint-frame flex flex-col border border-hairline bg-panel p-6 transition-colors duration-300 hover:border-signal/30 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border border-hairline bg-void">
                  <img src={edu.img} alt={edu.school} className="h-full w-full object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium leading-tight text-text">
                    {edu.school}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{edu.degree}</p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-[10px] tracking-widest text-signal">
                EDU_{String(i + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] tracking-widest text-muted-2">
              <span>{edu.date}</span>
              {edu.grade && (
                <span>
                  GRADE <span className="text-signal">{edu.grade}</span>
                </span>
              )}
            </div>

            <p className="mt-4 flex-1 leading-relaxed text-muted">{edu.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Education;
