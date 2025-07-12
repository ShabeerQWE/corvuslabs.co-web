/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        'shine-pulse': 'shine-pulse var(--shine-pulse-duration) infinite linear',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'aurora': 'aurora 60s ease infinite',
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' }
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        'shine-pulse': {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          'to': {
            'background-position': '0% 0%',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'aurora': {
          '0%': {
            'background-position': '50% 50%, 50% 50%',
          },
          '50%': {
            'background-position': '350% 50%, 350% 50%',
          },
          '100%': {
            'background-position': '50% 50%, 50% 50%',
          },
        },
      }
    },
  },
  plugins: [],
};
