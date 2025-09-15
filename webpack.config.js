const path = require('path');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.obf.js',
    library: { type: 'commonjs2' }
  },
  mode: 'production',
  plugins: [
    new WebpackObfuscator(require('./obfuscator.config.json'), [])
  ]
};