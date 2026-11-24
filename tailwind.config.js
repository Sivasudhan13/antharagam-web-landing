/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fcf8ff',
        primary: {
          DEFAULT: '#630ed4',
          container: '#7c3aed',
          fixed: '#eaddff',
        },
        secondary: {
          DEFAULT: '#674bb5',
          container: '#ab8ffe',
          fixed: '#e8ddff',
        },
        'on-primary': '#ffffff',
        'on-surface': '#181445',
        'on-surface-variant': '#4a4455',
        surface: {
          container: '#efebff',
          'container-high': '#e9e5ff',
          'container-highest': '#e3dfff',
          'container-low': '#f6f2ff',
          'container-lowest': '#ffffff',
          tint: '#732ee4',
        },
        outline: {
          DEFAULT: '#7b7487',
          variant: '#ccc3d8',
        },
        error: '#ba1a1a',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'sans-serif'],
      },
      boxShadow: {
        'soft-purple': '0 10px 30px -10px rgba(99, 14, 212, 0.12)',
        'glow-purple': '0 0 35px rgba(124, 58, 237, 0.25)',
        'elevated': '0 20px 40px -15px rgba(24, 20, 69, 0.08)',
        'card-hover': '0 22px 45px -10px rgba(99, 14, 212, 0.18)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'wave-bar': 'wave 1.2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        wave: {
          '0%': { height: '15%' },
          '100%': { height: '100%' },
        },
      },
    },
  },
  plugins: [],
}
