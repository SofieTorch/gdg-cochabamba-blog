/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: "#34A853",
        red: "#EA4335",
        yellow: "#F9AB00",
        blue: "#4285F4",
      },
    },
    fontFamily: {
      sans: ["google-sans"],
      body: ["google-sans"],
    },
  },
  plugins: [],
};
