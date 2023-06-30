/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro"],
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blue: "#00FFFF",
      aqua: "#249D9F",
      azure: "#F0FFFF",
      lightblue: "#89CFF0",
      pink: "#FAAFBA",
      orange: "#CC7722",
      cyberYellow: "#FFD300",
    },
    fontSize: {},
  },
  plugins: [],
};
