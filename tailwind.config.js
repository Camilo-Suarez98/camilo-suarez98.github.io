module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
      },
      animation: {
        fadeInTop: 'fadeInTop 2s ease-in-out',
        fadeInLeft: 'fadeInLeft 2s ease-in-out',
        fadeInRight: 'fadeInRight 2s ease-in-out'
      },
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'ls': { 'max': '650px' },
      'sm': { 'max': '457px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
