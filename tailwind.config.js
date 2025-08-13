/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-mid': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'oval-spin': 'ovalRotate 10s linear infinite',
        'oval-spin-reverse': 'ovalRotateReverse 12s linear infinite',
        'pulse-soft': 'pulse 5s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'scale-bounce': 'scaleBounce 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ovalRotate: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(60px) translateY(-40px) rotate(90deg)' },
          '50%': { transform: 'translateX(0px) translateY(-80px) rotate(180deg)' },
          '75%': { transform: 'translateX(-60px) translateY(-40px) rotate(270deg)' },
          '100%': { transform: 'translateX(0) translateY(0) rotate(360deg)' },
        },
        ovalRotateReverse: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(-60px) translateY(40px) rotate(-90deg)' },
          '50%': { transform: 'translateX(0px) translateY(80px) rotate(-180deg)' },
          '75%': { transform: 'translateX(60px) translateY(40px) rotate(-270deg)' },
          '100%': { transform: 'translateX(0) translateY(0) rotate(-360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scaleBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(255, 255, 255, 0)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
