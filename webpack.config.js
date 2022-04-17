const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 1233,
    overlay: true, //for errors
    writeToDisk: true,
  },
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "images/[name].[ext]",
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // المسار المراد رفع الصور عليه
            },
          },
        ],
      },
    ],
  },
  // plugins

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/contact_us.html",
      filename: "contact_us.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/product_one.html",
      filename: "product_one.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/product_two.html",
      filename: "product_two.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/product_three.html",
      filename: "product_three.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/distributors.html",
      filename: "distributors.html",
    }),
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        webpack: {
          hashFilenames: false,
        },
      },
    }),
  ],
};
