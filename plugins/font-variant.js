const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme, e, variants }) => {
  const fontVariantVariants = variants('fontVariant', [])

  const fontVariantUtilities = [
    {
      ['.smallcaps']: { fontVariantCaps: 'small-caps' }
    },
    {
      ['.noligs']: { fontVariantLigatures: 'no-common-ligatures' }
    }
  ]

  addUtilities(fontVariantUtilities, fontVariantVariants)
})
