/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#434B4D',
          50: '#F5F6F6',
          100: '#E5E7E8',
          200: '#CDD1D2',
          300: '#A9AFB1',
          400: '#7D8688',
          500: '#434B4D',
          600: '#383F41',
          700: '#2D3335',
          800: '#22272A',
          900: '#171B1D',
        },
        accent: {
          DEFAULT: '#70B0F2',
          50: '#F0F7FE',
          100: '#E1EFFD',
          200: '#C3DFFB',
          300: '#95C8F7',
          400: '#70B0F2',
          500: '#4A98ED',
          600: '#2B7FE3',
          700: '#1E67C9',
          800: '#1A52A3',
          900: '#144280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
