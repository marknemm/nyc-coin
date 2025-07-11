import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roobert', ...defaultTheme.fontFamily.sans],
        serif: ['MADE Avenue', ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
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
