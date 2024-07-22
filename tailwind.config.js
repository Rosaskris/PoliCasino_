import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        400: '#B49B36',
        500: '#9ead9f',
        600: '#1A271C',
        300: '#05933d',//polilogo
      },
      grayscale: {
        50: '#f2eded',
        100: '#efefef',
        200: '#FDFDFF',
        950: '#16161b',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
