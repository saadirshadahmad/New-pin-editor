/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        studio: {
          50: '#f9f9fb',
          100: '#f2f2f7',
          200: '#e5e5ea',
          300: '#d1d1d6',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        brand: {
          red: '#E60023', // accent option, tasteful
          purple: '#6C47FF',
          coral: '#FF4D6D',
          amber: '#F59E0B',
          cream: '#FFFBF5',
          charcoal: '#1E1E24',
          lilac: '#DDD6FE',
        }
      },
      boxShadow: {
        'artboard': '0 20px 50px -12px rgba(0, 0, 0, 0.25), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'floating': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
