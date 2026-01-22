// webpack.config.js (Provider App)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // Adjust to your entry point
  
  output: {
    path: path.resolve(__dirname, 'dist-webpack'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: 'auto',
  },

  devServer: {
    port: 3012, // Different from rsbuild port
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'provider',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button', // Adjust paths to your components
        './Header': './src/components/Header',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.0.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.0.0',
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // Adjust to your HTML template path
      title: 'Provider App (Webpack)',
    }),
  ],

  optimization: {
    runtimeChunk: 'single',
  },
};