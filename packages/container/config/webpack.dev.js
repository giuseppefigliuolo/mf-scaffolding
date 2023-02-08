//merge serve a mergiare più config tra loro
const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/index.html',
      historyApiFallback: true
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        auth: 'app-one@http://localhost:8082/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
}
module.exports = merge(commonConfig, devConfig)