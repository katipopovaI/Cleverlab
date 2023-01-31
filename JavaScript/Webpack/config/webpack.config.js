"use strict";

let path = require("path"); //техническая переменная для правильной работы

module.exports = {
  mode: "development", // режим в котором работает webpack
  entry: "./src/js/script.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/js",
  },
  watch: true,

  devtool: "source-map", //технология хранящая информацию об исходниках

  module: {},
};
