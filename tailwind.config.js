/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './blocks/**/*.liquid',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      borderRadius: {
        '10xl': '10rem',
      },
      fontSize: {
        'xl': '1.125rem',
      },
      fontWeight: {
        'medium': '500',
      },
      borderWidth: {
        '2': '2px',
      },
      fontFamily: {
        'titles': ['var(--font-titles)', 'serif'], // Use font-serif
        'body-copy': ['var(--font-body-copy)', 'sans-serif'],
      },
      colors: {
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'secondary': 'var(--color-secondary)',
        'body-copy': 'var(--color-body-copy)',
        'bg-light': 'var(--color-bg-light)',
        'bg-extralight': 'var(--color-bg-extralight)',
        'bg-card': 'var(--color-bg-card)',
        'white': 'var(--color-white)',
        'black': 'var(--color-black)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          borderRadius: theme('borderRadius.10xl'),
          padding: '.75rem 2.25rem',
          fontSize: '1.125rem',
          fontWeight: theme('fontWeight.medium'),
          borderWidth: theme('borderWidth.2'),
          borderStyle: 'solid',
          transition: 'all 0.2s ease-in-out',
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary'),
          borderColor: theme('colors.primary'),
          color: theme('colors.white'),
          '&:hover, &:focus': {
            backgroundColor: 'transparent',
            color: theme('colors.primary'),
          },
        },
        '.btn-secondary': {
          backgroundColor: 'transparent',
          borderColor: theme('colors.primary'),
          color: theme('colors.primary'),
          '&:hover, &:focus': {
            backgroundColor: theme('colors.primary'),
            color: theme('colors.white'),
          },
        },
      })
    },
  ],
}

