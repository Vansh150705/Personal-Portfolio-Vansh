import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const NAV = [
  ['index', '00'],
  ['profile', '01'],
  ['capabilities', '02'],
  ['deployments', '03'],
  ['systems', '04'],
  ['transmission', '07'],
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-hairline px-[7vw] py-12 lg:px-[10vw]">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* colophon */}
        <div>
          <div className="font-display text-2xl font-semibold text-text">
            VANSH<span className="text-signal">.</span>MAHAJAN
          </div>
          <p className="mt-3 max-w-xs font-mono text-[11px] leading-relaxed tracking-wider text-muted-2">
            Designed &amp; built from scratch — Engineering Dossier v2.0.0. Clash Display,
            Satoshi &amp; JetBrains Mono on a blueprint grid.
          </p>
        </div>

        {/* index nav */}
        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 font-mono text-xs">
          {NAV.map(([id, n]) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex items-center gap-3 text-muted transition-colors hover:text-signal"
            >
              <span className="text-muted-2 group-hover:text-signal">{n}</span>
              <span className="uppercase tracking-widest">{id}</span>
            </a>
          ))}
        </nav>

        {/* socials + back to top */}
        <div className="flex flex-col items-start gap-5 md:items-end">
          <div className="flex gap-3">
            <a
              href="https://github.com/Vansh150705"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center border border-hairline text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-mahajan-napv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center border border-hairline text-muted transition-colors hover:border-signal hover:text-signal"
            >
              <FiLinkedin size={16} />
            </a>
          </div>
          <a
            href="#index"
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-2 hover:text-signal"
          >
            Back to top
            <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-hairline pt-6 font-mono text-[10px] tracking-widest text-muted-2 sm:flex-row">
        <span>© {year} VANSH MAHAJAN — ALL SYSTEMS OPERATIONAL</span>
        <span>28.6139°N 77.2090°E</span>
      </div>
    </footer>
  );
};

export default Footer;
