const withCSS = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCSS(withPurgeCss())