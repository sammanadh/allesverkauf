// webpack.config.ts
import webpack from 'webpack';
import type { Configuration as DevConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const { ModuleFederationPlugin } = webpack.container;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = 'deployments/webpack/dist';
type WebpackConfig = webpack.Configuration | DevConfiguration;

const appTitle = 'Runtime (Webpack)';

const configFunc = (_env: any, argv: { mode?: "production" | "development" }): WebpackConfig => {
  const isProd = argv.mode === 'production';

  return {
    mode: argv.mode || 'development',
    devtool: isProd ? 'source-map' : 'eval-source-map',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, distPath),
      filename: isProd ? '[name].[contenthash].js' : '[name].js',
      chunkFilename: isProd ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
      clean: true,
      publicPath: isProd ? 'auto' : '/'
    },
    devServer: {
      port: 3011,
      hot: true,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      static: {
        directory: path.join(__dirname, 'public'),
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
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
                ['@babel/preset-env', { targets: 'defaults' }],
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BUILD_TOOL': JSON.stringify('webpack'),
      }),
      new ModuleFederationPlugin({
        name: 'run-time',
        filename: 'remoteEntry.js',
        remotes: {
          'cart': 'cart@https://allesverkaufcartwp.vercel.app/remoteEntry.js',
          'header': 'header@https://allesverkaufheaderwp.vercel.app//remoteEntry.js',
          'checkout': 'checkout@https://allesverkaufcheckoutwp.vercel.app/remoteEntry.js',
          'confirmation': 'confirmation@https://allesverkaufconfirmationwp.vercel.app/remoteEntry.js',
          'product_collection': 'product_collection@https://allesverkaufproductcollectionwp.vercel.app/remoteEntry.js',
          'hero': 'hero@https://allesverkaufherowp.vercel.app/remoteEntry.js',
          'product_search': 'product_search@https://allesverkaufproductsearchwp.vercel.app/remoteEntry.js'
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: '^19.0.0',
            eager: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '^19.0.0',
            eager: false,
          },
        },
      }),
      new HtmlWebpackPlugin({
        title: 'Checkout (Webpack)',
        // need this because the public folder is empty, and there is not index.html file
        templateContent: () => `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>${appTitle}</title>
            </head>
            <body>
              <div id="root"></div>
            </body>
          </html>
        `,
        minify: isProd ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          minifyJS: true,
          minifyCSS: true,
        } : false,
      }),
    ],
    optimization: {
      minimize: isProd,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};

export default configFunc;
