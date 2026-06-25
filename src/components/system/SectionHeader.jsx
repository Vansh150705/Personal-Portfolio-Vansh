import { motion } from 'framer-motion';

/**
 * Numbered section header in the dossier style:
 *   [02 / CAPABILITIES] ───────────────
 *   Big display title
 */
const SectionHeader = ({ index, label, title, align = 'left' }) => {
  const right = align === 'right';
  return (
    <div className={`mb-12 md:mb-16 ${right ? 'text-right' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center gap-4 ${right ? 'flex-row-reverse' : ''}`}
      >
        <span className="font-mono text-sm text-signal">{index}</span>
        <span className="kicker">{label}</span>
        <span className="h-px flex-1 bg-hairline" />
      </motion.div>

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-tight text-text sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h2>
      )}
    </div>
  );
};

export default SectionHeader;
