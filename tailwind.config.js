const greenScale = {
  50: '#e9f6e9',
  100: '#cbe9cb',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#5cb85c',
  500: '#43a047',
  600: '#339933',
  700: '#2b802b',
  800: '#1f5f1f',
  900: '#174517',
  950: '#0e2e0e',
};

const yellowScale = {
  50: '#fdfaeb',
  100: '#faf3c6',
  200: '#f7e890',
  300: '#f7df1e',
  400: '#e8d00c',
  500: '#c9b300',
  600: '#a39000',
  700: '#7d6e04',
  800: '#66590a',
  900: '#564b0d',
  950: '#332a02',
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#339933',
          dark: '#1a4d1a',
          light: '#5CB85C',
        },
        secondary: {
          DEFAULT: '#F7DF1E',
          dark: '#C9B300',
        },
        // Override default color families so every old blue/purple/indigo/green/red
        // utility class renders in the new green/yellow brand palette.
        blue: greenScale,
        // indigo -> yellow/gold scale so gradients read as green -> gold
        indigo: yellowScale,
        purple: greenScale,
        green: greenScale,
        // NOTE: `red` stays untouched so validation errors, logout and close
        // controls keep their conventional meaning.
        yellow: yellowScale,
        amber: yellowScale,
        orange: yellowScale,
        lime: greenScale,
        emerald: greenScale,
        teal: greenScale,
        cyan: greenScale,
        sky: greenScale,
        violet: greenScale,
        fuchsia: yellowScale,
        pink: yellowScale,
      },
    },
  },
  plugins: [],
};
