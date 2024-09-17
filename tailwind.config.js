/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        custom: "1 0 0", // custom flex value
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Inter as the default sans font
      },
    },
  },
  plugins: [],
};
