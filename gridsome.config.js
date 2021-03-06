// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const purgecss = require('@fullhuman/postcss-purgecss')
const presetEnv = require("postcss-preset-env");

const postcssPlugins = [
  presetEnv({
    /* use stage 3 features + css nesting rules */
    stage: 3,
    features: {
      "nesting-rules": true
    }
  }),
  tailwind()
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
