/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        cafe: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9bc',
          300: '#f6c08d',
          400: '#f09d56',
          500: '#ec7f2f',
          600: '#dd6525',
          700: '#b84e20',
          800: '#93401f',
          900: '#76371c',
          950: '#401a0c',
        },
        gold: {
          50: '#fffdf0',
          100: '#fffaeb',
          200: '#fff3c6',
          300: '#ffe99d',
          400: '#ffd972',
          500: '#ffc947',
          600: '#e6a42b',
          700: '#cc7f1f',
          800: '#b35a13',
          900: '#993507',
          950: '#4d1a03',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-delayed': 'fadeIn 0.6s ease-in-out 0.8s both',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'welcome-slide-in': 'welcomeSlideIn 0.8s ease-in-out',
        'menu-fade-in': 'menuFadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        welcomeSlideIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-50px)',
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)',
          },
        },
        menuFadeIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};