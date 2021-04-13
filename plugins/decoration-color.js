const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, theme, e, variants }) {
  const colors = theme('colors', {})
  const decorationVariants = variants('textDecoration', [])

  const textDecorationColorUtilities = _.map(colors, (color, name) => ({
    [`.decoration-color-${e(name)}`]: {
      textDecorationColor: `${color}`
    }
  }))

  addUtilities(textDecorationColorUtilities, decorationVariants)
})
