module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'ui-sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
