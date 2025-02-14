import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'dark-blue': 'var(--dark-blue)',
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': {
            'text-shadow': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #39FF14, 0 0 20px #39FF14',
          },
          'to': {
            'text-shadow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #39FF14, 0 0 40px #39FF14',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;