import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../system/SectionHeader';

const CHANNELS = [
  { icon: <FiMail />, label: 'EMAIL', value: 'vansh150705@gmail.com', href: 'mailto:vansh150705@gmail.com' },
  { icon: <FiGithub />, label: 'GITHUB', value: '/Vansh150705', href: 'https://github.com/Vansh150705' },
  { icon: <FiLinkedin />, label: 'LINKEDIN', value: '/vansh-mahajan-napv', href: 'https://www.linkedin.com/in/vansh-mahajan-napv/' },
  { icon: <FiMapPin />, label: 'LOCATION', value: 'New Delhi, India', href: null },
];

const fieldClass =
  'w-full border border-hairline bg-void px-4 py-3 font-mono text-sm text-text placeholder:text-muted-2 transition-colors duration-200 focus:border-signal focus:outline-none';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm('service_71gqxjo', 'template_mg0xlog', form.current, 'oqbQB5QkQW2SuUDfo')
      .then(
        () => {
          toast.success('Transmission sent. I will respond shortly.');
          setIsSubmitting(false);
          e.target.reset();
        },
        () => {
          toast.error('Transmission failed. Please retry.');
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section id="transmission" className="relative z-10 px-[7vw] py-24 lg:px-[10vw] lg:py-32">
      <ToastContainer position="bottom-right" theme="dark" autoClose={4000} />
      <SectionHeader index="07" label="TRANSMISSION" title="Establish connection." />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* channels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className="max-w-md leading-relaxed text-muted">
            Have a system to build, a role to fill, or an idea worth shipping? Open a
            channel — I read everything and reply fast.
          </p>

          <div className="mt-8 border border-hairline bg-panel">
            {CHANNELS.map((c, i) => {
              const inner = (
                <div
                  className={`group flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-void ${
                    i !== CHANNELS.length - 1 ? 'border-b border-hairline' : ''
                  }`}
                >
                  <span className="text-muted-2 transition-colors group-hover:text-signal">{c.icon}</span>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] tracking-kicker text-muted-2">{c.label}</div>
                    <div className="truncate font-mono text-sm text-text">{c.value}</div>
                  </div>
                  {c.href && (
                    <FiArrowRight className="ml-auto text-muted-2 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-signal group-hover:opacity-100" />
                  )}
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            STATUS: AVAILABLE FOR WORK
          </div>
        </motion.div>

        {/* terminal form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="blueprint-frame border border-hairline bg-panel">
            {/* terminal title bar */}
            <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-2/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-2/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal/80" />
              <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-2">
                ~/contact — establish-connection.sh
              </span>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] tracking-kicker text-muted-2">NAME</span>
                  <input type="text" name="user_name" placeholder="your name" required className={fieldClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] tracking-kicker text-muted-2">EMAIL</span>
                  <input type="email" name="user_email" placeholder="you@domain.com" required className={fieldClass} />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block font-mono text-[10px] tracking-kicker text-muted-2">SUBJECT</span>
                <input type="text" name="subject" placeholder="what's this about" required className={fieldClass} />
              </label>

              <label className="block">
                <span className="mb-2 block font-mono text-[10px] tracking-kicker text-muted-2">MESSAGE</span>
                <textarea name="message" rows="5" placeholder="type your message…" required className={`${fieldClass} resize-none`} />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-3 bg-signal py-3.5 font-mono text-sm font-medium uppercase tracking-widest text-void transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Transmitting…' : 'Send Transmission'}
                {!isSubmitting && (
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
