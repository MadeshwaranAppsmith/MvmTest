/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Neuton', 'Georgia', 'serif'],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
      },
    },
  },
  plugins: [],
}

