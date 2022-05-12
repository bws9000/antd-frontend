const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

  console.log(JSON.stringify(env));
  const envPath = path.join(__dirname, `environments`, `.env.${env.mode}`)

  return {
    // mode: process.env.mode,
    entry: path.join(__dirname, `src`, `index.tsx`),
    devtool: 'inline-source-map',
    output: {
      path:path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'less-loader',
              options: {
                lessOptions: { 
                  // modifyVars: {
                  //   'primary-color': '#0A66C2',
                  //   'link-color': '#0A66C2',
                  //   'border-radius-base': '2px',
                  // },
                  javascriptEnabled: true,
                },
              }, 
            }
          ]
        },
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `public`, `index.html`),
      }),
      new Dotenv({
        path: envPath,
      })
    ],
  }
}