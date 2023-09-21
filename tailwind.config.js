import tailwindcss from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "thrd-pink": '#ffd8b1',
        "light-grey": "#1f3d4738"
      }
    },
  },
  plugins: [tailwindcss()],
}

