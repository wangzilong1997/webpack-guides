const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const config = {
  mode: 'development',
  entry: [
    'webpack/hot/dev-server.js',
    'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    './src/index.js'
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}
const compiler = webpack(config)

const server = new webpackDevServer({ hot: false, client: false }, compiler);

(async () => {
  await server.start();
  console.log('dev server is running')
})()