const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withPWA({
  // next.js config
})