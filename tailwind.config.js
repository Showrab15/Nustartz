/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1025px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1484px",
      // => @media (min-width: 1536px) { ... }

     
    },
    fontFamily: {
      'sans': ['"Inter", sans-serif'],
      'serif': ['"Poppins", sans-serif'],
      'Playfair': ['"Playfair Display", sans-serif'],
      'Montserrat': ['"Montserrat", sans-serif']
    },
    extend: {},
  },
  plugins: [],
};