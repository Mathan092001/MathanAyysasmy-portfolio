/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateX(-20vw)' },
          '100%': { transform: 'translateX(120vw)' },
        },
      },
      animation: {
        cloudLoop: 'float 60s linear infinite',
      },

    },
    fontFamily: {
      title : 'Plaster'
    }
  },
  plugins: [],
}

