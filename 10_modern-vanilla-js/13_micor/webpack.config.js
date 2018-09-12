const path = require('path')

module.exports = {
  // Entry Point
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js',
    ],
  },
  // Output
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  // Babel Loader as Loader
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'stage-0']
      }
    }]
  }
}
