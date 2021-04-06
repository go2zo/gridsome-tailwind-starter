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
      spacing: {
        50: '200px',
      },
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
