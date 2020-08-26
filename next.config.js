module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  },
  env: {
    BLOG_URL: process.env.BLOG_URL,
    MY_EMAIL_ADDRESS: process.env.MY_EMAIL_ADDRESS,
    BASEURL: process.env.BASEURL
  }
}
