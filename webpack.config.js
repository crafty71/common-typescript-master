const path = require('path')
const webpack = require('webpack')

const progress = new webpack.ProgressPlugin({
  activeModules: false,
  entries: true,
  modules: true,
  modulesCount: 5000,
  profile: false,
  dependencies: true,
  dependenciesCount: 10000,
  percentBy: null,
})

/**@type {import('webpack').Configuration}*/
const config = {
  target: 'node', // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
  entry: './src/index.ts', // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]',
    clean: true, // 在生成文件之前清空 output 目录
  },

  devtool: false,
  externals: {
    vscode: 'commonjs vscode', // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
  },
  resolve: {
    // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimize: false,
  },
  stats: {
    warnings: false,
    errors: false,
    logging: 'error',
    loggingTrace: false,
    modules: false,
    builtAt: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      esmodules: true,
                    },
                    modules: 'commonjs',
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [progress],
}

module.exports = config
