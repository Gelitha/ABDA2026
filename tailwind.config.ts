import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        leaf: '#1D6B38',
        moss: '#4A7C59',
        sun: '#D8A327',
        soil: '#74553C',
        mist: '#F4F8F5'
      },
      boxShadow: { premium: '0 20px 45px -20px rgba(20,46,28,.35)' }
    }
  },
  plugins: []
} satisfies Config;
