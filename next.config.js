// const withPWA = require('next-pwa')({
//   dest: 'public'
// })

// module.exports = withPWA({
//   // next.js config
// })
const path = require('path');
const withPWA = require('next-pwa');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  ...withPWA({
    dest: 'public',
  }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};