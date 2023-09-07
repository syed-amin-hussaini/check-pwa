const path = require('path');
const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: runtimeCaching,
  buildExcludes: [
    /middleware\.js$/
  ]
});

module.exports = {
  ...withPWA,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // other next.js config options
};