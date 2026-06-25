import { motion } from 'framer-motion';
import SectionHeader from '../system/SectionHeader';
import SkillsConstellation from '../three/SkillsConstellation';
import { SkillsInfo } from '../../constants';

const ease = [0.22, 1, 0.36, 1];

const Skills = () => {
  return (
    <section id="capabilities" className="relative z-10 overflow-hidden px-[7vw] py-24 lg:px-[10vw] lg:py-32">
      {/* constellation backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 80% at 60% 40%, #000 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 60% 40%, #000 40%, transparent 90%)',
        }}
      >
        <SkillsConstellation />
      </div>

      <div className="relative z-10">
        <SectionHeader index="02" label="CAPABILITIES" title="A connected toolkit." />

        <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {SkillsInfo.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: (i % 3) * 0.08 }}
              className="group relative bg-void p-6 transition-colors duration-300 hover:bg-panel"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-medium text-text">{cat.title}</h3>
                <span className="font-mono text-[10px] text-muted-2 transition-colors group-hover:text-signal">
                  02.{i + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="border border-hairline px-2.5 py-1 font-mono text-[11px] text-muted transition-colors duration-200 hover:border-signal/60 hover:text-signal"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* underline sweep on hover */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-signal transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
