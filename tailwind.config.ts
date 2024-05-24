import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roobert', ...defaultTheme.fontFamily.sans],
        serif: ['MADE Avenue', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        "@font-face": {
          fontFamily: 'Roobert',
          src: `local('Roobert'), url('/fonts/Roobert-Regular.otf') format('opentype')`,
          fontDisplay: 'swap',
          fontWeight: 'normal',
        },
      });
      addBase({
        "@font-face": {
          fontFamily: 'Roobert',
          src: `local('Roobert'), url('/fonts/Roobert-Bold.otf') format('opentype')`,
          fontWeight: 'bold',
          fontDisplay: 'swap',
        },
      });
      addBase({
        "@font-face": {
          fontFamily: 'Roobert',
          src: `local('Roobert'), url('/fonts/Roobert-BoldItalic.otf') format('opentype')`,
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontDisplay: 'swap',
        },
      });
      addBase({
        "@font-face": {
          fontFamily: 'Roobert',
          src: `local('Roobert'), url('/fonts/Roobert-RegularItalic.otf') format('opentype')`,
          fontStyle: 'italic',
          fontDisplay: 'swap',
        },
      });

      addBase({
        "@font-face": {
          fontFamily: 'MADE Avenue',
          src: `local('MADE Avenue'), url('/fonts/MADE-Avenue-Regular.otf') format('opentype')`,
          fontDisplay: 'swap',
        }
      });
    })
  ],
};
export default config;
