/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          architecture: '#fcd34d', // Yellow/Orange
          frameworks: '#bef264',   // Lime/Yellow
          career: '#60a5fa',       // Blue
          education: '#22d3ee',    // Cyan
          operations: '#fde047',   // Yellow
          intelligence: '#c084fc', // Purple
          governance: '#4ade80',   // Green
          erm: '#f472b6',          // Pink
          risk: '#f87171',         // Red
          appsec: '#fb923c',       // Orange
          physical: '#ec4899',     // Magenta
        }
      }
    },
  },
  plugins: [],
}
