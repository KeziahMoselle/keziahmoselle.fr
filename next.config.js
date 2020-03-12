const withCSS = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  },
  withPurgeCss()
)