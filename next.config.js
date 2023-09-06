const path = require('path');
const withPWA = require('next-pwa')({
  dest: 'public'
});

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  ...withPWA,
  // other next.js config options
};