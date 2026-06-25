import { motion } from 'framer-motion';
import { FiHeart, FiAward } from 'react-icons/fi';
import SectionHeader from '../system/SectionHeader';
import { volunteering, extracurricular } from '../../constants';

const ease = [0.22, 1, 0.36, 1];

const Column = ({ icon, tag, label, children }) => (
  <div>
    <div className="mb-5 flex items-center gap-3 font-mono text-[11px] tracking-kicker text-muted">
      <span className="text-signal">{icon}</span>
      <span className="text-signal">{tag}</span>
      <span className="text-muted-2">{label}</span>
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

const Card = ({ index, title, subtitle, date, desc, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, ease }}
    className="group border border-hairline bg-panel p-5 transition-colors duration-300 hover:border-signal/30"
  >
    <div className="flex items-start justify-between gap-3">
      <h3 className="font-display text-base font-medium text-text">{title}</h3>
      <span className="shrink-0 font-mono text-[10px] text-muted-2 transition-colors group-hover:text-signal">
        {index}
      </span>
    </div>
    {(subtitle || date) && (
      <div className="mt-1 flex flex-wrap gap-x-4 font-mono text-[10px] tracking-widest text-muted-2">
        {subtitle && <span>{subtitle}</span>}
        {date && <span>{date}</span>}
      </div>
    )}
    <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
    {skills && (
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="border border-hairline px-2 py-0.5 font-mono text-[10px] text-muted-2">
            {s}
          </span>
        ))}
      </div>
    )}
  </motion.div>
);

const FieldWork = () => {
  return (
    <section id="fieldwork" className="relative z-10 px-[7vw] py-24 lg:px-[10vw] lg:py-32">
      <SectionHeader index="06" label="FIELD WORK" title="Beyond the terminal." />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <Column icon={<FiHeart size={13} />} tag="06.1" label="VOLUNTEERING">
          {volunteering.map((v, i) => (
            <Card
              key={v.id}
              index={`VOL_${String(i + 1).padStart(2, '0')}`}
              title={v.role}
              subtitle={v.company}
              date={v.date}
              desc={v.desc}
              skills={v.skills}
            />
          ))}
        </Column>

        <Column icon={<FiAward size={13} />} tag="06.2" label="LEADERSHIP">
          {extracurricular.map((e, i) => (
            <Card
              key={e.id}
              index={`LEAD_${String(i + 1).padStart(2, '0')}`}
              title={e.title}
              desc={e.desc}
            />
          ))}
        </Column>
      </div>
    </section>
  );
};

export default FieldWork;
