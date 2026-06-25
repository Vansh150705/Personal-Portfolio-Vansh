// tailwind.config.js — Engineering Dossier design system
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0B0D',
        panel: '#111317',
        'panel-2': '#15181D',
        hairline: 'rgba(255,255,255,0.08)',
        text: '#E6E8EA',
        muted: '#7E858E',
        'muted-2': '#565C64',
        signal: '#FFB000',
        'signal-dim': 'rgba(255,176,0,0.12)',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        sans: ['"Satoshi"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        kicker: '0.32em',
      },
      animation: {
        'blink': 'blink 1.1s steps(2, start) infinite',
        'scan': 'scan 6s linear infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'grain': 'grain 0.6s steps(2) infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        scan: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
        floatSlow: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '30%': { transform: 'translate(3%,-8%)' },
          '50%': { transform: 'translate(-4%,6%)' },
          '70%': { transform: 'translate(6%,3%)' },
          '90%': { transform: 'translate(-2%,4%)' },
        },
      },
      backgroundImage: {
        'blueprint': 'linear-gradient(to right, rgba(120,140,160,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,140,160,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
