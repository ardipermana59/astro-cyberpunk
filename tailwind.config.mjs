/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0f1c',
        'cyber-cyan': '#00fff0',
        'cyber-magenta': '#ff00ff',
        'cyber-text': '#e0e0e0',
        'cyber-gray': '#1a1f2e',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan-border': 'scanningBorder 3s linear infinite',
        'typing': 'typing 3s steps(40, end)',
        'data-stream': 'dataStream 3s linear infinite',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00fff0, 0 0 20px #00fff0, 0 0 30px #00fff0',
        'neon-magenta': '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
      },
    },
  },
  plugins: [],
}
