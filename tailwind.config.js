/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        path: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' }
        }
      },
      animation: {
        path: 'path 0.4s 0.4s 1 linear forwards',
      }
    },
  },
  plugins: [],
}

