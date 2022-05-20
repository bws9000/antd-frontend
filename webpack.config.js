const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

// dfx config
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const USE_DFX_DEPLOY = false;
// /dfx config

if(!USE_DFX_DEPLOY){
  
module.exports = env => {
  
  console.log(JSON.stringify(env));
  const envPath = path.join(__dirname, `environments`, `.env.${env.mode}`)
  
    return {
      entry: path.join(__dirname, 'src', '_dfx_app_assets', 'src', 'index.tsx'),
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
        fallback: {
          crypto: require.resolve("crypto-browserify"), 
          stream: require.resolve("stream-browserify"), 
          assert: require.resolve("assert"), 
          http: require.resolve("stream-http"), 
          https: require.resolve("https-browserify"), 
          os: require.resolve("os-browserify"), 
          url: require.resolve("url"),
        }
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', '_dfx_app_assets', 'src', 'index.html'),
        }),
        new Dotenv({
          path: envPath,
        }),
        new NodePolyfillPlugin()
      ],
    }

}
} else {

  function initCanisterEnv() {
    let localCanisters, prodCanisters;
    try {
      localCanisters = require(path.resolve(
        ".dfx",
        "local",
        "canister_ids.json"
      ));
    } catch (error) {
      console.log("No local canister_ids.json found. Continuing production");
    }
    try {
      prodCanisters = require(path.resolve("canister_ids.json"));
    } catch (error) {
      console.log("No production canister_ids.json found. Continuing with local");
    }

    const network =
      process.env.DFX_NETWORK ||
      (process.env.NODE_ENV === "production" ? "ic" : "local");

    const canisterConfig = network === "local" ? localCanisters : prodCanisters;

    return Object.entries(canisterConfig).reduce((prev, current) => {
      const [canisterName, canisterDetails] = current;
      prev[canisterName.toUpperCase() + "_CANISTER_ID"] =
        canisterDetails[network];
      return prev;
    }, {});
  }

  const canisterEnvVariables = initCanisterEnv();
  const isDevelopment = process.env.NODE_ENV !== "production";
  const frontendDirectory = "_dfx_app_assets";
  const asset_entry = path.join("src", frontendDirectory, "src", "index.html");

  module.exports = {

  
    target: "web",
    mode: isDevelopment ? "development" : "production",
    entry: {
      // The frontend.entrypoint points to the HTML file for this build, so we need
      // to replace the extension to `.js`.
      index: path.join(__dirname, asset_entry).replace(/\.html$/, ".tsx"),
    },
    devtool: isDevelopment ? "source-map" : false,
    optimization: {
      minimize: !isDevelopment,
      minimizer: [new TerserPlugin()],
    },
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx"],
      fallback: {
        assert: require.resolve("assert/"),
        buffer: require.resolve("buffer/"),
        events: require.resolve("events/"),
        stream: require.resolve("stream-browserify/"),
        util: require.resolve("util/"),
        crypto: require.resolve("crypto-browserify"), 
        stream: require.resolve("stream-browserify"), 
        assert: require.resolve("assert"), 
        http: require.resolve("stream-http"), 
        https: require.resolve("https-browserify"), 
        os: require.resolve("os-browserify"), 
        url: require.resolve("url") 
      },
    },
    output: {
      filename: "index.js",
      path: path.join(__dirname, "dist", frontendDirectory),
    },

    // Depending in the language or framework you are using for
    // front-end development, add module loaders to the default
    // webpack configuration. For example, if you are using React
    // modules and CSS as described in the "Adding a stylesheet"
    // tutorial, uncomment the following lines:
    // module: {
    //  rules: [
    //    { test: /\.(ts|tsx|jsx)$/, loader: "ts-loader" },
    //    { test: /\.css$/, use: ['style-loader','css-loader'] }
    //  ]
    // },

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
        }
      ]
    },
    
    plugins: [
      new NodePolyfillPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, asset_entry),
        cache: false,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "src", frontendDirectory, "assets"),
            to: path.join(__dirname, "dist", frontendDirectory),
          },
        ],
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: "development",
        ...canisterEnvVariables,
      }),
      new webpack.ProvidePlugin({
        Buffer: [require.resolve("buffer/"), "Buffer"],
        process: require.resolve("process/browser"),
      }),
    ],
    // proxy /api to port 8000 during development
    devServer: {
      proxy: {
        "/api": {
          target: "http://127.0.0.1:8000",
          changeOrigin: true,
          pathRewrite: {
            "^/api": "/api",
          },
        },
      },
      hot: true,
      watchFiles: [path.resolve(__dirname, "src", frontendDirectory)],
      liveReload: true,
    },
  
};

}