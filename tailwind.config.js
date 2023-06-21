/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  theme: {
    extend: {
      width: {
        '1440': '1440px',
        '1216': '1216px',
      },
      height: {
        '412': '412px',
        '424': '424px',
        '592': '592px',
        '848': '848px',
      },
      margin: {
        '2568': '2568px'
      },
      colors: {
        customYellow: '#FBAB34',
        'color-primary-100': '#fff6e8',
        'color-primary-200': '#ffe1b5',
        'color-primary-300': '#ffcd82',
        'color-primary-400': '#ffb94f',
        'color-primary-500': '#fbab34',
        'color-primary-600': '#e09422',
        'color-primary-700': '#ad721a',
        'color-primary-800': '#7a4e0c',
        'color-primary-900': '#472c04',
        'color-secondary-100': '#f6f6f6',
        'color-secondary-200': '#f4f3f8',
        'color-secondary-300': '#e0deea',
        'color-secondary-400': '#acabb7',
        'color-secondary-500': '#8c8a97',
        'color-secondary-600': '#716f7a',
        'color-secondary-700': '#5f5c6b',
        'color-secondary-800': '#4e4b59',
        'color-secondary-900': '#33303e',
        'color-tertiary-100': '#e8faf1',
        'color-tertiary-200': '#d1f6e3',
        'color-tertiary-300': '#a4edc6',
        'color-tertiary-400': '#8de8b8',
        'color-tertiary-500': '#1bd171',
        'color-tertiary-600': '#1bd171',
        'color-tertiary-700': '#149e55',
        'color-tertiary-800': '#0e6b3a',
        'color-tertiary-900': '#07381e',
        'color-quaternary-100': '#fff2f3',
        'color-quaternary-200': '#ffcfd0',
        'color-quaternary-300': '#ff9497',
        'color-quaternary-400': '#fa7d80',
        'color-quaternary-500': '#ec3237',
        'color-quaternary-600': '#d42d31',
        'color-quaternary-700': '#a12226',
        'color-quaternary-800': '#6e171a',
        'color-quaternary-900': '#3b0c0e',
        'color-white': '#ffffff',
        'color-black': '#000000',
        'color-text': '#5d6670',
      },
      maxWidth: {
        'desktop': '1200px',
      },
      screens: {
        tablet: '768px',
        mobile: '595px',
      },
    },
  },
  plugins: [],
}
