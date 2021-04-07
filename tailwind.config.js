module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extraSpacing: {
      25: '6.25em/* 100px */',
      50: '12.5em/* 200px */',
      75: '18.75em/* 300px */',
      100: '25em/* 400px */',
      125: '31.25em/* 500px */',
      150: '37.5em/* 600px */',
      175: '43.75em/* 700px */',
      200: '50em/* 800px */',
      225: '56.25em/* 900px */',
      250: '62.5em/* 1000px */',
      275: '68.75em/* 1100px */',
      300: '75em/* 1200px */',
      325: '81.25em/* 1300px */',
      350: '87.5em/* 1400px */',
      375: '93.75em/* 1500px */',
      400: '100em/* 1600px */',
      x1: 'var(--space)',
      x2: 'var(--space-x2)',
    },
    extend: {
      colors: {
        body: 'var(--body-color)',
        primary: 'var(--primary-color)',
        'primary-dark': 'var(--primary-color-dark)',
        select: 'var(--select-color)',
        inline: 'var(--inline-code-text)',
        mark: 'var(--mark-color)',
        code: 'var(--code-color)',
      },
      keyframes: {
        target: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        target: 'target 2s',
      },
      boxShadow: {
        inner: 'inset 0 0 0 2px var(--primary-color)',
      },
      outline: {
        0: '0',
      },
      transitionDuration: {
        600: '600ms',
      },
      opacity: {
        85: '.85',
      },
      spacing: (theme) => ({
        ...theme('extraSpacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('extraSpacing'),
      }),
      maxHeight: (theme) => ({
        ...theme('extraSpacing'),
      }),
      backgroundColor: (theme) => ({
        DEFAULT: 'var(--bg)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
        90: 'var(--bg-transparent)',
        dark: 'var(--dark-bg)',
        code: 'var(--code-bg)',
        inline: 'var(--inline-code-bg)',
        success: 'var(--success-bg)',
        line: 'var(--border-color)',
      }),
      borderColor: (theme) => ({
        primary: 'var(--border-color)',
        dark: 'var(--border-color-darker)',
      }),
    },
  },
  variants: {},
  plugins: [],
}
