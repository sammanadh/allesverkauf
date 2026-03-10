/**
  * DISCLOSURE: AI Generated Code 
  * Much of these configuration code was genrated using ClaudeAI
  * The author and adopted and verified the code for correctness.
*/

// webpack.config.ts
import webpack from 'webpack';
import type { Configuration as DevConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const { ModuleFederationPlugin } = webpack.container;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
type WebpackConfig = webpack.Configuration | DevConfiguration;
const distPath = 'deployments/webpack/dist';

const appTitle = 'Product Search (Webpack)';
const appName = 'product_search';
const port = 3019;

const configFunc = (_env: any, argv: { mode?: "production" | "development" }): WebpackConfig => {
  const isProd = argv.mode === 'production';

  return {
    mode: argv.mode || 'development',
    devtool: isProd ? 'source-map' : 'eval-source-map',
    output: {
      path: path.resolve(__dirname, distPath),
      filename: isProd ? '[name].[contenthash].js' : '[name].js',
      chunkFilename: isProd ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
      clean: true,
      publicPath: 'auto',
    },
    devServer: {
      port: port,
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
      new ModuleFederationPlugin({
        name: appName,
        filename: 'remoteEntry.js',
        exposes: {
          // Add your exposed modules here when needed
          '.': './src/components/ProviderComponent.tsx',
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
          '@headlessui/react': { singleton: true },
          '@heroicons/react': { singleton: true },
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
      minimize: isProd
    },
  };
};

export default configFunc;
