/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      colors: {
        'wipe-green': '#22c55e',
        'secure-blue': '#2563eb',
      },
      boxShadow: {
        'terminal-glow': '0 0 10px rgba(34, 197, 94, 0.5)',
        'device-card-hover': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};