"use strict";

let path = require("path"); //техническая переменная для правильной работы

module.exports = {
  mode: "development", // режим в котором работает webpack
  entry: "./js/script.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/js",
  },
  watch: true,

  devtool: "source-map", //технология хранящая информацию об исходниках

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
