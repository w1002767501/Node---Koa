const path = require('path')
const NodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackconfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist')
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, './node_modules')]
      }
    ]
  },
  externals: [NodeExternals()],
  plugins: [new CleanWebpackPlugin()],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    _filename: true,
    __dirnameL: true,
    setImmediate: true,
    path: true
  }
}

module.exports = webpackconfig
