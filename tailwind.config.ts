import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(1200px 600px at 50% -10%, rgba(34,211,238,0.18), transparent)',
      },
      boxShadow: {
        'glow': '0 10px 40px rgba(56,189,248,0.35)',
      }
    },
  },
  plugins: [],
} satisfies Config;
