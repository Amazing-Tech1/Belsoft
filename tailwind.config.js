/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(-100%) translateY(-100%) scale(0.5)',
            opacity: '0',
          },
          '70%': {
            transform: 'translateX(-10%) translateY(-70%) scale(0.7)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'translateX(0)  translateY(0) scale(1)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out',
        'fade-in': 'fade-in 2s ease-in',
      },
    },
  },
  plugins: [],
}
