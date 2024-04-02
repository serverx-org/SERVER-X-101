/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./**/*.html', './app/**/*.svelte'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['sofia-pro', 'sans-serif'],
      display: ['Rowdies', 'sans-serif'],
      body: ['sofia-pro', 'sans-serif'],
      code: ['attribute-mono', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray1: '#f8f8f8',
      gray2: '#f3f3ff',
      gray3: '#b2becd',
      gray4: '#9eaeb8',
      gray5: '#454e56',
      gray6: '#3a4856',
      gray7: '#11181b',
      // gray7: '#12181b',
      gray8: '#283255',
      gray81: '#2f3a5d',
      peach: '#ff496b',
      peach1: 'hsla(349, 100%, 68%, 1)',
      peach2: 'hsla(349, 80%, 68%%, 0.5)',
      peach3: 'hsla(356, 100%, 66%, 0.5)',
      DarkCyan: '#00ffff',
      link: '#0000ee',
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {
      boxShadow: {
        '3xl': '0 5px 20px rgb(0 0 0 / 30%)',
        '4xl': '0 5px 20px rgb(0 0 0 / 90%)',
        'dark-cyan': '0 4px 6px -1px rgba(0, 139, 139, 0.1), 0 2px 4px -1px rgba(0, 139, 139, 0.06)',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              'font-weight': 'normal',
              'font-size': '2.5rem',
              'text-transform': 'uppercase',
            },
            h2: {
              'font-weight': 'normal',
              'font-size': '2rem',
              'text-transform': 'uppercase',
            },
            h3: {
              'font-weight': 'normal',
              'font-size': '1.75rem',
              'text-transform': 'uppercase',
            },
            h4: {
              'font-weight': 'normal',
              'font-size': '1.5rem',
              'text-transform': 'uppercase',
            },
            h5: {
              'font-weight': 'normal',
              'font-size': '1.25rem',
              'text-transform': 'uppercase',
            },
            h6: {
              'font-weight': 'normal',
              'font-size': '1.05rem',
              'text-transform': 'uppercase',
            }
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ]
};