/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",       // near-black background
        surface: "#101010",   // raised panels
        line: "#262626",       // hairline borders
        fog: "#6b6b6b",        // muted text
        bone: "#e5e5e5",       // primary text
        accent: "#ff5436",     // coral
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
