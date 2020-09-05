const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

const babelOptions = (preset) => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties']
  };

  if (preset) opts.presets.push(preset);

  return opts;
};

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'index.js',
    library: pkg.name,
    libraryTarget: 'umd'
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.(png|svg)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: {sourceMap: true, config: {path: 'postcss.config.js'}}
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions()
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
      }
    ]
  },
  externals: [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)]
};
