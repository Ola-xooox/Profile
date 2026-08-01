/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#FFFFFF',
          900: '#F9F9F9',
          850: '#F0F0F0',
          800: '#E5E5E5',
          700: '#D4D4D4',
        },
        cyber: {
          violet: '#000000',
          cyan: '#171717',
          magenta: '#262626',
          emerald: '#404040',
          amber: '#525252',
          mono: '#000000',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.2))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(0, 0, 0, 0.4))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'cyber-glow': '0 0 25px -5px rgba(0, 0, 0, 0.15), 0 0 15px -5px rgba(0, 0, 0, 0.1)',
        'cyan-glow': '0 0 20px -3px rgba(0, 0, 0, 0.2)',
        'violet-glow': '0 0 20px -3px rgba(0, 0, 0, 0.2)',
        'magenta-glow': '0 0 20px -3px rgba(0, 0, 0, 0.2)',
        'white-glow': '0 0 20px -3px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
