const withTM = require("next-transpile-modules")(["ui"]);
const path = require('path')


module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  output: 'standalone'
});
